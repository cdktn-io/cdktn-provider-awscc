# `medialiveMultiplex` Submodule <a name="`medialiveMultiplex` Submodule" id="@cdktn/provider-awscc.medialiveMultiplex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MedialiveMultiplex <a name="MedialiveMultiplex" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplex awscc_medialive_multiplex}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_multiplex.MedialiveMultiplex;

MedialiveMultiplex.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .availabilityZones(java.util.List<java.lang.String>)
    .multiplexSettings(MedialiveMultiplexMultiplexSettings)
    .name(java.lang.String)
//  .destinations(IResolvable|java.util.List<MedialiveMultiplexDestinations>)
//  .tags(IResolvable|java.util.List<MedialiveMultiplexTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.Initializer.parameter.availabilityZones">availabilityZones</a></code> | <code>java.util.List<java.lang.String></code> | A list of availability zones for the multiplex. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.Initializer.parameter.multiplexSettings">multiplexSettings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettings">MedialiveMultiplexMultiplexSettings</a></code> | Configuration for a multiplex event. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of multiplex. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.Initializer.parameter.destinations">destinations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinations">MedialiveMultiplexDestinations</a>></code> | A list of the multiplex output destinations. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTags">MedialiveMultiplexTags</a>></code> | A collection of key-value pairs. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.Initializer.parameter.availabilityZones"></a>

- *Type:* java.util.List<java.lang.String>

A list of availability zones for the multiplex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplex#availability_zones MedialiveMultiplex#availability_zones}

---

##### `multiplexSettings`<sup>Required</sup> <a name="multiplexSettings" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.Initializer.parameter.multiplexSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettings">MedialiveMultiplexMultiplexSettings</a>

Configuration for a multiplex event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplex#multiplex_settings MedialiveMultiplex#multiplex_settings}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of multiplex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplex#name MedialiveMultiplex#name}

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.Initializer.parameter.destinations"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinations">MedialiveMultiplexDestinations</a>>

A list of the multiplex output destinations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplex#destinations MedialiveMultiplex#destinations}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTags">MedialiveMultiplexTags</a>>

A collection of key-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplex#tags MedialiveMultiplex#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.putDestinations">putDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.putMultiplexSettings">putMultiplexSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.resetDestinations">resetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDestinations` <a name="putDestinations" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.putDestinations"></a>

