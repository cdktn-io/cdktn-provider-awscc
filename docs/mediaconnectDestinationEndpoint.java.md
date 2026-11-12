# `mediaconnectDestinationEndpoint` Submodule <a name="`mediaconnectDestinationEndpoint` Submodule" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaconnectDestinationEndpoint <a name="MediaconnectDestinationEndpoint" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint awscc_mediaconnect_destination_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_destination_endpoint.MediaconnectDestinationEndpoint;

MediaconnectDestinationEndpoint.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .configuration(MediaconnectDestinationEndpointConfiguration)
//  .description(java.lang.String)
//  .regionName(java.lang.String)
//  .tags(IResolvable|java.util.List<MediaconnectDestinationEndpointTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.Initializer.parameter.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfiguration">MediaconnectDestinationEndpointConfiguration</a></code> | The configuration settings for a destination endpoint. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the destination endpoint. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.Initializer.parameter.regionName">regionName</a></code> | <code>java.lang.String</code> | The name of the Amazon Web Services Region in which the destination endpoint is located. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTags">MediaconnectDestinationEndpointTags</a>></code> | The tags associated with the destination endpoint. Each tag is a key-value pair. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.Initializer.parameter.configuration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfiguration">MediaconnectDestinationEndpointConfiguration</a>

The configuration settings for a destination endpoint.

This is a union type, so exactly one of its members is set, depending on the type of the destination endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#configuration MediaconnectDestinationEndpoint#configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the destination endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#description MediaconnectDestinationEndpoint#description}

---

##### `regionName`<sup>Optional</sup> <a name="regionName" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.Initializer.parameter.regionName"></a>

- *Type:* java.lang.String

The name of the Amazon Web Services Region in which the destination endpoint is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#region_name MediaconnectDestinationEndpoint#region_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTags">MediaconnectDestinationEndpointTags</a>>

The tags associated with the destination endpoint. Each tag is a key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#tags MediaconnectDestinationEndpoint#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.putConfiguration">putConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.resetRegionName">resetRegionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfiguration` <a name="putConfiguration" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.putConfiguration"></a>

```java
public void putConfiguration(MediaconnectDestinationEndpointConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfiguration">MediaconnectDestinationEndpointConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<MediaconnectDestinationEndpointTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTags">MediaconnectDestinationEndpointTags</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetRegionName` <a name="resetRegionName" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.resetRegionName"></a>

```java
public void resetRegionName()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MediaconnectDestinationEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.isConstruct"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_destination_endpoint.MediaconnectDestinationEndpoint;

MediaconnectDestinationEndpoint.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_destination_endpoint.MediaconnectDestinationEndpoint;

MediaconnectDestinationEndpoint.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_destination_endpoint.MediaconnectDestinationEndpoint;

MediaconnectDestinationEndpoint.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_destination_endpoint.MediaconnectDestinationEndpoint;

MediaconnectDestinationEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MediaconnectDestinationEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a MediaconnectDestinationEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MediaconnectDestinationEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MediaconnectDestinationEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the MediaconnectDestinationEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.associatedResourceDetails">associatedResourceDetails</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference">MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.availabilityZoneId">availabilityZoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference">MediaconnectDestinationEndpointConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.connectionState">connectionState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.destinationEndpointId">destinationEndpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.destinationType">destinationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.lifecycleManagement">lifecycleManagement</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.registrationState">registrationState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList">MediaconnectDestinationEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.configurationInput">configurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfiguration">MediaconnectDestinationEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.regionNameInput">regionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTags">MediaconnectDestinationEndpointTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.regionName">regionName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `associatedResourceDetails`<sup>Required</sup> <a name="associatedResourceDetails" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.associatedResourceDetails"></a>

```java
public MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference getAssociatedResourceDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference">MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference</a>

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `availabilityZoneId`<sup>Required</sup> <a name="availabilityZoneId" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.availabilityZoneId"></a>

```java
public java.lang.String getAvailabilityZoneId();
```

- *Type:* java.lang.String

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.configuration"></a>

```java
public MediaconnectDestinationEndpointConfigurationOutputReference getConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference">MediaconnectDestinationEndpointConfigurationOutputReference</a>

---

##### `connectionState`<sup>Required</sup> <a name="connectionState" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.connectionState"></a>

```java
public java.lang.String getConnectionState();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `destinationEndpointId`<sup>Required</sup> <a name="destinationEndpointId" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.destinationEndpointId"></a>

```java
public java.lang.String getDestinationEndpointId();
```

- *Type:* java.lang.String

---

##### `destinationType`<sup>Required</sup> <a name="destinationType" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.destinationType"></a>

```java
public java.lang.String getDestinationType();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lifecycleManagement`<sup>Required</sup> <a name="lifecycleManagement" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.lifecycleManagement"></a>

```java
public java.lang.String getLifecycleManagement();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `registrationState`<sup>Required</sup> <a name="registrationState" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.registrationState"></a>

```java
public java.lang.String getRegistrationState();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.tags"></a>

```java
public MediaconnectDestinationEndpointTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList">MediaconnectDestinationEndpointTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.configurationInput"></a>

```java
public IResolvable|MediaconnectDestinationEndpointConfiguration getConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfiguration">MediaconnectDestinationEndpointConfiguration</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `regionNameInput`<sup>Optional</sup> <a name="regionNameInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.regionNameInput"></a>

```java
public java.lang.String getRegionNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.tagsInput"></a>

```java
public IResolvable|java.util.List<MediaconnectDestinationEndpointTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTags">MediaconnectDestinationEndpointTags</a>>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `regionName`<sup>Required</sup> <a name="regionName" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.regionName"></a>

```java
public java.lang.String getRegionName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MediaconnectDestinationEndpointAssociatedResourceDetails <a name="MediaconnectDestinationEndpointAssociatedResourceDetails" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetails.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_destination_endpoint.MediaconnectDestinationEndpointAssociatedResourceDetails;

MediaconnectDestinationEndpointAssociatedResourceDetails.builder()
    .build();
```


### MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInput <a name="MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInput.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_destination_endpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInput;

MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInput.builder()
    .build();
```


### MediaconnectDestinationEndpointConfig <a name="MediaconnectDestinationEndpointConfig" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_destination_endpoint.MediaconnectDestinationEndpointConfig;

MediaconnectDestinationEndpointConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .configuration(MediaconnectDestinationEndpointConfiguration)
//  .description(java.lang.String)
//  .regionName(java.lang.String)
//  .tags(IResolvable|java.util.List<MediaconnectDestinationEndpointTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfiguration">MediaconnectDestinationEndpointConfiguration</a></code> | The configuration settings for a destination endpoint. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the destination endpoint. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig.property.regionName">regionName</a></code> | <code>java.lang.String</code> | The name of the Amazon Web Services Region in which the destination endpoint is located. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTags">MediaconnectDestinationEndpointTags</a>></code> | The tags associated with the destination endpoint. Each tag is a key-value pair. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig.property.configuration"></a>

```java
public MediaconnectDestinationEndpointConfiguration getConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfiguration">MediaconnectDestinationEndpointConfiguration</a>

