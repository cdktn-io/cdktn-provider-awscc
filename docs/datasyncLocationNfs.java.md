# `datasyncLocationNfs` Submodule <a name="`datasyncLocationNfs` Submodule" id="@cdktn/provider-awscc.datasyncLocationNfs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatasyncLocationNfs <a name="DatasyncLocationNfs" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datasync_location_nfs awscc_datasync_location_nfs}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_location_nfs.DatasyncLocationNfs;

DatasyncLocationNfs.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .onPremConfig(DatasyncLocationNfsOnPremConfig)
//  .mountOptions(DatasyncLocationNfsMountOptions)
//  .serverHostname(java.lang.String)
//  .subdirectory(java.lang.String)
//  .tags(IResolvable|java.util.List<DatasyncLocationNfsTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.Initializer.parameter.onPremConfig">onPremConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsOnPremConfig">DatasyncLocationNfsOnPremConfig</a></code> | Contains a list of Amazon Resource Names (ARNs) of agents that are used to connect an NFS server. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.Initializer.parameter.mountOptions">mountOptions</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsMountOptions">DatasyncLocationNfsMountOptions</a></code> | The NFS mount options that DataSync can use to mount your NFS share. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.Initializer.parameter.serverHostname">serverHostname</a></code> | <code>java.lang.String</code> | The name of the NFS server. This value is the IP address or DNS name of the NFS server. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.Initializer.parameter.subdirectory">subdirectory</a></code> | <code>java.lang.String</code> | The subdirectory in the NFS file system that is used to read data from the NFS source location or write data to the NFS destination. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTags">DatasyncLocationNfsTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `onPremConfig`<sup>Required</sup> <a name="onPremConfig" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.Initializer.parameter.onPremConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsOnPremConfig">DatasyncLocationNfsOnPremConfig</a>

Contains a list of Amazon Resource Names (ARNs) of agents that are used to connect an NFS server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datasync_location_nfs#on_prem_config DatasyncLocationNfs#on_prem_config}

---

##### `mountOptions`<sup>Optional</sup> <a name="mountOptions" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.Initializer.parameter.mountOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsMountOptions">DatasyncLocationNfsMountOptions</a>

The NFS mount options that DataSync can use to mount your NFS share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datasync_location_nfs#mount_options DatasyncLocationNfs#mount_options}

---

##### `serverHostname`<sup>Optional</sup> <a name="serverHostname" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.Initializer.parameter.serverHostname"></a>

- *Type:* java.lang.String

The name of the NFS server. This value is the IP address or DNS name of the NFS server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datasync_location_nfs#server_hostname DatasyncLocationNfs#server_hostname}

---

##### `subdirectory`<sup>Optional</sup> <a name="subdirectory" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.Initializer.parameter.subdirectory"></a>

- *Type:* java.lang.String

The subdirectory in the NFS file system that is used to read data from the NFS source location or write data to the NFS destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datasync_location_nfs#subdirectory DatasyncLocationNfs#subdirectory}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTags">DatasyncLocationNfsTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datasync_location_nfs#tags DatasyncLocationNfs#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.putMountOptions">putMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.putOnPremConfig">putOnPremConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.resetMountOptions">resetMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.resetServerHostname">resetServerHostname</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.resetSubdirectory">resetSubdirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMountOptions` <a name="putMountOptions" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.putMountOptions"></a>

