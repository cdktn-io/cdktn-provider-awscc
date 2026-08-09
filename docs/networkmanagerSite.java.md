# `networkmanagerSite` Submodule <a name="`networkmanagerSite` Submodule" id="@cdktn/provider-awscc.networkmanagerSite"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkmanagerSite <a name="NetworkmanagerSite" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_site awscc_networkmanager_site}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.Initializer"></a>

```java
import io.cdktn.providers.awscc.networkmanager_site.NetworkmanagerSite;

NetworkmanagerSite.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .globalNetworkId(java.lang.String)
//  .description(java.lang.String)
//  .location(NetworkmanagerSiteLocation)
//  .tags(IResolvable|java.util.List<NetworkmanagerSiteTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.Initializer.parameter.globalNetworkId">globalNetworkId</a></code> | <code>java.lang.String</code> | The ID of the global network. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the site. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.Initializer.parameter.location">location</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocation">NetworkmanagerSiteLocation</a></code> | The location of the site. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTags">NetworkmanagerSiteTags</a>></code> | The tags for the site. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `globalNetworkId`<sup>Required</sup> <a name="globalNetworkId" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.Initializer.parameter.globalNetworkId"></a>

- *Type:* java.lang.String

The ID of the global network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_site#global_network_id NetworkmanagerSite#global_network_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the site.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_site#description NetworkmanagerSite#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.Initializer.parameter.location"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocation">NetworkmanagerSiteLocation</a>

The location of the site.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_site#location NetworkmanagerSite#location}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTags">NetworkmanagerSiteTags</a>>

The tags for the site.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_site#tags NetworkmanagerSite#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.putLocation">putLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLocation` <a name="putLocation" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.putLocation"></a>

```java
public void putLocation(NetworkmanagerSiteLocation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.putLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocation">NetworkmanagerSiteLocation</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<NetworkmanagerSiteTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTags">NetworkmanagerSiteTags</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkmanagerSite resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.isConstruct"></a>

```java
import io.cdktn.providers.awscc.networkmanager_site.NetworkmanagerSite;

NetworkmanagerSite.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.networkmanager_site.NetworkmanagerSite;

NetworkmanagerSite.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.networkmanager_site.NetworkmanagerSite;

NetworkmanagerSite.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.networkmanager_site.NetworkmanagerSite;

NetworkmanagerSite.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NetworkmanagerSite.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a NetworkmanagerSite resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NetworkmanagerSite to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NetworkmanagerSite that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_site#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the NetworkmanagerSite to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.property.location">location</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocationOutputReference">NetworkmanagerSiteLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.property.siteArn">siteArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.property.siteId">siteId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsList">NetworkmanagerSiteTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.property.globalNetworkIdInput">globalNetworkIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.property.locationInput">locationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocation">NetworkmanagerSiteLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTags">NetworkmanagerSiteTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.property.globalNetworkId">globalNetworkId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.property.location"></a>

```java
public NetworkmanagerSiteLocationOutputReference getLocation();
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocationOutputReference">NetworkmanagerSiteLocationOutputReference</a>

---

##### `siteArn`<sup>Required</sup> <a name="siteArn" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.property.siteArn"></a>

```java
public java.lang.String getSiteArn();
```

- *Type:* java.lang.String

---

##### `siteId`<sup>Required</sup> <a name="siteId" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.property.siteId"></a>

```java
public java.lang.String getSiteId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.property.tags"></a>

```java
public NetworkmanagerSiteTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsList">NetworkmanagerSiteTagsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `globalNetworkIdInput`<sup>Optional</sup> <a name="globalNetworkIdInput" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.property.globalNetworkIdInput"></a>

```java
public java.lang.String getGlobalNetworkIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.property.locationInput"></a>

```java
public IResolvable|NetworkmanagerSiteLocation getLocationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocation">NetworkmanagerSiteLocation</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.property.tagsInput"></a>

```java
public IResolvable|java.util.List<NetworkmanagerSiteTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTags">NetworkmanagerSiteTags</a>>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `globalNetworkId`<sup>Required</sup> <a name="globalNetworkId" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.property.globalNetworkId"></a>

```java
public java.lang.String getGlobalNetworkId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSite.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkmanagerSiteConfig <a name="NetworkmanagerSiteConfig" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.networkmanager_site.NetworkmanagerSiteConfig;

NetworkmanagerSiteConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .globalNetworkId(java.lang.String)
//  .description(java.lang.String)
//  .location(NetworkmanagerSiteLocation)
//  .tags(IResolvable|java.util.List<NetworkmanagerSiteTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteConfig.property.globalNetworkId">globalNetworkId</a></code> | <code>java.lang.String</code> | The ID of the global network. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the site. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteConfig.property.location">location</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocation">NetworkmanagerSiteLocation</a></code> | The location of the site. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTags">NetworkmanagerSiteTags</a>></code> | The tags for the site. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `globalNetworkId`<sup>Required</sup> <a name="globalNetworkId" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteConfig.property.globalNetworkId"></a>

```java
public java.lang.String getGlobalNetworkId();
```

- *Type:* java.lang.String

The ID of the global network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_site#global_network_id NetworkmanagerSite#global_network_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the site.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_site#description NetworkmanagerSite#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteConfig.property.location"></a>

```java
public NetworkmanagerSiteLocation getLocation();
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocation">NetworkmanagerSiteLocation</a>