The configuration settings for a destination endpoint.

This is a union type, so exactly one of its members is set, depending on the type of the destination endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#configuration MediaconnectDestinationEndpoint#configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the destination endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#description MediaconnectDestinationEndpoint#description}

---

##### `regionName`<sup>Optional</sup> <a name="regionName" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig.property.regionName"></a>

```java
public java.lang.String getRegionName();
```

- *Type:* java.lang.String

The name of the Amazon Web Services Region in which the destination endpoint is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#region_name MediaconnectDestinationEndpoint#region_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig.property.tags"></a>

```java
public IResolvable|java.util.List<MediaconnectDestinationEndpointTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTags">MediaconnectDestinationEndpointTags</a>>

The tags associated with the destination endpoint. Each tag is a key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#tags MediaconnectDestinationEndpoint#tags}

---

### MediaconnectDestinationEndpointConfiguration <a name="MediaconnectDestinationEndpointConfiguration" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_destination_endpoint.MediaconnectDestinationEndpointConfiguration;

MediaconnectDestinationEndpointConfiguration.builder()
//  .routerInput(MediaconnectDestinationEndpointConfigurationRouterInput)
//  .standard(MediaconnectDestinationEndpointConfigurationStandard)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfiguration.property.routerInput">routerInput</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInput">MediaconnectDestinationEndpointConfigurationRouterInput</a></code> | The configuration settings for a destination endpoint that represents a router input. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfiguration.property.standard">standard</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandard">MediaconnectDestinationEndpointConfigurationStandard</a></code> | The configuration settings for a standard destination endpoint. |

---

##### `routerInput`<sup>Optional</sup> <a name="routerInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfiguration.property.routerInput"></a>

```java
public MediaconnectDestinationEndpointConfigurationRouterInput getRouterInput();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInput">MediaconnectDestinationEndpointConfigurationRouterInput</a>

The configuration settings for a destination endpoint that represents a router input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#router_input MediaconnectDestinationEndpoint#router_input}

---

##### `standard`<sup>Optional</sup> <a name="standard" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfiguration.property.standard"></a>

```java
public MediaconnectDestinationEndpointConfigurationStandard getStandard();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandard">MediaconnectDestinationEndpointConfigurationStandard</a>

The configuration settings for a standard destination endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#standard MediaconnectDestinationEndpoint#standard}

---

### MediaconnectDestinationEndpointConfigurationRouterInput <a name="MediaconnectDestinationEndpointConfigurationRouterInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInput.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_destination_endpoint.MediaconnectDestinationEndpointConfigurationRouterInput;

MediaconnectDestinationEndpointConfigurationRouterInput.builder()
//  .routerInputArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInput.property.routerInputArn">routerInputArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the router input that the destination endpoint represents. |

---

##### `routerInputArn`<sup>Optional</sup> <a name="routerInputArn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInput.property.routerInputArn"></a>

```java
public java.lang.String getRouterInputArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the router input that the destination endpoint represents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#router_input_arn MediaconnectDestinationEndpoint#router_input_arn}

---

### MediaconnectDestinationEndpointConfigurationStandard <a name="MediaconnectDestinationEndpointConfigurationStandard" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandard"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandard.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_destination_endpoint.MediaconnectDestinationEndpointConfigurationStandard;

MediaconnectDestinationEndpointConfigurationStandard.builder()
//  .destinationNetworkingConfiguration(MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration)
//  .destinationNetworkingType(java.lang.String)
//  .name(java.lang.String)
//  .protocol(java.lang.String)
//  .protocolConfiguration(MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandard.property.destinationNetworkingConfiguration">destinationNetworkingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration</a></code> | The networking configuration for a standard destination endpoint. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandard.property.destinationNetworkingType">destinationNetworkingType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#destination_networking_type MediaconnectDestinationEndpoint#destination_networking_type}. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandard.property.name">name</a></code> | <code>java.lang.String</code> | The name of the destination endpoint. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandard.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#protocol MediaconnectDestinationEndpoint#protocol}. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandard.property.protocolConfiguration">protocolConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration">MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration</a></code> | The protocol configuration for a standard destination endpoint. |

---

##### `destinationNetworkingConfiguration`<sup>Optional</sup> <a name="destinationNetworkingConfiguration" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandard.property.destinationNetworkingConfiguration"></a>

```java
public MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration getDestinationNetworkingConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration</a>

The networking configuration for a standard destination endpoint.

This is a union type, so exactly one of its members is set: public for a publicly accessible endpoint, or vpc for an endpoint in a virtual private cloud (VPC).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#destination_networking_configuration MediaconnectDestinationEndpoint#destination_networking_configuration}

---

##### `destinationNetworkingType`<sup>Optional</sup> <a name="destinationNetworkingType" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandard.property.destinationNetworkingType"></a>

```java
public java.lang.String getDestinationNetworkingType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#destination_networking_type MediaconnectDestinationEndpoint#destination_networking_type}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandard.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the destination endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#name MediaconnectDestinationEndpoint#name}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandard.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#protocol MediaconnectDestinationEndpoint#protocol}.

---

##### `protocolConfiguration`<sup>Optional</sup> <a name="protocolConfiguration" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandard.property.protocolConfiguration"></a>

```java
public MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration getProtocolConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration">MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration</a>

The protocol configuration for a standard destination endpoint.

This is a union type, so exactly one of its members is set, depending on the protocol that the destination endpoint uses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#protocol_configuration MediaconnectDestinationEndpoint#protocol_configuration}

---

### MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration <a name="MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_destination_endpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration;

MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration.builder()
//  .public(MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic)
//  .vpc(MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration.property.public">public</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic</a></code> | The networking configuration for a publicly accessible destination endpoint, including the CIDR blocks that are allowed to connect. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration.property.vpc">vpc</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc</a></code> | The networking configuration for a destination endpoint in a virtual private cloud (VPC). |

---

##### `public`<sup>Optional</sup> <a name="public" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration.property.public"></a>

```java
public MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic getPublic();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic</a>

The networking configuration for a publicly accessible destination endpoint, including the CIDR blocks that are allowed to connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#public MediaconnectDestinationEndpoint#public}

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration.property.vpc"></a>

```java
public MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc getVpc();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc</a>

The networking configuration for a destination endpoint in a virtual private cloud (VPC).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#vpc MediaconnectDestinationEndpoint#vpc}

---

### MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic <a name="MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_destination_endpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic;

MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic.builder()
//  .destinationAllowRules(IResolvable|java.util.List<MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic.property.destinationAllowRules">destinationAllowRules</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules</a>></code> | The rules that specify which CIDR blocks can connect to the destination endpoint. |

---

##### `destinationAllowRules`<sup>Optional</sup> <a name="destinationAllowRules" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic.property.destinationAllowRules"></a>

```java
public IResolvable|java.util.List<MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules> getDestinationAllowRules();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules</a>>