```java
public void putMountOptions(DatasyncLocationNfsMountOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.putMountOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsMountOptions">DatasyncLocationNfsMountOptions</a>

---

##### `putOnPremConfig` <a name="putOnPremConfig" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.putOnPremConfig"></a>

```java
public void putOnPremConfig(DatasyncLocationNfsOnPremConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.putOnPremConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsOnPremConfig">DatasyncLocationNfsOnPremConfig</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<DatasyncLocationNfsTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTags">DatasyncLocationNfsTags</a>>

---

##### `resetMountOptions` <a name="resetMountOptions" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.resetMountOptions"></a>

```java
public void resetMountOptions()
```

##### `resetServerHostname` <a name="resetServerHostname" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.resetServerHostname"></a>

```java
public void resetServerHostname()
```

##### `resetSubdirectory` <a name="resetSubdirectory" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.resetSubdirectory"></a>

```java
public void resetSubdirectory()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DatasyncLocationNfs resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.isConstruct"></a>

```java
import io.cdktn.providers.awscc.datasync_location_nfs.DatasyncLocationNfs;

DatasyncLocationNfs.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.datasync_location_nfs.DatasyncLocationNfs;

DatasyncLocationNfs.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.datasync_location_nfs.DatasyncLocationNfs;

DatasyncLocationNfs.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.datasync_location_nfs.DatasyncLocationNfs;

DatasyncLocationNfs.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatasyncLocationNfs.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DatasyncLocationNfs resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatasyncLocationNfs to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatasyncLocationNfs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datasync_location_nfs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DatasyncLocationNfs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.property.locationArn">locationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.property.locationUri">locationUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.property.mountOptions">mountOptions</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference">DatasyncLocationNfsMountOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.property.onPremConfig">onPremConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference">DatasyncLocationNfsOnPremConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsList">DatasyncLocationNfsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.property.mountOptionsInput">mountOptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsMountOptions">DatasyncLocationNfsMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.property.onPremConfigInput">onPremConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsOnPremConfig">DatasyncLocationNfsOnPremConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.property.serverHostnameInput">serverHostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.property.subdirectoryInput">subdirectoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTags">DatasyncLocationNfsTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.property.serverHostname">serverHostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.property.subdirectory">subdirectory</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `locationArn`<sup>Required</sup> <a name="locationArn" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.property.locationArn"></a>

```java
public java.lang.String getLocationArn();
```

- *Type:* java.lang.String

---

##### `locationUri`<sup>Required</sup> <a name="locationUri" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.property.locationUri"></a>

```java
public java.lang.String getLocationUri();
```

- *Type:* java.lang.String

---

##### `mountOptions`<sup>Required</sup> <a name="mountOptions" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.property.mountOptions"></a>

```java
public DatasyncLocationNfsMountOptionsOutputReference getMountOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference">DatasyncLocationNfsMountOptionsOutputReference</a>

---

##### `onPremConfig`<sup>Required</sup> <a name="onPremConfig" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.property.onPremConfig"></a>

```java
public DatasyncLocationNfsOnPremConfigOutputReference getOnPremConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference">DatasyncLocationNfsOnPremConfigOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.property.tags"></a>

```java
public DatasyncLocationNfsTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsList">DatasyncLocationNfsTagsList</a>

---

##### `mountOptionsInput`<sup>Optional</sup> <a name="mountOptionsInput" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.property.mountOptionsInput"></a>

```java
public IResolvable|DatasyncLocationNfsMountOptions getMountOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsMountOptions">DatasyncLocationNfsMountOptions</a>

---

##### `onPremConfigInput`<sup>Optional</sup> <a name="onPremConfigInput" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.property.onPremConfigInput"></a>

```java
public IResolvable|DatasyncLocationNfsOnPremConfig getOnPremConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsOnPremConfig">DatasyncLocationNfsOnPremConfig</a>

---

##### `serverHostnameInput`<sup>Optional</sup> <a name="serverHostnameInput" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.property.serverHostnameInput"></a>

```java
public java.lang.String getServerHostnameInput();
```

- *Type:* java.lang.String

---

##### `subdirectoryInput`<sup>Optional</sup> <a name="subdirectoryInput" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.property.subdirectoryInput"></a>

```java
public java.lang.String getSubdirectoryInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.property.tagsInput"></a>

```java
public IResolvable|java.util.List<DatasyncLocationNfsTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTags">DatasyncLocationNfsTags</a>>

---

##### `serverHostname`<sup>Required</sup> <a name="serverHostname" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.property.serverHostname"></a>

```java
public java.lang.String getServerHostname();
```

- *Type:* java.lang.String

---

##### `subdirectory`<sup>Required</sup> <a name="subdirectory" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.property.subdirectory"></a>

```java
public java.lang.String getSubdirectory();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfs.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatasyncLocationNfsConfig <a name="DatasyncLocationNfsConfig" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_location_nfs.DatasyncLocationNfsConfig;

DatasyncLocationNfsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .onPremConfig(DatasyncLocationNfsOnPremConfig)
//  .mountOptions(DatasyncLocationNfsMountOptions)
//  .serverHostname(java.lang.String)
//  .subdirectory(java.lang.String)
//  .tags(IResolvable|java.util.List<DatasyncLocationNfsTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsConfig.property.onPremConfig">onPremConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsOnPremConfig">DatasyncLocationNfsOnPremConfig</a></code> | Contains a list of Amazon Resource Names (ARNs) of agents that are used to connect an NFS server. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsConfig.property.mountOptions">mountOptions</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsMountOptions">DatasyncLocationNfsMountOptions</a></code> | The NFS mount options that DataSync can use to mount your NFS share. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsConfig.property.serverHostname">serverHostname</a></code> | <code>java.lang.String</code> | The name of the NFS server. This value is the IP address or DNS name of the NFS server. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsConfig.property.subdirectory">subdirectory</a></code> | <code>java.lang.String</code> | The subdirectory in the NFS file system that is used to read data from the NFS source location or write data to the NFS destination. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTags">DatasyncLocationNfsTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `onPremConfig`<sup>Required</sup> <a name="onPremConfig" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsConfig.property.onPremConfig"></a>

```java
public DatasyncLocationNfsOnPremConfig getOnPremConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsOnPremConfig">DatasyncLocationNfsOnPremConfig</a>

Contains a list of Amazon Resource Names (ARNs) of agents that are used to connect an NFS server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datasync_location_nfs#on_prem_config DatasyncLocationNfs#on_prem_config}

---

##### `mountOptions`<sup>Optional</sup> <a name="mountOptions" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsConfig.property.mountOptions"></a>

```java
public DatasyncLocationNfsMountOptions getMountOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsMountOptions">DatasyncLocationNfsMountOptions</a>

The NFS mount options that DataSync can use to mount your NFS share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datasync_location_nfs#mount_options DatasyncLocationNfs#mount_options}

---

##### `serverHostname`<sup>Optional</sup> <a name="serverHostname" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsConfig.property.serverHostname"></a>

```java
public java.lang.String getServerHostname();
```

- *Type:* java.lang.String

The name of the NFS server. This value is the IP address or DNS name of the NFS server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datasync_location_nfs#server_hostname DatasyncLocationNfs#server_hostname}

---

##### `subdirectory`<sup>Optional</sup> <a name="subdirectory" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsConfig.property.subdirectory"></a>

```java
public java.lang.String getSubdirectory();
```

- *Type:* java.lang.String

The subdirectory in the NFS file system that is used to read data from the NFS source location or write data to the NFS destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datasync_location_nfs#subdirectory DatasyncLocationNfs#subdirectory}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsConfig.property.tags"></a>

```java
public IResolvable|java.util.List<DatasyncLocationNfsTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTags">DatasyncLocationNfsTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datasync_location_nfs#tags DatasyncLocationNfs#tags}

---

### DatasyncLocationNfsMountOptions <a name="DatasyncLocationNfsMountOptions" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsMountOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsMountOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_location_nfs.DatasyncLocationNfsMountOptions;

DatasyncLocationNfsMountOptions.builder()
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsMountOptions.property.version">version</a></code> | <code>java.lang.String</code> | The specific NFS version that you want DataSync to use to mount your NFS share. |

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsMountOptions.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

The specific NFS version that you want DataSync to use to mount your NFS share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datasync_location_nfs#version DatasyncLocationNfs#version}

---

### DatasyncLocationNfsOnPremConfig <a name="DatasyncLocationNfsOnPremConfig" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsOnPremConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsOnPremConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_location_nfs.DatasyncLocationNfsOnPremConfig;

DatasyncLocationNfsOnPremConfig.builder()
    .agentArns(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsOnPremConfig.property.agentArns">agentArns</a></code> | <code>java.util.List<java.lang.String></code> | ARN(s) of the agent(s) to use for an NFS location. |

---

##### `agentArns`<sup>Required</sup> <a name="agentArns" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsOnPremConfig.property.agentArns"></a>

```java
public java.util.List<java.lang.String> getAgentArns();
```

- *Type:* java.util.List<java.lang.String>

ARN(s) of the agent(s) to use for an NFS location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datasync_location_nfs#agent_arns DatasyncLocationNfs#agent_arns}

---

### DatasyncLocationNfsTags <a name="DatasyncLocationNfsTags" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_location_nfs.DatasyncLocationNfsTags;

DatasyncLocationNfsTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTags.property.key">key</a></code> | <code>java.lang.String</code> | The key for an AWS resource tag. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for an AWS resource tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key for an AWS resource tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datasync_location_nfs#key DatasyncLocationNfs#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for an AWS resource tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datasync_location_nfs#value DatasyncLocationNfs#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DatasyncLocationNfsMountOptionsOutputReference <a name="DatasyncLocationNfsMountOptionsOutputReference" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_location_nfs.DatasyncLocationNfsMountOptionsOutputReference;

new DatasyncLocationNfsMountOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsMountOptions">DatasyncLocationNfsMountOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|DatasyncLocationNfsMountOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsMountOptions">DatasyncLocationNfsMountOptions</a>

---


### DatasyncLocationNfsOnPremConfigOutputReference <a name="DatasyncLocationNfsOnPremConfigOutputReference" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_location_nfs.DatasyncLocationNfsOnPremConfigOutputReference;

new DatasyncLocationNfsOnPremConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.property.agentArnsInput">agentArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.property.agentArns">agentArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsOnPremConfig">DatasyncLocationNfsOnPremConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `agentArnsInput`<sup>Optional</sup> <a name="agentArnsInput" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.property.agentArnsInput"></a>

```java
public java.util.List<java.lang.String> getAgentArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `agentArns`<sup>Required</sup> <a name="agentArns" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.property.agentArns"></a>

```java
public java.util.List<java.lang.String> getAgentArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|DatasyncLocationNfsOnPremConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsOnPremConfig">DatasyncLocationNfsOnPremConfig</a>

---


### DatasyncLocationNfsTagsList <a name="DatasyncLocationNfsTagsList" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_location_nfs.DatasyncLocationNfsTagsList;

new DatasyncLocationNfsTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsList.get"></a>

```java
public DatasyncLocationNfsTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTags">DatasyncLocationNfsTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DatasyncLocationNfsTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTags">DatasyncLocationNfsTags</a>>

---


### DatasyncLocationNfsTagsOutputReference <a name="DatasyncLocationNfsTagsOutputReference" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_location_nfs.DatasyncLocationNfsTagsOutputReference;

new DatasyncLocationNfsTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTags">DatasyncLocationNfsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|DatasyncLocationNfsTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncLocationNfs.DatasyncLocationNfsTags">DatasyncLocationNfsTags</a>

---



