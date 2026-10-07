# `ivsAdConfiguration` Submodule <a name="`ivsAdConfiguration` Submodule" id="@cdktn/provider-awscc.ivsAdConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IvsAdConfiguration <a name="IvsAdConfiguration" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/ivs_ad_configuration awscc_ivs_ad_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.ivs_ad_configuration.IvsAdConfiguration;

IvsAdConfiguration.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .mediaTailorPlaybackConfigurations(IResolvable|java.util.List<IvsAdConfigurationMediaTailorPlaybackConfigurations>)
//  .name(java.lang.String)
//  .postRollConfiguration(IvsAdConfigurationPostRollConfiguration)
//  .tags(IResolvable|java.util.List<IvsAdConfigurationTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.Initializer.parameter.mediaTailorPlaybackConfigurations">mediaTailorPlaybackConfigurations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurations">IvsAdConfigurationMediaTailorPlaybackConfigurations</a>></code> | List of integration configurations with MediaTailor resources. |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Ad configuration name. The value does not need to be unique. |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.Initializer.parameter.postRollConfiguration">postRollConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfiguration">IvsAdConfigurationPostRollConfiguration</a></code> | Configuration for the post-roll ad break to use for this ad configuration. |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTags">IvsAdConfigurationTags</a>></code> | Tags attached to the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `mediaTailorPlaybackConfigurations`<sup>Required</sup> <a name="mediaTailorPlaybackConfigurations" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.Initializer.parameter.mediaTailorPlaybackConfigurations"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurations">IvsAdConfigurationMediaTailorPlaybackConfigurations</a>>

List of integration configurations with MediaTailor resources.

The first item in the list is the default playback configuration used for the ad configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/ivs_ad_configuration#media_tailor_playback_configurations IvsAdConfiguration#media_tailor_playback_configurations}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Ad configuration name. The value does not need to be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/ivs_ad_configuration#name IvsAdConfiguration#name}

---

##### `postRollConfiguration`<sup>Optional</sup> <a name="postRollConfiguration" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.Initializer.parameter.postRollConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfiguration">IvsAdConfigurationPostRollConfiguration</a>

Configuration for the post-roll ad break to use for this ad configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/ivs_ad_configuration#post_roll_configuration IvsAdConfiguration#post_roll_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTags">IvsAdConfigurationTags</a>>

Tags attached to the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/ivs_ad_configuration#tags IvsAdConfiguration#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.putMediaTailorPlaybackConfigurations">putMediaTailorPlaybackConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.putPostRollConfiguration">putPostRollConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.resetPostRollConfiguration">resetPostRollConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMediaTailorPlaybackConfigurations` <a name="putMediaTailorPlaybackConfigurations" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.putMediaTailorPlaybackConfigurations"></a>