The rules that specify which CIDR blocks can connect to the destination endpoint.

You can specify up to 10 rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#destination_allow_rules MediaconnectDestinationEndpoint#destination_allow_rules}

---

### MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules <a name="MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_destination_endpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules;

MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules.builder()
//  .cidr(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules.property.cidr">cidr</a></code> | <code>java.lang.String</code> | The CIDR block that is allowed to connect to the destination endpoint, in CIDR notation. |

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules.property.cidr"></a>

```java
public java.lang.String getCidr();
```

- *Type:* java.lang.String

The CIDR block that is allowed to connect to the destination endpoint, in CIDR notation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#cidr MediaconnectDestinationEndpoint#cidr}

---

### MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc <a name="MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_destination_endpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc;

MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc.builder()
//  .securityGroupIds(java.util.List<java.lang.String>)
//  .subnetId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | The IDs of the security groups to associate with the destination endpoint. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | The ID of the subnet to use for the destination endpoint. |

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

The IDs of the security groups to associate with the destination endpoint.

You can specify from 1 to 5 security groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#security_group_ids MediaconnectDestinationEndpoint#security_group_ids}

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

The ID of the subnet to use for the destination endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#subnet_id MediaconnectDestinationEndpoint#subnet_id}

---

### MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration <a name="MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_destination_endpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration;

MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration.builder()
//  .rist(MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist)
//  .rtp(MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp)
//  .srtCaller(MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller)
//  .srtListener(MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration.property.rist">rist</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist</a></code> | The configuration settings for a destination endpoint that uses the RIST protocol. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration.property.rtp">rtp</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp</a></code> | The configuration settings for a destination endpoint that uses the RTP protocol. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration.property.srtCaller">srtCaller</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller</a></code> | The configuration settings for a destination endpoint that uses SRT in caller mode. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration.property.srtListener">srtListener</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener</a></code> | The configuration settings for a destination endpoint that uses SRT in listener mode. |

---

##### `rist`<sup>Optional</sup> <a name="rist" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration.property.rist"></a>

```java
public MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist getRist();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist</a>

The configuration settings for a destination endpoint that uses the RIST protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#rist MediaconnectDestinationEndpoint#rist}

---

##### `rtp`<sup>Optional</sup> <a name="rtp" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration.property.rtp"></a>

```java
public MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp getRtp();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp</a>

The configuration settings for a destination endpoint that uses the RTP protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#rtp MediaconnectDestinationEndpoint#rtp}

---

##### `srtCaller`<sup>Optional</sup> <a name="srtCaller" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration.property.srtCaller"></a>

```java
public MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller getSrtCaller();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller</a>

The configuration settings for a destination endpoint that uses SRT in caller mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#srt_caller MediaconnectDestinationEndpoint#srt_caller}

---

##### `srtListener`<sup>Optional</sup> <a name="srtListener" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration.property.srtListener"></a>

```java
public MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener getSrtListener();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener</a>

The configuration settings for a destination endpoint that uses SRT in listener mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#srt_listener MediaconnectDestinationEndpoint#srt_listener}

---

### MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist <a name="MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_destination_endpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist;

MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist.builder()
//  .destinationAddress(java.lang.String)
//  .destinationIngestPort(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist.property.destinationAddress">destinationAddress</a></code> | <code>java.lang.String</code> | The IP address on which the destination endpoint receives content. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist.property.destinationIngestPort">destinationIngestPort</a></code> | <code>java.lang.Number</code> | The port on which the destination endpoint receives content. The valid range is 1024 to 65531. |

---

##### `destinationAddress`<sup>Optional</sup> <a name="destinationAddress" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist.property.destinationAddress"></a>

```java
public java.lang.String getDestinationAddress();
```

- *Type:* java.lang.String

The IP address on which the destination endpoint receives content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#destination_address MediaconnectDestinationEndpoint#destination_address}

---

##### `destinationIngestPort`<sup>Optional</sup> <a name="destinationIngestPort" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist.property.destinationIngestPort"></a>

```java
public java.lang.Number getDestinationIngestPort();
```

- *Type:* java.lang.Number

The port on which the destination endpoint receives content. The valid range is 1024 to 65531.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#destination_ingest_port MediaconnectDestinationEndpoint#destination_ingest_port}

---

### MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp <a name="MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_destination_endpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp;

MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp.builder()
//  .destinationAddress(java.lang.String)
//  .destinationIngestPort(java.lang.Number)
//  .forwardErrorCorrectionState(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp.property.destinationAddress">destinationAddress</a></code> | <code>java.lang.String</code> | The IP address on which the destination endpoint receives content. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp.property.destinationIngestPort">destinationIngestPort</a></code> | <code>java.lang.Number</code> | The port on which the destination endpoint receives content. The valid range is 1024 to 65531. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp.property.forwardErrorCorrectionState">forwardErrorCorrectionState</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#forward_error_correction_state MediaconnectDestinationEndpoint#forward_error_correction_state}. |

---

##### `destinationAddress`<sup>Optional</sup> <a name="destinationAddress" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp.property.destinationAddress"></a>

```java
public java.lang.String getDestinationAddress();
```

- *Type:* java.lang.String

The IP address on which the destination endpoint receives content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#destination_address MediaconnectDestinationEndpoint#destination_address}

---

##### `destinationIngestPort`<sup>Optional</sup> <a name="destinationIngestPort" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp.property.destinationIngestPort"></a>

```java
public java.lang.Number getDestinationIngestPort();
```

- *Type:* java.lang.Number

The port on which the destination endpoint receives content. The valid range is 1024 to 65531.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#destination_ingest_port MediaconnectDestinationEndpoint#destination_ingest_port}

---

##### `forwardErrorCorrectionState`<sup>Optional</sup> <a name="forwardErrorCorrectionState" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp.property.forwardErrorCorrectionState"></a>

```java
public java.lang.String getForwardErrorCorrectionState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#forward_error_correction_state MediaconnectDestinationEndpoint#forward_error_correction_state}.

---

### MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller <a name="MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_destination_endpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller;

MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller.builder()
//  .encryptionPassphrase(MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase)
//  .minimumLatencyMilliseconds(java.lang.Number)
//  .sourceListenerPort(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller.property.encryptionPassphrase">encryptionPassphrase</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase</a></code> | The configuration for the Secrets Manager secret that holds the key or passphrase used to encrypt an endpoint connection. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller.property.minimumLatencyMilliseconds">minimumLatencyMilliseconds</a></code> | <code>java.lang.Number</code> | The minimum latency, in milliseconds, for the SRT connection. The valid range is 10 to 10000. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller.property.sourceListenerPort">sourceListenerPort</a></code> | <code>java.lang.Number</code> | The port on which the source listens for the connection. The valid range is 3000 to 30000. |

---

##### `encryptionPassphrase`<sup>Optional</sup> <a name="encryptionPassphrase" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller.property.encryptionPassphrase"></a>

```java
public MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase getEncryptionPassphrase();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase</a>