The location of the site.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_site#location NetworkmanagerSite#location}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteConfig.property.tags"></a>

```java
public IResolvable|java.util.List<NetworkmanagerSiteTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTags">NetworkmanagerSiteTags</a>>

The tags for the site.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_site#tags NetworkmanagerSite#tags}

---

### NetworkmanagerSiteLocation <a name="NetworkmanagerSiteLocation" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocation.Initializer"></a>

```java
import io.cdktn.providers.awscc.networkmanager_site.NetworkmanagerSiteLocation;

NetworkmanagerSiteLocation.builder()
//  .address(java.lang.String)
//  .latitude(java.lang.String)
//  .longitude(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocation.property.address">address</a></code> | <code>java.lang.String</code> | The physical address. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocation.property.latitude">latitude</a></code> | <code>java.lang.String</code> | The latitude. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocation.property.longitude">longitude</a></code> | <code>java.lang.String</code> | The longitude. |

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocation.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

The physical address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_site#address NetworkmanagerSite#address}

---

##### `latitude`<sup>Optional</sup> <a name="latitude" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocation.property.latitude"></a>

```java
public java.lang.String getLatitude();
```

- *Type:* java.lang.String

The latitude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_site#latitude NetworkmanagerSite#latitude}

---

##### `longitude`<sup>Optional</sup> <a name="longitude" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocation.property.longitude"></a>

```java
public java.lang.String getLongitude();
```

- *Type:* java.lang.String

The longitude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_site#longitude NetworkmanagerSite#longitude}

---

### NetworkmanagerSiteTags <a name="NetworkmanagerSiteTags" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.networkmanager_site.NetworkmanagerSiteTags;

NetworkmanagerSiteTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_site#key NetworkmanagerSite#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_site#value NetworkmanagerSite#value}

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkmanagerSiteLocationOutputReference <a name="NetworkmanagerSiteLocationOutputReference" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.networkmanager_site.NetworkmanagerSiteLocationOutputReference;

new NetworkmanagerSiteLocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocationOutputReference.resetAddress">resetAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocationOutputReference.resetLatitude">resetLatitude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocationOutputReference.resetLongitude">resetLongitude</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddress` <a name="resetAddress" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocationOutputReference.resetAddress"></a>

```java
public void resetAddress()
```

##### `resetLatitude` <a name="resetLatitude" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocationOutputReference.resetLatitude"></a>

```java
public void resetLatitude()
```

##### `resetLongitude` <a name="resetLongitude" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocationOutputReference.resetLongitude"></a>

```java
public void resetLongitude()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocationOutputReference.property.addressInput">addressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocationOutputReference.property.latitudeInput">latitudeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocationOutputReference.property.longitudeInput">longitudeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocationOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocationOutputReference.property.latitude">latitude</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocationOutputReference.property.longitude">longitude</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocation">NetworkmanagerSiteLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocationOutputReference.property.addressInput"></a>

```java
public java.lang.String getAddressInput();
```

- *Type:* java.lang.String

---

##### `latitudeInput`<sup>Optional</sup> <a name="latitudeInput" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocationOutputReference.property.latitudeInput"></a>

```java
public java.lang.String getLatitudeInput();
```

- *Type:* java.lang.String

---

##### `longitudeInput`<sup>Optional</sup> <a name="longitudeInput" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocationOutputReference.property.longitudeInput"></a>

```java
public java.lang.String getLongitudeInput();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocationOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `latitude`<sup>Required</sup> <a name="latitude" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocationOutputReference.property.latitude"></a>

```java
public java.lang.String getLatitude();
```

- *Type:* java.lang.String

---

##### `longitude`<sup>Required</sup> <a name="longitude" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocationOutputReference.property.longitude"></a>

```java
public java.lang.String getLongitude();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocationOutputReference.property.internalValue"></a>

```java
public IResolvable|NetworkmanagerSiteLocation getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteLocation">NetworkmanagerSiteLocation</a>

---


### NetworkmanagerSiteTagsList <a name="NetworkmanagerSiteTagsList" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.networkmanager_site.NetworkmanagerSiteTagsList;

new NetworkmanagerSiteTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsList.get"></a>

```java
public NetworkmanagerSiteTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTags">NetworkmanagerSiteTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<NetworkmanagerSiteTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTags">NetworkmanagerSiteTags</a>>

---


### NetworkmanagerSiteTagsOutputReference <a name="NetworkmanagerSiteTagsOutputReference" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.networkmanager_site.NetworkmanagerSiteTagsOutputReference;

new NetworkmanagerSiteTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTags">NetworkmanagerSiteTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|NetworkmanagerSiteTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkmanagerSite.NetworkmanagerSiteTags">NetworkmanagerSiteTags</a>

---