```java
public void putDestinations(IResolvable|java.util.List<MedialiveMultiplexDestinations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.putDestinations.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinations">MedialiveMultiplexDestinations</a>>

---

##### `putMultiplexSettings` <a name="putMultiplexSettings" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.putMultiplexSettings"></a>

```java
public void putMultiplexSettings(MedialiveMultiplexMultiplexSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.putMultiplexSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettings">MedialiveMultiplexMultiplexSettings</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<MedialiveMultiplexTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTags">MedialiveMultiplexTags</a>>

---

##### `resetDestinations` <a name="resetDestinations" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.resetDestinations"></a>

```java
public void resetDestinations()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MedialiveMultiplex resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.isConstruct"></a>

```java
import io.cdktn.providers.awscc.medialive_multiplex.MedialiveMultiplex;

MedialiveMultiplex.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.medialive_multiplex.MedialiveMultiplex;

MedialiveMultiplex.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.medialive_multiplex.MedialiveMultiplex;

MedialiveMultiplex.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.medialive_multiplex.MedialiveMultiplex;

MedialiveMultiplex.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MedialiveMultiplex.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a MedialiveMultiplex resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MedialiveMultiplex to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MedialiveMultiplex that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplex#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the MedialiveMultiplex to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.destinations">destinations</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList">MedialiveMultiplexDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.multiplexId">multiplexId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.multiplexSettings">multiplexSettings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference">MedialiveMultiplexMultiplexSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.pipelinesRunningCount">pipelinesRunningCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.programCount">programCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList">MedialiveMultiplexTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.availabilityZonesInput">availabilityZonesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.destinationsInput">destinationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinations">MedialiveMultiplexDestinations</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.multiplexSettingsInput">multiplexSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettings">MedialiveMultiplexMultiplexSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTags">MedialiveMultiplexTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.availabilityZones">availabilityZones</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.destinations"></a>

```java
public MedialiveMultiplexDestinationsList getDestinations();
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList">MedialiveMultiplexDestinationsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `multiplexId`<sup>Required</sup> <a name="multiplexId" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.multiplexId"></a>

```java
public java.lang.String getMultiplexId();
```

- *Type:* java.lang.String

---

##### `multiplexSettings`<sup>Required</sup> <a name="multiplexSettings" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.multiplexSettings"></a>

```java
public MedialiveMultiplexMultiplexSettingsOutputReference getMultiplexSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference">MedialiveMultiplexMultiplexSettingsOutputReference</a>

---

##### `pipelinesRunningCount`<sup>Required</sup> <a name="pipelinesRunningCount" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.pipelinesRunningCount"></a>

```java
public java.lang.Number getPipelinesRunningCount();
```

- *Type:* java.lang.Number

---

##### `programCount`<sup>Required</sup> <a name="programCount" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.programCount"></a>

```java
public java.lang.Number getProgramCount();
```

- *Type:* java.lang.Number

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.tags"></a>

```java
public MedialiveMultiplexTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList">MedialiveMultiplexTagsList</a>

---

##### `availabilityZonesInput`<sup>Optional</sup> <a name="availabilityZonesInput" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.availabilityZonesInput"></a>

```java
public java.util.List<java.lang.String> getAvailabilityZonesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destinationsInput`<sup>Optional</sup> <a name="destinationsInput" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.destinationsInput"></a>

```java
public IResolvable|java.util.List<MedialiveMultiplexDestinations> getDestinationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinations">MedialiveMultiplexDestinations</a>>

---

##### `multiplexSettingsInput`<sup>Optional</sup> <a name="multiplexSettingsInput" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.multiplexSettingsInput"></a>

```java
public IResolvable|MedialiveMultiplexMultiplexSettings getMultiplexSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettings">MedialiveMultiplexMultiplexSettings</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.tagsInput"></a>

```java
public IResolvable|java.util.List<MedialiveMultiplexTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTags">MedialiveMultiplexTags</a>>

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.availabilityZones"></a>

```java
public java.util.List<java.lang.String> getAvailabilityZones();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MedialiveMultiplexConfig <a name="MedialiveMultiplexConfig" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_multiplex.MedialiveMultiplexConfig;

MedialiveMultiplexConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .availabilityZones(java.util.List<java.lang.String>)
    .multiplexSettings(MedialiveMultiplexMultiplexSettings)
    .name(java.lang.String)
//  .destinations(IResolvable|java.util.List<MedialiveMultiplexDestinations>)
//  .tags(IResolvable|java.util.List<MedialiveMultiplexTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig.property.availabilityZones">availabilityZones</a></code> | <code>java.util.List<java.lang.String></code> | A list of availability zones for the multiplex. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig.property.multiplexSettings">multiplexSettings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettings">MedialiveMultiplexMultiplexSettings</a></code> | Configuration for a multiplex event. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of multiplex. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig.property.destinations">destinations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinations">MedialiveMultiplexDestinations</a>></code> | A list of the multiplex output destinations. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTags">MedialiveMultiplexTags</a>></code> | A collection of key-value pairs. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig.property.availabilityZones"></a>

```java
public java.util.List<java.lang.String> getAvailabilityZones();
```

- *Type:* java.util.List<java.lang.String>

A list of availability zones for the multiplex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplex#availability_zones MedialiveMultiplex#availability_zones}

---

##### `multiplexSettings`<sup>Required</sup> <a name="multiplexSettings" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig.property.multiplexSettings"></a>

```java
public MedialiveMultiplexMultiplexSettings getMultiplexSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettings">MedialiveMultiplexMultiplexSettings</a>

Configuration for a multiplex event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplex#multiplex_settings MedialiveMultiplex#multiplex_settings}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of multiplex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplex#name MedialiveMultiplex#name}

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig.property.destinations"></a>

```java
public IResolvable|java.util.List<MedialiveMultiplexDestinations> getDestinations();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinations">MedialiveMultiplexDestinations</a>>

A list of the multiplex output destinations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplex#destinations MedialiveMultiplex#destinations}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig.property.tags"></a>

```java
public IResolvable|java.util.List<MedialiveMultiplexTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTags">MedialiveMultiplexTags</a>>

A collection of key-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplex#tags MedialiveMultiplex#tags}

---

### MedialiveMultiplexDestinations <a name="MedialiveMultiplexDestinations" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinations.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_multiplex.MedialiveMultiplexDestinations;

MedialiveMultiplexDestinations.builder()
//  .multiplexMediaConnectOutputDestinationSettings(MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinations.property.multiplexMediaConnectOutputDestinationSettings">multiplexMediaConnectOutputDestinationSettings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings">MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings</a></code> | Multiplex MediaConnect output destination settings. |

---

##### `multiplexMediaConnectOutputDestinationSettings`<sup>Optional</sup> <a name="multiplexMediaConnectOutputDestinationSettings" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinations.property.multiplexMediaConnectOutputDestinationSettings"></a>

```java
public MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings getMultiplexMediaConnectOutputDestinationSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings">MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings</a>

Multiplex MediaConnect output destination settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplex#multiplex_media_connect_output_destination_settings MedialiveMultiplex#multiplex_media_connect_output_destination_settings}

---

### MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings <a name="MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_multiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings;

MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings.builder()
//  .entitlementArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings.property.entitlementArn">entitlementArn</a></code> | <code>java.lang.String</code> | The MediaConnect entitlement ARN available as a Flow source. |

---

##### `entitlementArn`<sup>Optional</sup> <a name="entitlementArn" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings.property.entitlementArn"></a>

```java
public java.lang.String getEntitlementArn();
```

- *Type:* java.lang.String

The MediaConnect entitlement ARN available as a Flow source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplex#entitlement_arn MedialiveMultiplex#entitlement_arn}

---

### MedialiveMultiplexMultiplexSettings <a name="MedialiveMultiplexMultiplexSettings" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_multiplex.MedialiveMultiplexMultiplexSettings;

MedialiveMultiplexMultiplexSettings.builder()
    .transportStreamBitrate(java.lang.Number)
    .transportStreamId(java.lang.Number)
//  .maximumVideoBufferDelayMilliseconds(java.lang.Number)
//  .transportStreamReservedBitrate(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettings.property.transportStreamBitrate">transportStreamBitrate</a></code> | <code>java.lang.Number</code> | Transport stream bit rate. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettings.property.transportStreamId">transportStreamId</a></code> | <code>java.lang.Number</code> | Transport stream ID. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettings.property.maximumVideoBufferDelayMilliseconds">maximumVideoBufferDelayMilliseconds</a></code> | <code>java.lang.Number</code> | Maximum video buffer delay in milliseconds. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettings.property.transportStreamReservedBitrate">transportStreamReservedBitrate</a></code> | <code>java.lang.Number</code> | Transport stream reserved bit rate. |

---

##### `transportStreamBitrate`<sup>Required</sup> <a name="transportStreamBitrate" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettings.property.transportStreamBitrate"></a>

```java
public java.lang.Number getTransportStreamBitrate();
```

- *Type:* java.lang.Number

Transport stream bit rate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplex#transport_stream_bitrate MedialiveMultiplex#transport_stream_bitrate}

---

##### `transportStreamId`<sup>Required</sup> <a name="transportStreamId" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettings.property.transportStreamId"></a>

```java
public java.lang.Number getTransportStreamId();
```

- *Type:* java.lang.Number

Transport stream ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplex#transport_stream_id MedialiveMultiplex#transport_stream_id}

---

##### `maximumVideoBufferDelayMilliseconds`<sup>Optional</sup> <a name="maximumVideoBufferDelayMilliseconds" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettings.property.maximumVideoBufferDelayMilliseconds"></a>

```java
public java.lang.Number getMaximumVideoBufferDelayMilliseconds();
```

- *Type:* java.lang.Number

Maximum video buffer delay in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplex#maximum_video_buffer_delay_milliseconds MedialiveMultiplex#maximum_video_buffer_delay_milliseconds}

---

##### `transportStreamReservedBitrate`<sup>Optional</sup> <a name="transportStreamReservedBitrate" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettings.property.transportStreamReservedBitrate"></a>

```java
public java.lang.Number getTransportStreamReservedBitrate();
```

- *Type:* java.lang.Number

Transport stream reserved bit rate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplex#transport_stream_reserved_bitrate MedialiveMultiplex#transport_stream_reserved_bitrate}

---

### MedialiveMultiplexTags <a name="MedialiveMultiplexTags" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_multiplex.MedialiveMultiplexTags;

MedialiveMultiplexTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplex#key MedialiveMultiplex#key}. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplex#value MedialiveMultiplex#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplex#key MedialiveMultiplex#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplex#value MedialiveMultiplex#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### MedialiveMultiplexDestinationsList <a name="MedialiveMultiplexDestinationsList" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_multiplex.MedialiveMultiplexDestinationsList;

new MedialiveMultiplexDestinationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.get"></a>

```java
public MedialiveMultiplexDestinationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinations">MedialiveMultiplexDestinations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MedialiveMultiplexDestinations> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinations">MedialiveMultiplexDestinations</a>>

---


### MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference <a name="MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_multiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference;

new MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.resetEntitlementArn">resetEntitlementArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEntitlementArn` <a name="resetEntitlementArn" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.resetEntitlementArn"></a>

```java
public void resetEntitlementArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.property.entitlementArnInput">entitlementArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.property.entitlementArn">entitlementArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings">MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `entitlementArnInput`<sup>Optional</sup> <a name="entitlementArnInput" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.property.entitlementArnInput"></a>

```java
public java.lang.String getEntitlementArnInput();
```

- *Type:* java.lang.String

---

##### `entitlementArn`<sup>Required</sup> <a name="entitlementArn" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.property.entitlementArn"></a>

```java
public java.lang.String getEntitlementArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings">MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings</a>

---


### MedialiveMultiplexDestinationsOutputReference <a name="MedialiveMultiplexDestinationsOutputReference" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_multiplex.MedialiveMultiplexDestinationsOutputReference;

new MedialiveMultiplexDestinationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.putMultiplexMediaConnectOutputDestinationSettings">putMultiplexMediaConnectOutputDestinationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.resetMultiplexMediaConnectOutputDestinationSettings">resetMultiplexMediaConnectOutputDestinationSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMultiplexMediaConnectOutputDestinationSettings` <a name="putMultiplexMediaConnectOutputDestinationSettings" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.putMultiplexMediaConnectOutputDestinationSettings"></a>

```java
public void putMultiplexMediaConnectOutputDestinationSettings(MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.putMultiplexMediaConnectOutputDestinationSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings">MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings</a>

---

##### `resetMultiplexMediaConnectOutputDestinationSettings` <a name="resetMultiplexMediaConnectOutputDestinationSettings" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.resetMultiplexMediaConnectOutputDestinationSettings"></a>

```java
public void resetMultiplexMediaConnectOutputDestinationSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.property.multiplexMediaConnectOutputDestinationSettings">multiplexMediaConnectOutputDestinationSettings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference">MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.property.multiplexMediaConnectOutputDestinationSettingsInput">multiplexMediaConnectOutputDestinationSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings">MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinations">MedialiveMultiplexDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `multiplexMediaConnectOutputDestinationSettings`<sup>Required</sup> <a name="multiplexMediaConnectOutputDestinationSettings" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.property.multiplexMediaConnectOutputDestinationSettings"></a>

```java
public MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference getMultiplexMediaConnectOutputDestinationSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference">MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference</a>

---

##### `multiplexMediaConnectOutputDestinationSettingsInput`<sup>Optional</sup> <a name="multiplexMediaConnectOutputDestinationSettingsInput" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.property.multiplexMediaConnectOutputDestinationSettingsInput"></a>

```java
public IResolvable|MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings getMultiplexMediaConnectOutputDestinationSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings">MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.property.internalValue"></a>

```java
public IResolvable|MedialiveMultiplexDestinations getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinations">MedialiveMultiplexDestinations</a>

---


### MedialiveMultiplexMultiplexSettingsOutputReference <a name="MedialiveMultiplexMultiplexSettingsOutputReference" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_multiplex.MedialiveMultiplexMultiplexSettingsOutputReference;

new MedialiveMultiplexMultiplexSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.resetMaximumVideoBufferDelayMilliseconds">resetMaximumVideoBufferDelayMilliseconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.resetTransportStreamReservedBitrate">resetTransportStreamReservedBitrate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaximumVideoBufferDelayMilliseconds` <a name="resetMaximumVideoBufferDelayMilliseconds" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.resetMaximumVideoBufferDelayMilliseconds"></a>

```java
public void resetMaximumVideoBufferDelayMilliseconds()
```

##### `resetTransportStreamReservedBitrate` <a name="resetTransportStreamReservedBitrate" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.resetTransportStreamReservedBitrate"></a>

```java
public void resetTransportStreamReservedBitrate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.maximumVideoBufferDelayMillisecondsInput">maximumVideoBufferDelayMillisecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.transportStreamBitrateInput">transportStreamBitrateInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.transportStreamIdInput">transportStreamIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.transportStreamReservedBitrateInput">transportStreamReservedBitrateInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.maximumVideoBufferDelayMilliseconds">maximumVideoBufferDelayMilliseconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.transportStreamBitrate">transportStreamBitrate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.transportStreamId">transportStreamId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.transportStreamReservedBitrate">transportStreamReservedBitrate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettings">MedialiveMultiplexMultiplexSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maximumVideoBufferDelayMillisecondsInput`<sup>Optional</sup> <a name="maximumVideoBufferDelayMillisecondsInput" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.maximumVideoBufferDelayMillisecondsInput"></a>

```java
public java.lang.Number getMaximumVideoBufferDelayMillisecondsInput();
```

- *Type:* java.lang.Number

---

##### `transportStreamBitrateInput`<sup>Optional</sup> <a name="transportStreamBitrateInput" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.transportStreamBitrateInput"></a>

```java
public java.lang.Number getTransportStreamBitrateInput();
```

- *Type:* java.lang.Number

---

##### `transportStreamIdInput`<sup>Optional</sup> <a name="transportStreamIdInput" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.transportStreamIdInput"></a>

```java
public java.lang.Number getTransportStreamIdInput();
```

- *Type:* java.lang.Number

---

##### `transportStreamReservedBitrateInput`<sup>Optional</sup> <a name="transportStreamReservedBitrateInput" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.transportStreamReservedBitrateInput"></a>

```java
public java.lang.Number getTransportStreamReservedBitrateInput();
```

- *Type:* java.lang.Number

---

##### `maximumVideoBufferDelayMilliseconds`<sup>Required</sup> <a name="maximumVideoBufferDelayMilliseconds" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.maximumVideoBufferDelayMilliseconds"></a>

```java
public java.lang.Number getMaximumVideoBufferDelayMilliseconds();
```

- *Type:* java.lang.Number

---

##### `transportStreamBitrate`<sup>Required</sup> <a name="transportStreamBitrate" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.transportStreamBitrate"></a>

```java
public java.lang.Number getTransportStreamBitrate();
```

- *Type:* java.lang.Number

---

##### `transportStreamId`<sup>Required</sup> <a name="transportStreamId" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.transportStreamId"></a>

```java
public java.lang.Number getTransportStreamId();
```

- *Type:* java.lang.Number

---

##### `transportStreamReservedBitrate`<sup>Required</sup> <a name="transportStreamReservedBitrate" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.transportStreamReservedBitrate"></a>

```java
public java.lang.Number getTransportStreamReservedBitrate();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|MedialiveMultiplexMultiplexSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettings">MedialiveMultiplexMultiplexSettings</a>

---


### MedialiveMultiplexTagsList <a name="MedialiveMultiplexTagsList" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_multiplex.MedialiveMultiplexTagsList;

new MedialiveMultiplexTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.get"></a>

```java
public MedialiveMultiplexTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTags">MedialiveMultiplexTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MedialiveMultiplexTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTags">MedialiveMultiplexTags</a>>

---


### MedialiveMultiplexTagsOutputReference <a name="MedialiveMultiplexTagsOutputReference" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_multiplex.MedialiveMultiplexTagsOutputReference;

new MedialiveMultiplexTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTags">MedialiveMultiplexTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|MedialiveMultiplexTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTags">MedialiveMultiplexTags</a>

---