The configuration for the Secrets Manager secret that holds the key or passphrase used to encrypt an endpoint connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#encryption_passphrase MediaconnectDestinationEndpoint#encryption_passphrase}

---

##### `minimumLatencyMilliseconds`<sup>Optional</sup> <a name="minimumLatencyMilliseconds" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller.property.minimumLatencyMilliseconds"></a>

```java
public java.lang.Number getMinimumLatencyMilliseconds();
```

- *Type:* java.lang.Number

The minimum latency, in milliseconds, for the SRT connection. The valid range is 10 to 10000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#minimum_latency_milliseconds MediaconnectDestinationEndpoint#minimum_latency_milliseconds}

---

##### `sourceListenerPort`<sup>Optional</sup> <a name="sourceListenerPort" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller.property.sourceListenerPort"></a>

```java
public java.lang.Number getSourceListenerPort();
```

- *Type:* java.lang.Number

The port on which the source listens for the connection. The valid range is 3000 to 30000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#source_listener_port MediaconnectDestinationEndpoint#source_listener_port}

---

### MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase <a name="MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_destination_endpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase;

MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase.builder()
//  .secretArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase.property.secretArn">secretArn</a></code> | <code>java.lang.String</code> | The ARN of the Secrets Manager secret that holds the key or passphrase. |

---

##### `secretArn`<sup>Optional</sup> <a name="secretArn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase.property.secretArn"></a>

```java
public java.lang.String getSecretArn();
```

- *Type:* java.lang.String

The ARN of the Secrets Manager secret that holds the key or passphrase.

The secret must be encrypted with a customer managed Amazon Web Services KMS key that is enabled and symmetric; it cannot use the Amazon Web Services managed key aws/secretsmanager. The secret must be in the same Amazon Web Services account and Region as the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#secret_arn MediaconnectDestinationEndpoint#secret_arn}

---

### MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener <a name="MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_destination_endpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener;

MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener.builder()
//  .destinationAddress(java.lang.String)
//  .destinationIngestPort(java.lang.Number)
//  .encryptionPassphrase(MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase)
//  .minimumLatencyMilliseconds(java.lang.Number)
//  .streamId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener.property.destinationAddress">destinationAddress</a></code> | <code>java.lang.String</code> | The IP address on which the destination endpoint listens for incoming connections. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener.property.destinationIngestPort">destinationIngestPort</a></code> | <code>java.lang.Number</code> | The port on which the destination endpoint listens for incoming connections. The valid range is 0 to 65531. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener.property.encryptionPassphrase">encryptionPassphrase</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase</a></code> | The configuration for the Secrets Manager secret that holds the key or passphrase used to encrypt an endpoint connection. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener.property.minimumLatencyMilliseconds">minimumLatencyMilliseconds</a></code> | <code>java.lang.Number</code> | The minimum latency, in milliseconds, for the SRT connection. The valid range is 10 to 10000. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener.property.streamId">streamId</a></code> | <code>java.lang.String</code> | The stream ID that identifies the content for the SRT connection. |

---

##### `destinationAddress`<sup>Optional</sup> <a name="destinationAddress" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener.property.destinationAddress"></a>

```java
public java.lang.String getDestinationAddress();
```

- *Type:* java.lang.String

The IP address on which the destination endpoint listens for incoming connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#destination_address MediaconnectDestinationEndpoint#destination_address}

---

##### `destinationIngestPort`<sup>Optional</sup> <a name="destinationIngestPort" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener.property.destinationIngestPort"></a>

```java
public java.lang.Number getDestinationIngestPort();
```

- *Type:* java.lang.Number

The port on which the destination endpoint listens for incoming connections. The valid range is 0 to 65531.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#destination_ingest_port MediaconnectDestinationEndpoint#destination_ingest_port}

---

##### `encryptionPassphrase`<sup>Optional</sup> <a name="encryptionPassphrase" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener.property.encryptionPassphrase"></a>

```java
public MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase getEncryptionPassphrase();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase</a>

The configuration for the Secrets Manager secret that holds the key or passphrase used to encrypt an endpoint connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#encryption_passphrase MediaconnectDestinationEndpoint#encryption_passphrase}

---

##### `minimumLatencyMilliseconds`<sup>Optional</sup> <a name="minimumLatencyMilliseconds" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener.property.minimumLatencyMilliseconds"></a>

```java
public java.lang.Number getMinimumLatencyMilliseconds();
```

- *Type:* java.lang.Number

The minimum latency, in milliseconds, for the SRT connection. The valid range is 10 to 10000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#minimum_latency_milliseconds MediaconnectDestinationEndpoint#minimum_latency_milliseconds}

---

##### `streamId`<sup>Optional</sup> <a name="streamId" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener.property.streamId"></a>

```java
public java.lang.String getStreamId();
```

- *Type:* java.lang.String

The stream ID that identifies the content for the SRT connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#stream_id MediaconnectDestinationEndpoint#stream_id}

---

### MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase <a name="MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_destination_endpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase;

MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase.builder()
//  .secretArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase.property.secretArn">secretArn</a></code> | <code>java.lang.String</code> | The ARN of the Secrets Manager secret that holds the key or passphrase. |

---

##### `secretArn`<sup>Optional</sup> <a name="secretArn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase.property.secretArn"></a>

```java
public java.lang.String getSecretArn();
```

- *Type:* java.lang.String

The ARN of the Secrets Manager secret that holds the key or passphrase.

The secret must be encrypted with a customer managed Amazon Web Services KMS key that is enabled and symmetric; it cannot use the Amazon Web Services managed key aws/secretsmanager. The secret must be in the same Amazon Web Services account and Region as the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#secret_arn MediaconnectDestinationEndpoint#secret_arn}

---

### MediaconnectDestinationEndpointTags <a name="MediaconnectDestinationEndpointTags" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_destination_endpoint.MediaconnectDestinationEndpointTags;

MediaconnectDestinationEndpointTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#key MediaconnectDestinationEndpoint#key}. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#value MediaconnectDestinationEndpoint#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#key MediaconnectDestinationEndpoint#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#value MediaconnectDestinationEndpoint#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference <a name="MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_destination_endpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference;

new MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.property.routerInput">routerInput</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference">MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.property.standard">standard</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetails">MediaconnectDestinationEndpointAssociatedResourceDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `routerInput`<sup>Required</sup> <a name="routerInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.property.routerInput"></a>

```java
public MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference getRouterInput();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference">MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference</a>

---

##### `standard`<sup>Required</sup> <a name="standard" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.property.standard"></a>

```java
public java.lang.String getStandard();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.property.internalValue"></a>

```java
public MediaconnectDestinationEndpointAssociatedResourceDetails getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetails">MediaconnectDestinationEndpointAssociatedResourceDetails</a>