```java
public void putMediaTailorPlaybackConfigurations(IResolvable|java.util.List<IvsAdConfigurationMediaTailorPlaybackConfigurations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.putMediaTailorPlaybackConfigurations.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurations">IvsAdConfigurationMediaTailorPlaybackConfigurations</a>>

---

##### `putPostRollConfiguration` <a name="putPostRollConfiguration" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.putPostRollConfiguration"></a>

```java
public void putPostRollConfiguration(IvsAdConfigurationPostRollConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.putPostRollConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfiguration">IvsAdConfigurationPostRollConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<IvsAdConfigurationTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTags">IvsAdConfigurationTags</a>>

---

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.resetName"></a>

```java
public void resetName()
```

##### `resetPostRollConfiguration` <a name="resetPostRollConfiguration" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.resetPostRollConfiguration"></a>

```java
public void resetPostRollConfiguration()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IvsAdConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.isConstruct"></a>

```java
import io.cdktn.providers.awscc.ivs_ad_configuration.IvsAdConfiguration;

IvsAdConfiguration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.ivs_ad_configuration.IvsAdConfiguration;

IvsAdConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.ivs_ad_configuration.IvsAdConfiguration;

IvsAdConfiguration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.ivs_ad_configuration.IvsAdConfiguration;

IvsAdConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IvsAdConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a IvsAdConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IvsAdConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IvsAdConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/ivs_ad_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the IvsAdConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.property.mediaTailorPlaybackConfigurations">mediaTailorPlaybackConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsList">IvsAdConfigurationMediaTailorPlaybackConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.property.postRollConfiguration">postRollConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfigurationOutputReference">IvsAdConfigurationPostRollConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsList">IvsAdConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.property.mediaTailorPlaybackConfigurationsInput">mediaTailorPlaybackConfigurationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurations">IvsAdConfigurationMediaTailorPlaybackConfigurations</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.property.postRollConfigurationInput">postRollConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfiguration">IvsAdConfigurationPostRollConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTags">IvsAdConfigurationTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `mediaTailorPlaybackConfigurations`<sup>Required</sup> <a name="mediaTailorPlaybackConfigurations" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.property.mediaTailorPlaybackConfigurations"></a>

```java
public IvsAdConfigurationMediaTailorPlaybackConfigurationsList getMediaTailorPlaybackConfigurations();
```

- *Type:* <a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsList">IvsAdConfigurationMediaTailorPlaybackConfigurationsList</a>

---

##### `postRollConfiguration`<sup>Required</sup> <a name="postRollConfiguration" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.property.postRollConfiguration"></a>

```java
public IvsAdConfigurationPostRollConfigurationOutputReference getPostRollConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfigurationOutputReference">IvsAdConfigurationPostRollConfigurationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.property.tags"></a>

```java
public IvsAdConfigurationTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsList">IvsAdConfigurationTagsList</a>

---

##### `mediaTailorPlaybackConfigurationsInput`<sup>Optional</sup> <a name="mediaTailorPlaybackConfigurationsInput" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.property.mediaTailorPlaybackConfigurationsInput"></a>

```java
public IResolvable|java.util.List<IvsAdConfigurationMediaTailorPlaybackConfigurations> getMediaTailorPlaybackConfigurationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurations">IvsAdConfigurationMediaTailorPlaybackConfigurations</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `postRollConfigurationInput`<sup>Optional</sup> <a name="postRollConfigurationInput" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.property.postRollConfigurationInput"></a>

```java
public IResolvable|IvsAdConfigurationPostRollConfiguration getPostRollConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfiguration">IvsAdConfigurationPostRollConfiguration</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.property.tagsInput"></a>

```java
public IResolvable|java.util.List<IvsAdConfigurationTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTags">IvsAdConfigurationTags</a>>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IvsAdConfigurationConfig <a name="IvsAdConfigurationConfig" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.ivs_ad_configuration.IvsAdConfigurationConfig;

IvsAdConfigurationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .mediaTailorPlaybackConfigurations(IResolvable|java.util.List<IvsAdConfigurationMediaTailorPlaybackConfigurations>)
//  .name(java.lang.String)
//  .postRollConfiguration(IvsAdConfigurationPostRollConfiguration)
//  .tags(IResolvable|java.util.List<IvsAdConfigurationTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationConfig.property.mediaTailorPlaybackConfigurations">mediaTailorPlaybackConfigurations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurations">IvsAdConfigurationMediaTailorPlaybackConfigurations</a>></code> | List of integration configurations with MediaTailor resources. |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationConfig.property.name">name</a></code> | <code>java.lang.String</code> | Ad configuration name. The value does not need to be unique. |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationConfig.property.postRollConfiguration">postRollConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfiguration">IvsAdConfigurationPostRollConfiguration</a></code> | Configuration for the post-roll ad break to use for this ad configuration. |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTags">IvsAdConfigurationTags</a>></code> | Tags attached to the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `mediaTailorPlaybackConfigurations`<sup>Required</sup> <a name="mediaTailorPlaybackConfigurations" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationConfig.property.mediaTailorPlaybackConfigurations"></a>

```java
public IResolvable|java.util.List<IvsAdConfigurationMediaTailorPlaybackConfigurations> getMediaTailorPlaybackConfigurations();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurations">IvsAdConfigurationMediaTailorPlaybackConfigurations</a>>

List of integration configurations with MediaTailor resources.

The first item in the list is the default playback configuration used for the ad configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/ivs_ad_configuration#media_tailor_playback_configurations IvsAdConfiguration#media_tailor_playback_configurations}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Ad configuration name. The value does not need to be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/ivs_ad_configuration#name IvsAdConfiguration#name}

---

##### `postRollConfiguration`<sup>Optional</sup> <a name="postRollConfiguration" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationConfig.property.postRollConfiguration"></a>

```java
public IvsAdConfigurationPostRollConfiguration getPostRollConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfiguration">IvsAdConfigurationPostRollConfiguration</a>

Configuration for the post-roll ad break to use for this ad configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/ivs_ad_configuration#post_roll_configuration IvsAdConfiguration#post_roll_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationConfig.property.tags"></a>

```java
public IResolvable|java.util.List<IvsAdConfigurationTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTags">IvsAdConfigurationTags</a>>

Tags attached to the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/ivs_ad_configuration#tags IvsAdConfiguration#tags}

---

### IvsAdConfigurationMediaTailorPlaybackConfigurations <a name="IvsAdConfigurationMediaTailorPlaybackConfigurations" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurations.Initializer"></a>

```java
import io.cdktn.providers.awscc.ivs_ad_configuration.IvsAdConfigurationMediaTailorPlaybackConfigurations;

IvsAdConfigurationMediaTailorPlaybackConfigurations.builder()
//  .playbackConfigurationArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurations.property.playbackConfigurationArn">playbackConfigurationArn</a></code> | <code>java.lang.String</code> | ARN of the customer-created EMT PlaybackConfiguration resource in the same region and account. |

---

##### `playbackConfigurationArn`<sup>Optional</sup> <a name="playbackConfigurationArn" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurations.property.playbackConfigurationArn"></a>

```java
public java.lang.String getPlaybackConfigurationArn();
```

- *Type:* java.lang.String

ARN of the customer-created EMT PlaybackConfiguration resource in the same region and account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/ivs_ad_configuration#playback_configuration_arn IvsAdConfiguration#playback_configuration_arn}

---

### IvsAdConfigurationPostRollConfiguration <a name="IvsAdConfigurationPostRollConfiguration" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.ivs_ad_configuration.IvsAdConfigurationPostRollConfiguration;

IvsAdConfigurationPostRollConfiguration.builder()
//  .durationSeconds(java.lang.Number)
//  .enabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfiguration.property.durationSeconds">durationSeconds</a></code> | <code>java.lang.Number</code> | Duration of the post-roll ad break, in seconds. |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfiguration.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the post-roll ad configuration is enabled. |

---

##### `durationSeconds`<sup>Optional</sup> <a name="durationSeconds" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfiguration.property.durationSeconds"></a>

```java
public java.lang.Number getDurationSeconds();
```

- *Type:* java.lang.Number

Duration of the post-roll ad break, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/ivs_ad_configuration#duration_seconds IvsAdConfiguration#duration_seconds}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfiguration.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the post-roll ad configuration is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/ivs_ad_configuration#enabled IvsAdConfiguration#enabled}

---

### IvsAdConfigurationTags <a name="IvsAdConfigurationTags" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.ivs_ad_configuration.IvsAdConfigurationTags;

IvsAdConfigurationTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/ivs_ad_configuration#key IvsAdConfiguration#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/ivs_ad_configuration#value IvsAdConfiguration#value}

---

## Classes <a name="Classes" id="Classes"></a>

### IvsAdConfigurationMediaTailorPlaybackConfigurationsList <a name="IvsAdConfigurationMediaTailorPlaybackConfigurationsList" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ivs_ad_configuration.IvsAdConfigurationMediaTailorPlaybackConfigurationsList;

new IvsAdConfigurationMediaTailorPlaybackConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsList.get"></a>

```java
public IvsAdConfigurationMediaTailorPlaybackConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurations">IvsAdConfigurationMediaTailorPlaybackConfigurations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<IvsAdConfigurationMediaTailorPlaybackConfigurations> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurations">IvsAdConfigurationMediaTailorPlaybackConfigurations</a>>

---


### IvsAdConfigurationMediaTailorPlaybackConfigurationsOutputReference <a name="IvsAdConfigurationMediaTailorPlaybackConfigurationsOutputReference" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ivs_ad_configuration.IvsAdConfigurationMediaTailorPlaybackConfigurationsOutputReference;

new IvsAdConfigurationMediaTailorPlaybackConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsOutputReference.resetPlaybackConfigurationArn">resetPlaybackConfigurationArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPlaybackConfigurationArn` <a name="resetPlaybackConfigurationArn" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsOutputReference.resetPlaybackConfigurationArn"></a>

```java
public void resetPlaybackConfigurationArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsOutputReference.property.playbackConfigurationArnInput">playbackConfigurationArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsOutputReference.property.playbackConfigurationArn">playbackConfigurationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurations">IvsAdConfigurationMediaTailorPlaybackConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `playbackConfigurationArnInput`<sup>Optional</sup> <a name="playbackConfigurationArnInput" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsOutputReference.property.playbackConfigurationArnInput"></a>

```java
public java.lang.String getPlaybackConfigurationArnInput();
```

- *Type:* java.lang.String

---

##### `playbackConfigurationArn`<sup>Required</sup> <a name="playbackConfigurationArn" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsOutputReference.property.playbackConfigurationArn"></a>

```java
public java.lang.String getPlaybackConfigurationArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurationsOutputReference.property.internalValue"></a>

```java
public IResolvable|IvsAdConfigurationMediaTailorPlaybackConfigurations getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationMediaTailorPlaybackConfigurations">IvsAdConfigurationMediaTailorPlaybackConfigurations</a>

---


### IvsAdConfigurationPostRollConfigurationOutputReference <a name="IvsAdConfigurationPostRollConfigurationOutputReference" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ivs_ad_configuration.IvsAdConfigurationPostRollConfigurationOutputReference;

new IvsAdConfigurationPostRollConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfigurationOutputReference.resetDurationSeconds">resetDurationSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfigurationOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDurationSeconds` <a name="resetDurationSeconds" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfigurationOutputReference.resetDurationSeconds"></a>

```java
public void resetDurationSeconds()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfigurationOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfigurationOutputReference.property.durationSecondsInput">durationSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfigurationOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfigurationOutputReference.property.durationSeconds">durationSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfigurationOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfiguration">IvsAdConfigurationPostRollConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `durationSecondsInput`<sup>Optional</sup> <a name="durationSecondsInput" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfigurationOutputReference.property.durationSecondsInput"></a>

```java
public java.lang.Number getDurationSecondsInput();
```

- *Type:* java.lang.Number

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfigurationOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `durationSeconds`<sup>Required</sup> <a name="durationSeconds" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfigurationOutputReference.property.durationSeconds"></a>

```java
public java.lang.Number getDurationSeconds();
```

- *Type:* java.lang.Number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfigurationOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|IvsAdConfigurationPostRollConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationPostRollConfiguration">IvsAdConfigurationPostRollConfiguration</a>

---


### IvsAdConfigurationTagsList <a name="IvsAdConfigurationTagsList" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ivs_ad_configuration.IvsAdConfigurationTagsList;

new IvsAdConfigurationTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsList.get"></a>

```java
public IvsAdConfigurationTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTags">IvsAdConfigurationTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<IvsAdConfigurationTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTags">IvsAdConfigurationTags</a>>

---


### IvsAdConfigurationTagsOutputReference <a name="IvsAdConfigurationTagsOutputReference" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ivs_ad_configuration.IvsAdConfigurationTagsOutputReference;

new IvsAdConfigurationTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTags">IvsAdConfigurationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|IvsAdConfigurationTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ivsAdConfiguration.IvsAdConfigurationTags">IvsAdConfigurationTags</a>

---