---


### MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference <a name="MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_destination_endpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference;

new MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.property.maximumBitrate">maximumBitrate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInput">MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maximumBitrate`<sup>Required</sup> <a name="maximumBitrate" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.property.maximumBitrate"></a>

```java
public java.lang.Number getMaximumBitrate();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.property.internalValue"></a>

```java
public MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInput">MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInput</a>

---


### MediaconnectDestinationEndpointConfigurationOutputReference <a name="MediaconnectDestinationEndpointConfigurationOutputReference" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_destination_endpoint.MediaconnectDestinationEndpointConfigurationOutputReference;

new MediaconnectDestinationEndpointConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.putRouterInput">putRouterInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.putStandard">putStandard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.resetRouterInput">resetRouterInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.resetStandard">resetStandard</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRouterInput` <a name="putRouterInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.putRouterInput"></a>

```java
public void putRouterInput(MediaconnectDestinationEndpointConfigurationRouterInput value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.putRouterInput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInput">MediaconnectDestinationEndpointConfigurationRouterInput</a>

---

##### `putStandard` <a name="putStandard" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.putStandard"></a>

```java
public void putStandard(MediaconnectDestinationEndpointConfigurationStandard value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.putStandard.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandard">MediaconnectDestinationEndpointConfigurationStandard</a>

---

##### `resetRouterInput` <a name="resetRouterInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.resetRouterInput"></a>

```java
public void resetRouterInput()
```

##### `resetStandard` <a name="resetStandard" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.resetStandard"></a>

```java
public void resetStandard()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.property.routerInput">routerInput</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference">MediaconnectDestinationEndpointConfigurationRouterInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.property.standard">standard</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference">MediaconnectDestinationEndpointConfigurationStandardOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.property.routerInputInput">routerInputInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInput">MediaconnectDestinationEndpointConfigurationRouterInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.property.standardInput">standardInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandard">MediaconnectDestinationEndpointConfigurationStandard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfiguration">MediaconnectDestinationEndpointConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `routerInput`<sup>Required</sup> <a name="routerInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.property.routerInput"></a>

```java
public MediaconnectDestinationEndpointConfigurationRouterInputOutputReference getRouterInput();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference">MediaconnectDestinationEndpointConfigurationRouterInputOutputReference</a>

---

##### `standard`<sup>Required</sup> <a name="standard" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.property.standard"></a>

```java
public MediaconnectDestinationEndpointConfigurationStandardOutputReference getStandard();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference">MediaconnectDestinationEndpointConfigurationStandardOutputReference</a>

---

##### `routerInputInput`<sup>Optional</sup> <a name="routerInputInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.property.routerInputInput"></a>

```java
public IResolvable|MediaconnectDestinationEndpointConfigurationRouterInput getRouterInputInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInput">MediaconnectDestinationEndpointConfigurationRouterInput</a>

---

##### `standardInput`<sup>Optional</sup> <a name="standardInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.property.standardInput"></a>

```java
public IResolvable|MediaconnectDestinationEndpointConfigurationStandard getStandardInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandard">MediaconnectDestinationEndpointConfigurationStandard</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|MediaconnectDestinationEndpointConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfiguration">MediaconnectDestinationEndpointConfiguration</a>

---


### MediaconnectDestinationEndpointConfigurationRouterInputOutputReference <a name="MediaconnectDestinationEndpointConfigurationRouterInputOutputReference" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_destination_endpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference;

new MediaconnectDestinationEndpointConfigurationRouterInputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.resetRouterInputArn">resetRouterInputArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRouterInputArn` <a name="resetRouterInputArn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.resetRouterInputArn"></a>

```java
public void resetRouterInputArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.property.routerInputArnInput">routerInputArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.property.routerInputArn">routerInputArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInput">MediaconnectDestinationEndpointConfigurationRouterInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `routerInputArnInput`<sup>Optional</sup> <a name="routerInputArnInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.property.routerInputArnInput"></a>

```java
public java.lang.String getRouterInputArnInput();
```

- *Type:* java.lang.String

---

##### `routerInputArn`<sup>Required</sup> <a name="routerInputArn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.property.routerInputArn"></a>

```java
public java.lang.String getRouterInputArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.property.internalValue"></a>

```java
public IResolvable|MediaconnectDestinationEndpointConfigurationRouterInput getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInput">MediaconnectDestinationEndpointConfigurationRouterInput</a>

---


### MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference <a name="MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_destination_endpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference;

new MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.putPublic">putPublic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.putVpc">putVpc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.resetPublic">resetPublic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.resetVpc">resetVpc</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPublic` <a name="putPublic" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.putPublic"></a>

```java
public void putPublic(MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.putPublic.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic</a>

---

##### `putVpc` <a name="putVpc" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.putVpc"></a>

```java
public void putVpc(MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.putVpc.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc</a>

---

##### `resetPublic` <a name="resetPublic" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.resetPublic"></a>

```java
public void resetPublic()
```

##### `resetVpc` <a name="resetVpc" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.resetVpc"></a>

```java
public void resetVpc()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.property.public">public</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.property.vpc">vpc</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.property.publicInput">publicInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.property.vpcInput">vpcInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `public`<sup>Required</sup> <a name="public" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.property.public"></a>

```java
public MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference getPublic();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference</a>

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.property.vpc"></a>

```java
public MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference getVpc();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference</a>

---

##### `publicInput`<sup>Optional</sup> <a name="publicInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.property.publicInput"></a>

```java
public IResolvable|MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic getPublicInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic</a>

---

##### `vpcInput`<sup>Optional</sup> <a name="vpcInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.property.vpcInput"></a>

```java
public IResolvable|MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc getVpcInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration</a>

---


### MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList <a name="MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_destination_endpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList;

new MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.get"></a>

```java
public MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules</a>>

---


### MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference <a name="MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_destination_endpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference;

new MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.resetCidr">resetCidr</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCidr` <a name="resetCidr" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.resetCidr"></a>

```java
public void resetCidr()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.property.cidrInput">cidrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.property.cidr">cidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cidrInput`<sup>Optional</sup> <a name="cidrInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.property.cidrInput"></a>

```java
public java.lang.String getCidrInput();
```

- *Type:* java.lang.String

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.property.cidr"></a>

```java
public java.lang.String getCidr();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.property.internalValue"></a>

```java
public IResolvable|MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules</a>

---


### MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference <a name="MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_destination_endpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference;

new MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.putDestinationAllowRules">putDestinationAllowRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.resetDestinationAllowRules">resetDestinationAllowRules</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestinationAllowRules` <a name="putDestinationAllowRules" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.putDestinationAllowRules"></a>

```java
public void putDestinationAllowRules(IResolvable|java.util.List<MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.putDestinationAllowRules.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules</a>>

---

##### `resetDestinationAllowRules` <a name="resetDestinationAllowRules" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.resetDestinationAllowRules"></a>

```java
public void resetDestinationAllowRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.property.destinationAllowRules">destinationAllowRules</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.property.destinationAllowRulesInput">destinationAllowRulesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationAllowRules`<sup>Required</sup> <a name="destinationAllowRules" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.property.destinationAllowRules"></a>

```java
public MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList getDestinationAllowRules();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList</a>

---

##### `destinationAllowRulesInput`<sup>Optional</sup> <a name="destinationAllowRulesInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.property.destinationAllowRulesInput"></a>

```java
public IResolvable|java.util.List<MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules> getDestinationAllowRulesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.property.internalValue"></a>

```java
public IResolvable|MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic</a>

---


### MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference <a name="MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_destination_endpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference;

new MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.resetSubnetId">resetSubnetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.resetSecurityGroupIds"></a>

```java
public void resetSecurityGroupIds()
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.resetSubnetId"></a>

```java
public void resetSubnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.property.securityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.property.internalValue"></a>

```java
public IResolvable|MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc</a>

---


### MediaconnectDestinationEndpointConfigurationStandardOutputReference <a name="MediaconnectDestinationEndpointConfigurationStandardOutputReference" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_destination_endpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference;

new MediaconnectDestinationEndpointConfigurationStandardOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.putDestinationNetworkingConfiguration">putDestinationNetworkingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.putProtocolConfiguration">putProtocolConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.resetDestinationNetworkingConfiguration">resetDestinationNetworkingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.resetDestinationNetworkingType">resetDestinationNetworkingType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.resetProtocolConfiguration">resetProtocolConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestinationNetworkingConfiguration` <a name="putDestinationNetworkingConfiguration" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.putDestinationNetworkingConfiguration"></a>

```java
public void putDestinationNetworkingConfiguration(MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.putDestinationNetworkingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration</a>

---

##### `putProtocolConfiguration` <a name="putProtocolConfiguration" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.putProtocolConfiguration"></a>

```java
public void putProtocolConfiguration(MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.putProtocolConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration">MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration</a>

---

##### `resetDestinationNetworkingConfiguration` <a name="resetDestinationNetworkingConfiguration" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.resetDestinationNetworkingConfiguration"></a>

```java
public void resetDestinationNetworkingConfiguration()
```

##### `resetDestinationNetworkingType` <a name="resetDestinationNetworkingType" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.resetDestinationNetworkingType"></a>

```java
public void resetDestinationNetworkingType()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.resetProtocol"></a>

```java
public void resetProtocol()
```

##### `resetProtocolConfiguration` <a name="resetProtocolConfiguration" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.resetProtocolConfiguration"></a>

```java
public void resetProtocolConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.destinationNetworkingConfiguration">destinationNetworkingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.protocolConfiguration">protocolConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.destinationNetworkingConfigurationInput">destinationNetworkingConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.destinationNetworkingTypeInput">destinationNetworkingTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.protocolConfigurationInput">protocolConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration">MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.destinationNetworkingType">destinationNetworkingType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandard">MediaconnectDestinationEndpointConfigurationStandard</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationNetworkingConfiguration`<sup>Required</sup> <a name="destinationNetworkingConfiguration" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.destinationNetworkingConfiguration"></a>

```java
public MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference getDestinationNetworkingConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference</a>

---

##### `protocolConfiguration`<sup>Required</sup> <a name="protocolConfiguration" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.protocolConfiguration"></a>

```java
public MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference getProtocolConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference</a>

---

##### `destinationNetworkingConfigurationInput`<sup>Optional</sup> <a name="destinationNetworkingConfigurationInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.destinationNetworkingConfigurationInput"></a>

```java
public IResolvable|MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration getDestinationNetworkingConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration</a>

---

##### `destinationNetworkingTypeInput`<sup>Optional</sup> <a name="destinationNetworkingTypeInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.destinationNetworkingTypeInput"></a>

```java
public java.lang.String getDestinationNetworkingTypeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `protocolConfigurationInput`<sup>Optional</sup> <a name="protocolConfigurationInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.protocolConfigurationInput"></a>

```java
public IResolvable|MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration getProtocolConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration">MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration</a>

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `destinationNetworkingType`<sup>Required</sup> <a name="destinationNetworkingType" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.destinationNetworkingType"></a>

```java
public java.lang.String getDestinationNetworkingType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.internalValue"></a>

```java
public IResolvable|MediaconnectDestinationEndpointConfigurationStandard getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandard">MediaconnectDestinationEndpointConfigurationStandard</a>

---


### MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference <a name="MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_destination_endpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference;

new MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.putRist">putRist</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.putRtp">putRtp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.putSrtCaller">putSrtCaller</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.putSrtListener">putSrtListener</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.resetRist">resetRist</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.resetRtp">resetRtp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.resetSrtCaller">resetSrtCaller</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.resetSrtListener">resetSrtListener</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRist` <a name="putRist" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.putRist"></a>

```java
public void putRist(MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.putRist.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist</a>

---

##### `putRtp` <a name="putRtp" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.putRtp"></a>

```java
public void putRtp(MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.putRtp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp</a>

---

##### `putSrtCaller` <a name="putSrtCaller" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.putSrtCaller"></a>

```java
public void putSrtCaller(MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.putSrtCaller.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller</a>

---

##### `putSrtListener` <a name="putSrtListener" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.putSrtListener"></a>

```java
public void putSrtListener(MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.putSrtListener.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener</a>

---

##### `resetRist` <a name="resetRist" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.resetRist"></a>

```java
public void resetRist()
```

##### `resetRtp` <a name="resetRtp" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.resetRtp"></a>

```java
public void resetRtp()
```

##### `resetSrtCaller` <a name="resetSrtCaller" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.resetSrtCaller"></a>

```java
public void resetSrtCaller()
```

##### `resetSrtListener` <a name="resetSrtListener" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.resetSrtListener"></a>

```java
public void resetSrtListener()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.rist">rist</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.rtp">rtp</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.srtCaller">srtCaller</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.srtListener">srtListener</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.ristInput">ristInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.rtpInput">rtpInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.srtCallerInput">srtCallerInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.srtListenerInput">srtListenerInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration">MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rist`<sup>Required</sup> <a name="rist" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.rist"></a>

```java
public MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference getRist();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference</a>

---

##### `rtp`<sup>Required</sup> <a name="rtp" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.rtp"></a>

```java
public MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference getRtp();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference</a>

---

##### `srtCaller`<sup>Required</sup> <a name="srtCaller" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.srtCaller"></a>

```java
public MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference getSrtCaller();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference</a>

---

##### `srtListener`<sup>Required</sup> <a name="srtListener" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.srtListener"></a>

```java
public MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference getSrtListener();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference</a>

---

##### `ristInput`<sup>Optional</sup> <a name="ristInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.ristInput"></a>

```java
public IResolvable|MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist getRistInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist</a>

---

##### `rtpInput`<sup>Optional</sup> <a name="rtpInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.rtpInput"></a>

```java
public IResolvable|MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp getRtpInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp</a>

---

##### `srtCallerInput`<sup>Optional</sup> <a name="srtCallerInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.srtCallerInput"></a>

```java
public IResolvable|MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller getSrtCallerInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller</a>

---

##### `srtListenerInput`<sup>Optional</sup> <a name="srtListenerInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.srtListenerInput"></a>

```java
public IResolvable|MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener getSrtListenerInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration">MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration</a>

---


### MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference <a name="MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_destination_endpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference;

new MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.resetDestinationAddress">resetDestinationAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.resetDestinationIngestPort">resetDestinationIngestPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestinationAddress` <a name="resetDestinationAddress" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.resetDestinationAddress"></a>

```java
public void resetDestinationAddress()
```

##### `resetDestinationIngestPort` <a name="resetDestinationIngestPort" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.resetDestinationIngestPort"></a>

```java
public void resetDestinationIngestPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.destinationAddressInput">destinationAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.destinationIngestPortInput">destinationIngestPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.destinationAddress">destinationAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.destinationIngestPort">destinationIngestPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationAddressInput`<sup>Optional</sup> <a name="destinationAddressInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.destinationAddressInput"></a>

```java
public java.lang.String getDestinationAddressInput();
```

- *Type:* java.lang.String

---

##### `destinationIngestPortInput`<sup>Optional</sup> <a name="destinationIngestPortInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.destinationIngestPortInput"></a>

```java
public java.lang.Number getDestinationIngestPortInput();
```

- *Type:* java.lang.Number

---

##### `destinationAddress`<sup>Required</sup> <a name="destinationAddress" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.destinationAddress"></a>

```java
public java.lang.String getDestinationAddress();
```

- *Type:* java.lang.String

---

##### `destinationIngestPort`<sup>Required</sup> <a name="destinationIngestPort" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.destinationIngestPort"></a>

```java
public java.lang.Number getDestinationIngestPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.internalValue"></a>

```java
public IResolvable|MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist</a>

---


### MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference <a name="MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_destination_endpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference;

new MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.resetDestinationAddress">resetDestinationAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.resetDestinationIngestPort">resetDestinationIngestPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.resetForwardErrorCorrectionState">resetForwardErrorCorrectionState</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestinationAddress` <a name="resetDestinationAddress" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.resetDestinationAddress"></a>

```java
public void resetDestinationAddress()
```

##### `resetDestinationIngestPort` <a name="resetDestinationIngestPort" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.resetDestinationIngestPort"></a>

```java
public void resetDestinationIngestPort()
```

##### `resetForwardErrorCorrectionState` <a name="resetForwardErrorCorrectionState" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.resetForwardErrorCorrectionState"></a>

```java
public void resetForwardErrorCorrectionState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.destinationAddressInput">destinationAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.destinationIngestPortInput">destinationIngestPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.forwardErrorCorrectionStateInput">forwardErrorCorrectionStateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.destinationAddress">destinationAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.destinationIngestPort">destinationIngestPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.forwardErrorCorrectionState">forwardErrorCorrectionState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationAddressInput`<sup>Optional</sup> <a name="destinationAddressInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.destinationAddressInput"></a>

```java
public java.lang.String getDestinationAddressInput();
```

- *Type:* java.lang.String

---

##### `destinationIngestPortInput`<sup>Optional</sup> <a name="destinationIngestPortInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.destinationIngestPortInput"></a>

```java
public java.lang.Number getDestinationIngestPortInput();
```

- *Type:* java.lang.Number

---

##### `forwardErrorCorrectionStateInput`<sup>Optional</sup> <a name="forwardErrorCorrectionStateInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.forwardErrorCorrectionStateInput"></a>

```java
public java.lang.String getForwardErrorCorrectionStateInput();
```

- *Type:* java.lang.String

---

##### `destinationAddress`<sup>Required</sup> <a name="destinationAddress" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.destinationAddress"></a>

```java
public java.lang.String getDestinationAddress();
```

- *Type:* java.lang.String

---

##### `destinationIngestPort`<sup>Required</sup> <a name="destinationIngestPort" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.destinationIngestPort"></a>

```java
public java.lang.Number getDestinationIngestPort();
```

- *Type:* java.lang.Number

---

##### `forwardErrorCorrectionState`<sup>Required</sup> <a name="forwardErrorCorrectionState" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.forwardErrorCorrectionState"></a>

```java
public java.lang.String getForwardErrorCorrectionState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.internalValue"></a>

```java
public IResolvable|MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp</a>

---


### MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference <a name="MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_destination_endpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference;

new MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.resetSecretArn">resetSecretArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecretArn` <a name="resetSecretArn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.resetSecretArn"></a>

```java
public void resetSecretArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.property.secretArnInput">secretArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.property.secretArn">secretArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretArnInput`<sup>Optional</sup> <a name="secretArnInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.property.secretArnInput"></a>

```java
public java.lang.String getSecretArnInput();
```

- *Type:* java.lang.String

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.property.secretArn"></a>

```java
public java.lang.String getSecretArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.property.internalValue"></a>

```java
public IResolvable|MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase</a>

---


### MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference <a name="MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_destination_endpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference;

new MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.putEncryptionPassphrase">putEncryptionPassphrase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resetEncryptionPassphrase">resetEncryptionPassphrase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resetMinimumLatencyMilliseconds">resetMinimumLatencyMilliseconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resetSourceListenerPort">resetSourceListenerPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEncryptionPassphrase` <a name="putEncryptionPassphrase" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.putEncryptionPassphrase"></a>

```java
public void putEncryptionPassphrase(MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.putEncryptionPassphrase.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase</a>

---

##### `resetEncryptionPassphrase` <a name="resetEncryptionPassphrase" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resetEncryptionPassphrase"></a>

```java
public void resetEncryptionPassphrase()
```

##### `resetMinimumLatencyMilliseconds` <a name="resetMinimumLatencyMilliseconds" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resetMinimumLatencyMilliseconds"></a>

```java
public void resetMinimumLatencyMilliseconds()
```

##### `resetSourceListenerPort` <a name="resetSourceListenerPort" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resetSourceListenerPort"></a>

```java
public void resetSourceListenerPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.encryptionPassphrase">encryptionPassphrase</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.encryptionPassphraseInput">encryptionPassphraseInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.minimumLatencyMillisecondsInput">minimumLatencyMillisecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.sourceListenerPortInput">sourceListenerPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.minimumLatencyMilliseconds">minimumLatencyMilliseconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.sourceListenerPort">sourceListenerPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encryptionPassphrase`<sup>Required</sup> <a name="encryptionPassphrase" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.encryptionPassphrase"></a>

```java
public MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference getEncryptionPassphrase();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference</a>

---

##### `encryptionPassphraseInput`<sup>Optional</sup> <a name="encryptionPassphraseInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.encryptionPassphraseInput"></a>

```java
public IResolvable|MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase getEncryptionPassphraseInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase</a>

---

##### `minimumLatencyMillisecondsInput`<sup>Optional</sup> <a name="minimumLatencyMillisecondsInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.minimumLatencyMillisecondsInput"></a>

```java
public java.lang.Number getMinimumLatencyMillisecondsInput();
```

- *Type:* java.lang.Number

---

##### `sourceListenerPortInput`<sup>Optional</sup> <a name="sourceListenerPortInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.sourceListenerPortInput"></a>

```java
public java.lang.Number getSourceListenerPortInput();
```

- *Type:* java.lang.Number

---

##### `minimumLatencyMilliseconds`<sup>Required</sup> <a name="minimumLatencyMilliseconds" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.minimumLatencyMilliseconds"></a>

```java
public java.lang.Number getMinimumLatencyMilliseconds();
```

- *Type:* java.lang.Number

---

##### `sourceListenerPort`<sup>Required</sup> <a name="sourceListenerPort" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.sourceListenerPort"></a>

```java
public java.lang.Number getSourceListenerPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.internalValue"></a>

```java
public IResolvable|MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller</a>

---


### MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference <a name="MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_destination_endpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference;

new MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.resetSecretArn">resetSecretArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecretArn` <a name="resetSecretArn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.resetSecretArn"></a>

```java
public void resetSecretArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.property.secretArnInput">secretArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.property.secretArn">secretArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretArnInput`<sup>Optional</sup> <a name="secretArnInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.property.secretArnInput"></a>

```java
public java.lang.String getSecretArnInput();
```

- *Type:* java.lang.String

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.property.secretArn"></a>

```java
public java.lang.String getSecretArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.property.internalValue"></a>

```java
public IResolvable|MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase</a>

---


### MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference <a name="MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_destination_endpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference;

new MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.putEncryptionPassphrase">putEncryptionPassphrase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resetDestinationAddress">resetDestinationAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resetDestinationIngestPort">resetDestinationIngestPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resetEncryptionPassphrase">resetEncryptionPassphrase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resetMinimumLatencyMilliseconds">resetMinimumLatencyMilliseconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resetStreamId">resetStreamId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEncryptionPassphrase` <a name="putEncryptionPassphrase" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.putEncryptionPassphrase"></a>

```java
public void putEncryptionPassphrase(MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.putEncryptionPassphrase.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase</a>

---

##### `resetDestinationAddress` <a name="resetDestinationAddress" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resetDestinationAddress"></a>

```java
public void resetDestinationAddress()
```

##### `resetDestinationIngestPort` <a name="resetDestinationIngestPort" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resetDestinationIngestPort"></a>

```java
public void resetDestinationIngestPort()
```

##### `resetEncryptionPassphrase` <a name="resetEncryptionPassphrase" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resetEncryptionPassphrase"></a>

```java
public void resetEncryptionPassphrase()
```

##### `resetMinimumLatencyMilliseconds` <a name="resetMinimumLatencyMilliseconds" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resetMinimumLatencyMilliseconds"></a>

```java
public void resetMinimumLatencyMilliseconds()
```

##### `resetStreamId` <a name="resetStreamId" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resetStreamId"></a>

```java
public void resetStreamId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.encryptionPassphrase">encryptionPassphrase</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.destinationAddressInput">destinationAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.destinationIngestPortInput">destinationIngestPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.encryptionPassphraseInput">encryptionPassphraseInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.minimumLatencyMillisecondsInput">minimumLatencyMillisecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.streamIdInput">streamIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.destinationAddress">destinationAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.destinationIngestPort">destinationIngestPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.minimumLatencyMilliseconds">minimumLatencyMilliseconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.streamId">streamId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encryptionPassphrase`<sup>Required</sup> <a name="encryptionPassphrase" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.encryptionPassphrase"></a>

```java
public MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference getEncryptionPassphrase();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference</a>

---

##### `destinationAddressInput`<sup>Optional</sup> <a name="destinationAddressInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.destinationAddressInput"></a>

```java
public java.lang.String getDestinationAddressInput();
```

- *Type:* java.lang.String

---

##### `destinationIngestPortInput`<sup>Optional</sup> <a name="destinationIngestPortInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.destinationIngestPortInput"></a>

```java
public java.lang.Number getDestinationIngestPortInput();
```

- *Type:* java.lang.Number

---

##### `encryptionPassphraseInput`<sup>Optional</sup> <a name="encryptionPassphraseInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.encryptionPassphraseInput"></a>

```java
public IResolvable|MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase getEncryptionPassphraseInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase</a>

---

##### `minimumLatencyMillisecondsInput`<sup>Optional</sup> <a name="minimumLatencyMillisecondsInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.minimumLatencyMillisecondsInput"></a>

```java
public java.lang.Number getMinimumLatencyMillisecondsInput();
```

- *Type:* java.lang.Number

---

##### `streamIdInput`<sup>Optional</sup> <a name="streamIdInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.streamIdInput"></a>

```java
public java.lang.String getStreamIdInput();
```

- *Type:* java.lang.String

---

##### `destinationAddress`<sup>Required</sup> <a name="destinationAddress" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.destinationAddress"></a>

```java
public java.lang.String getDestinationAddress();
```

- *Type:* java.lang.String

---

##### `destinationIngestPort`<sup>Required</sup> <a name="destinationIngestPort" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.destinationIngestPort"></a>

```java
public java.lang.Number getDestinationIngestPort();
```

- *Type:* java.lang.Number

---

##### `minimumLatencyMilliseconds`<sup>Required</sup> <a name="minimumLatencyMilliseconds" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.minimumLatencyMilliseconds"></a>

```java
public java.lang.Number getMinimumLatencyMilliseconds();
```

- *Type:* java.lang.Number

---

##### `streamId`<sup>Required</sup> <a name="streamId" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.streamId"></a>

```java
public java.lang.String getStreamId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.internalValue"></a>

```java
public IResolvable|MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener</a>

---


### MediaconnectDestinationEndpointTagsList <a name="MediaconnectDestinationEndpointTagsList" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_destination_endpoint.MediaconnectDestinationEndpointTagsList;

new MediaconnectDestinationEndpointTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.get"></a>

```java
public MediaconnectDestinationEndpointTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTags">MediaconnectDestinationEndpointTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MediaconnectDestinationEndpointTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTags">MediaconnectDestinationEndpointTags</a>>

---


### MediaconnectDestinationEndpointTagsOutputReference <a name="MediaconnectDestinationEndpointTagsOutputReference" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_destination_endpoint.MediaconnectDestinationEndpointTagsOutputReference;

new MediaconnectDestinationEndpointTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTags">MediaconnectDestinationEndpointTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|MediaconnectDestinationEndpointTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTags">MediaconnectDestinationEndpointTags</a>

---



