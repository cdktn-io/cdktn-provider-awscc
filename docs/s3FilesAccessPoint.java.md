# `s3FilesAccessPoint` Submodule <a name="`s3FilesAccessPoint` Submodule" id="@cdktn/provider-awscc.s3FilesAccessPoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3FilesAccessPoint <a name="S3FilesAccessPoint" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3files_access_point awscc_s3files_access_point}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_files_access_point.S3FilesAccessPoint;

S3FilesAccessPoint.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .fileSystemId(java.lang.String)
//  .clientToken(java.lang.String)
//  .posixUser(S3FilesAccessPointPosixUser)
//  .rootDirectory(S3FilesAccessPointRootDirectory)
//  .tags(IResolvable|java.util.List<S3FilesAccessPointTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.fileSystemId">fileSystemId</a></code> | <code>java.lang.String</code> | The ID of the S3 Files file system that the access point provides access to. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.clientToken">clientToken</a></code> | <code>java.lang.String</code> | (optional) A string of up to 64 ASCII characters that Amazon EFS uses to ensure idempotent creation. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.posixUser">posixUser</a></code> | <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUser">S3FilesAccessPointPosixUser</a></code> | The operating system user and group applied to all compute drive requests made using the access point. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.rootDirectory">rootDirectory</a></code> | <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectory">S3FilesAccessPointRootDirectory</a></code> | Specifies the directory on the Amazon EFS file system that the access point exposes as the root directory of your file system to NFS clients using the access point. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTags">S3FilesAccessPointTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3files_access_point#tags S3FilesAccessPoint#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.fileSystemId"></a>

- *Type:* java.lang.String

The ID of the S3 Files file system that the access point provides access to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3files_access_point#file_system_id S3FilesAccessPoint#file_system_id}

---

##### `clientToken`<sup>Optional</sup> <a name="clientToken" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.clientToken"></a>

- *Type:* java.lang.String

(optional) A string of up to 64 ASCII characters that Amazon EFS uses to ensure idempotent creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3files_access_point#client_token S3FilesAccessPoint#client_token}

---

##### `posixUser`<sup>Optional</sup> <a name="posixUser" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.posixUser"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUser">S3FilesAccessPointPosixUser</a>

The operating system user and group applied to all compute drive requests made using the access point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3files_access_point#posix_user S3FilesAccessPoint#posix_user}

---

##### `rootDirectory`<sup>Optional</sup> <a name="rootDirectory" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.rootDirectory"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectory">S3FilesAccessPointRootDirectory</a>

Specifies the directory on the Amazon EFS file system that the access point exposes as the root directory of your file system to NFS clients using the access point.

The clients using the access point can only access the root directory and below. If the RootDirectory>Path specified does not exist, EFS creates it and applies the CreationPermissions settings when a client connects to an access point. When specifying a RootDirectory, you need to provide the Path, and the CreationPermissions is optional.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3files_access_point#root_directory S3FilesAccessPoint#root_directory}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTags">S3FilesAccessPointTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3files_access_point#tags S3FilesAccessPoint#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.putPosixUser">putPosixUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.putRootDirectory">putRootDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.resetClientToken">resetClientToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.resetPosixUser">resetPosixUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.resetRootDirectory">resetRootDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPosixUser` <a name="putPosixUser" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.putPosixUser"></a>

```java
public void putPosixUser(S3FilesAccessPointPosixUser value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.putPosixUser.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUser">S3FilesAccessPointPosixUser</a>

---

##### `putRootDirectory` <a name="putRootDirectory" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.putRootDirectory"></a>

```java
public void putRootDirectory(S3FilesAccessPointRootDirectory value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.putRootDirectory.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectory">S3FilesAccessPointRootDirectory</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<S3FilesAccessPointTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTags">S3FilesAccessPointTags</a>>

---

##### `resetClientToken` <a name="resetClientToken" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.resetClientToken"></a>

```java
public void resetClientToken()
```

##### `resetPosixUser` <a name="resetPosixUser" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.resetPosixUser"></a>

```java
public void resetPosixUser()
```

##### `resetRootDirectory` <a name="resetRootDirectory" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.resetRootDirectory"></a>

```java
public void resetRootDirectory()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a S3FilesAccessPoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.isConstruct"></a>

```java
import io.cdktn.providers.awscc.s3_files_access_point.S3FilesAccessPoint;

S3FilesAccessPoint.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.s3_files_access_point.S3FilesAccessPoint;

S3FilesAccessPoint.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.s3_files_access_point.S3FilesAccessPoint;

S3FilesAccessPoint.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.s3_files_access_point.S3FilesAccessPoint;

S3FilesAccessPoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),S3FilesAccessPoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a S3FilesAccessPoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the S3FilesAccessPoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing S3FilesAccessPoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3files_access_point#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the S3FilesAccessPoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.accessPointArn">accessPointArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.accessPointId">accessPointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.ownerId">ownerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.posixUser">posixUser</a></code> | <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference">S3FilesAccessPointPosixUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.rootDirectory">rootDirectory</a></code> | <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference">S3FilesAccessPointRootDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsList">S3FilesAccessPointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.clientTokenInput">clientTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.fileSystemIdInput">fileSystemIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.posixUserInput">posixUserInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUser">S3FilesAccessPointPosixUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.rootDirectoryInput">rootDirectoryInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectory">S3FilesAccessPointRootDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTags">S3FilesAccessPointTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.clientToken">clientToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.fileSystemId">fileSystemId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accessPointArn`<sup>Required</sup> <a name="accessPointArn" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.accessPointArn"></a>

```java
public java.lang.String getAccessPointArn();
```

- *Type:* java.lang.String

---

##### `accessPointId`<sup>Required</sup> <a name="accessPointId" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.accessPointId"></a>

```java
public java.lang.String getAccessPointId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.ownerId"></a>

```java
public java.lang.String getOwnerId();
```

- *Type:* java.lang.String

---

##### `posixUser`<sup>Required</sup> <a name="posixUser" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.posixUser"></a>

```java
public S3FilesAccessPointPosixUserOutputReference getPosixUser();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference">S3FilesAccessPointPosixUserOutputReference</a>

---

##### `rootDirectory`<sup>Required</sup> <a name="rootDirectory" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.rootDirectory"></a>

```java
public S3FilesAccessPointRootDirectoryOutputReference getRootDirectory();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference">S3FilesAccessPointRootDirectoryOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.tags"></a>

```java
public S3FilesAccessPointTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsList">S3FilesAccessPointTagsList</a>

---

##### `clientTokenInput`<sup>Optional</sup> <a name="clientTokenInput" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.clientTokenInput"></a>

```java
public java.lang.String getClientTokenInput();
```

- *Type:* java.lang.String

---

##### `fileSystemIdInput`<sup>Optional</sup> <a name="fileSystemIdInput" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.fileSystemIdInput"></a>

```java
public java.lang.String getFileSystemIdInput();
```

- *Type:* java.lang.String

---

##### `posixUserInput`<sup>Optional</sup> <a name="posixUserInput" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.posixUserInput"></a>

```java
public IResolvable|S3FilesAccessPointPosixUser getPosixUserInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUser">S3FilesAccessPointPosixUser</a>

---

##### `rootDirectoryInput`<sup>Optional</sup> <a name="rootDirectoryInput" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.rootDirectoryInput"></a>

```java
public IResolvable|S3FilesAccessPointRootDirectory getRootDirectoryInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectory">S3FilesAccessPointRootDirectory</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.tagsInput"></a>

```java
public IResolvable|java.util.List<S3FilesAccessPointTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTags">S3FilesAccessPointTags</a>>

---

##### `clientToken`<sup>Required</sup> <a name="clientToken" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.clientToken"></a>

```java
public java.lang.String getClientToken();
```

- *Type:* java.lang.String

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.fileSystemId"></a>

```java
public java.lang.String getFileSystemId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### S3FilesAccessPointConfig <a name="S3FilesAccessPointConfig" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_files_access_point.S3FilesAccessPointConfig;

S3FilesAccessPointConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .fileSystemId(java.lang.String)
//  .clientToken(java.lang.String)
//  .posixUser(S3FilesAccessPointPosixUser)
//  .rootDirectory(S3FilesAccessPointRootDirectory)
//  .tags(IResolvable|java.util.List<S3FilesAccessPointTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointConfig.property.fileSystemId">fileSystemId</a></code> | <code>java.lang.String</code> | The ID of the S3 Files file system that the access point provides access to. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointConfig.property.clientToken">clientToken</a></code> | <code>java.lang.String</code> | (optional) A string of up to 64 ASCII characters that Amazon EFS uses to ensure idempotent creation. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointConfig.property.posixUser">posixUser</a></code> | <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUser">S3FilesAccessPointPosixUser</a></code> | The operating system user and group applied to all compute drive requests made using the access point. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointConfig.property.rootDirectory">rootDirectory</a></code> | <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectory">S3FilesAccessPointRootDirectory</a></code> | Specifies the directory on the Amazon EFS file system that the access point exposes as the root directory of your file system to NFS clients using the access point. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTags">S3FilesAccessPointTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3files_access_point#tags S3FilesAccessPoint#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointConfig.property.fileSystemId"></a>

```java
public java.lang.String getFileSystemId();
```

- *Type:* java.lang.String

The ID of the S3 Files file system that the access point provides access to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3files_access_point#file_system_id S3FilesAccessPoint#file_system_id}

---

##### `clientToken`<sup>Optional</sup> <a name="clientToken" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointConfig.property.clientToken"></a>

```java
public java.lang.String getClientToken();
```

- *Type:* java.lang.String

(optional) A string of up to 64 ASCII characters that Amazon EFS uses to ensure idempotent creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3files_access_point#client_token S3FilesAccessPoint#client_token}

---

##### `posixUser`<sup>Optional</sup> <a name="posixUser" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointConfig.property.posixUser"></a>

```java
public S3FilesAccessPointPosixUser getPosixUser();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUser">S3FilesAccessPointPosixUser</a>

The operating system user and group applied to all compute drive requests made using the access point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3files_access_point#posix_user S3FilesAccessPoint#posix_user}

---

##### `rootDirectory`<sup>Optional</sup> <a name="rootDirectory" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointConfig.property.rootDirectory"></a>

```java
public S3FilesAccessPointRootDirectory getRootDirectory();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectory">S3FilesAccessPointRootDirectory</a>

Specifies the directory on the Amazon EFS file system that the access point exposes as the root directory of your file system to NFS clients using the access point.

The clients using the access point can only access the root directory and below. If the RootDirectory>Path specified does not exist, EFS creates it and applies the CreationPermissions settings when a client connects to an access point. When specifying a RootDirectory, you need to provide the Path, and the CreationPermissions is optional.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3files_access_point#root_directory S3FilesAccessPoint#root_directory}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointConfig.property.tags"></a>

```java
public IResolvable|java.util.List<S3FilesAccessPointTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTags">S3FilesAccessPointTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3files_access_point#tags S3FilesAccessPoint#tags}.

---

### S3FilesAccessPointPosixUser <a name="S3FilesAccessPointPosixUser" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUser.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_files_access_point.S3FilesAccessPointPosixUser;

S3FilesAccessPointPosixUser.builder()
//  .gid(java.lang.String)
//  .secondaryGids(java.util.List<java.lang.String>)
//  .uid(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUser.property.gid">gid</a></code> | <code>java.lang.String</code> | The POSIX group ID used for all file system operations using this access point. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUser.property.secondaryGids">secondaryGids</a></code> | <code>java.util.List<java.lang.String></code> | Secondary POSIX group IDs used for all file system operations using this access point. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUser.property.uid">uid</a></code> | <code>java.lang.String</code> | The POSIX user ID used for all file system operations using this access point. |

---

##### `gid`<sup>Optional</sup> <a name="gid" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUser.property.gid"></a>

```java
public java.lang.String getGid();
```

- *Type:* java.lang.String

The POSIX group ID used for all file system operations using this access point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3files_access_point#gid S3FilesAccessPoint#gid}

---

##### `secondaryGids`<sup>Optional</sup> <a name="secondaryGids" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUser.property.secondaryGids"></a>

```java
public java.util.List<java.lang.String> getSecondaryGids();
```

- *Type:* java.util.List<java.lang.String>

Secondary POSIX group IDs used for all file system operations using this access point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3files_access_point#secondary_gids S3FilesAccessPoint#secondary_gids}

---

##### `uid`<sup>Optional</sup> <a name="uid" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUser.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

The POSIX user ID used for all file system operations using this access point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3files_access_point#uid S3FilesAccessPoint#uid}

---

### S3FilesAccessPointRootDirectory <a name="S3FilesAccessPointRootDirectory" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectory.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_files_access_point.S3FilesAccessPointRootDirectory;

S3FilesAccessPointRootDirectory.builder()
//  .creationPermissions(S3FilesAccessPointRootDirectoryCreationPermissions)
//  .path(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectory.property.creationPermissions">creationPermissions</a></code> | <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions">S3FilesAccessPointRootDirectoryCreationPermissions</a></code> | (Optional) Specifies the POSIX IDs and permissions to apply to the access point's RootDirectory. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectory.property.path">path</a></code> | <code>java.lang.String</code> | Specifies the path on the EFS file system to expose as the root directory to NFS clients using the access point to access the EFS file system. |

---

##### `creationPermissions`<sup>Optional</sup> <a name="creationPermissions" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectory.property.creationPermissions"></a>

```java
public S3FilesAccessPointRootDirectoryCreationPermissions getCreationPermissions();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions">S3FilesAccessPointRootDirectoryCreationPermissions</a>

(Optional) Specifies the POSIX IDs and permissions to apply to the access point's RootDirectory.

If the RootDirectory>Path specified does not exist, EFS creates the root directory using the CreationPermissions settings when a client connects to an access point. When specifying the CreationPermissions, you must provide values for all properties.   If you do not provide CreationPermissions and the specified RootDirectory>Path does not exist, attempts to mount the file system using the access point will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3files_access_point#creation_permissions S3FilesAccessPoint#creation_permissions}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectory.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Specifies the path on the EFS file system to expose as the root directory to NFS clients using the access point to access the EFS file system.

A path can have up to four subdirectories. If the specified path does not exist, you are required to provide the CreationPermissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3files_access_point#path S3FilesAccessPoint#path}

---

### S3FilesAccessPointRootDirectoryCreationPermissions <a name="S3FilesAccessPointRootDirectoryCreationPermissions" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_files_access_point.S3FilesAccessPointRootDirectoryCreationPermissions;

S3FilesAccessPointRootDirectoryCreationPermissions.builder()
//  .ownerGid(java.lang.String)
//  .ownerUid(java.lang.String)
//  .permissions(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions.property.ownerGid">ownerGid</a></code> | <code>java.lang.String</code> | Specifies the POSIX group ID to apply to the RootDirectory. Accepts values from 0 to 2^32 (4294967295). |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions.property.ownerUid">ownerUid</a></code> | <code>java.lang.String</code> | Specifies the POSIX user ID to apply to the RootDirectory. Accepts values from 0 to 2^32 (4294967295). |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions.property.permissions">permissions</a></code> | <code>java.lang.String</code> | Specifies the POSIX permissions to apply to the RootDirectory, in the format of an octal number representing the file's mode bits. |

---

##### `ownerGid`<sup>Optional</sup> <a name="ownerGid" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions.property.ownerGid"></a>

```java
public java.lang.String getOwnerGid();
```

- *Type:* java.lang.String

Specifies the POSIX group ID to apply to the RootDirectory. Accepts values from 0 to 2^32 (4294967295).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3files_access_point#owner_gid S3FilesAccessPoint#owner_gid}

---

##### `ownerUid`<sup>Optional</sup> <a name="ownerUid" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions.property.ownerUid"></a>

```java
public java.lang.String getOwnerUid();
```

- *Type:* java.lang.String

Specifies the POSIX user ID to apply to the RootDirectory. Accepts values from 0 to 2^32 (4294967295).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3files_access_point#owner_uid S3FilesAccessPoint#owner_uid}

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions.property.permissions"></a>

```java
public java.lang.String getPermissions();
```

- *Type:* java.lang.String

Specifies the POSIX permissions to apply to the RootDirectory, in the format of an octal number representing the file's mode bits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3files_access_point#permissions S3FilesAccessPoint#permissions}

---

### S3FilesAccessPointTags <a name="S3FilesAccessPointTags" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_files_access_point.S3FilesAccessPointTags;

S3FilesAccessPointTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3files_access_point#key S3FilesAccessPoint#key}. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3files_access_point#value S3FilesAccessPoint#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3files_access_point#key S3FilesAccessPoint#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3files_access_point#value S3FilesAccessPoint#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3FilesAccessPointPosixUserOutputReference <a name="S3FilesAccessPointPosixUserOutputReference" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_files_access_point.S3FilesAccessPointPosixUserOutputReference;

new S3FilesAccessPointPosixUserOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.resetGid">resetGid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.resetSecondaryGids">resetSecondaryGids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.resetUid">resetUid</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGid` <a name="resetGid" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.resetGid"></a>

```java
public void resetGid()
```

##### `resetSecondaryGids` <a name="resetSecondaryGids" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.resetSecondaryGids"></a>

```java
public void resetSecondaryGids()
```

##### `resetUid` <a name="resetUid" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.resetUid"></a>

```java
public void resetUid()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.gidInput">gidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.secondaryGidsInput">secondaryGidsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.uidInput">uidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.gid">gid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.secondaryGids">secondaryGids</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUser">S3FilesAccessPointPosixUser</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `gidInput`<sup>Optional</sup> <a name="gidInput" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.gidInput"></a>

```java
public java.lang.String getGidInput();
```

- *Type:* java.lang.String

---

##### `secondaryGidsInput`<sup>Optional</sup> <a name="secondaryGidsInput" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.secondaryGidsInput"></a>

```java
public java.util.List<java.lang.String> getSecondaryGidsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `uidInput`<sup>Optional</sup> <a name="uidInput" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.uidInput"></a>

```java
public java.lang.String getUidInput();
```

- *Type:* java.lang.String

---

##### `gid`<sup>Required</sup> <a name="gid" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.gid"></a>

```java
public java.lang.String getGid();
```

- *Type:* java.lang.String

---

##### `secondaryGids`<sup>Required</sup> <a name="secondaryGids" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.secondaryGids"></a>

```java
public java.util.List<java.lang.String> getSecondaryGids();
```

- *Type:* java.util.List<java.lang.String>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.internalValue"></a>

```java
public IResolvable|S3FilesAccessPointPosixUser getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUser">S3FilesAccessPointPosixUser</a>

---


### S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference <a name="S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_files_access_point.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference;

new S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.resetOwnerGid">resetOwnerGid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.resetOwnerUid">resetOwnerUid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.resetPermissions">resetPermissions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOwnerGid` <a name="resetOwnerGid" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.resetOwnerGid"></a>

```java
public void resetOwnerGid()
```

##### `resetOwnerUid` <a name="resetOwnerUid" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.resetOwnerUid"></a>

```java
public void resetOwnerUid()
```

##### `resetPermissions` <a name="resetPermissions" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.resetPermissions"></a>

```java
public void resetPermissions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.ownerGidInput">ownerGidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.ownerUidInput">ownerUidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.permissionsInput">permissionsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.ownerGid">ownerGid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.ownerUid">ownerUid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.permissions">permissions</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions">S3FilesAccessPointRootDirectoryCreationPermissions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ownerGidInput`<sup>Optional</sup> <a name="ownerGidInput" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.ownerGidInput"></a>

```java
public java.lang.String getOwnerGidInput();
```

- *Type:* java.lang.String

---

##### `ownerUidInput`<sup>Optional</sup> <a name="ownerUidInput" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.ownerUidInput"></a>

```java
public java.lang.String getOwnerUidInput();
```

- *Type:* java.lang.String

---

##### `permissionsInput`<sup>Optional</sup> <a name="permissionsInput" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.permissionsInput"></a>

```java
public java.lang.String getPermissionsInput();
```

- *Type:* java.lang.String

---

##### `ownerGid`<sup>Required</sup> <a name="ownerGid" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.ownerGid"></a>

```java
public java.lang.String getOwnerGid();
```

- *Type:* java.lang.String

---

##### `ownerUid`<sup>Required</sup> <a name="ownerUid" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.ownerUid"></a>

```java
public java.lang.String getOwnerUid();
```

- *Type:* java.lang.String

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.permissions"></a>

```java
public java.lang.String getPermissions();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.internalValue"></a>

```java
public IResolvable|S3FilesAccessPointRootDirectoryCreationPermissions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions">S3FilesAccessPointRootDirectoryCreationPermissions</a>

---


### S3FilesAccessPointRootDirectoryOutputReference <a name="S3FilesAccessPointRootDirectoryOutputReference" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_files_access_point.S3FilesAccessPointRootDirectoryOutputReference;

new S3FilesAccessPointRootDirectoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.putCreationPermissions">putCreationPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.resetCreationPermissions">resetCreationPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCreationPermissions` <a name="putCreationPermissions" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.putCreationPermissions"></a>

```java
public void putCreationPermissions(S3FilesAccessPointRootDirectoryCreationPermissions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.putCreationPermissions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions">S3FilesAccessPointRootDirectoryCreationPermissions</a>

---

##### `resetCreationPermissions` <a name="resetCreationPermissions" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.resetCreationPermissions"></a>

```java
public void resetCreationPermissions()
```

##### `resetPath` <a name="resetPath" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.resetPath"></a>

```java
public void resetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.property.creationPermissions">creationPermissions</a></code> | <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference">S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.property.creationPermissionsInput">creationPermissionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions">S3FilesAccessPointRootDirectoryCreationPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectory">S3FilesAccessPointRootDirectory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `creationPermissions`<sup>Required</sup> <a name="creationPermissions" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.property.creationPermissions"></a>

```java
public S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference getCreationPermissions();
```

- *Type:* <a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference">S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference</a>

---

##### `creationPermissionsInput`<sup>Optional</sup> <a name="creationPermissionsInput" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.property.creationPermissionsInput"></a>

```java
public IResolvable|S3FilesAccessPointRootDirectoryCreationPermissions getCreationPermissionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions">S3FilesAccessPointRootDirectoryCreationPermissions</a>

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.property.internalValue"></a>

```java
public IResolvable|S3FilesAccessPointRootDirectory getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectory">S3FilesAccessPointRootDirectory</a>

---


### S3FilesAccessPointTagsList <a name="S3FilesAccessPointTagsList" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_files_access_point.S3FilesAccessPointTagsList;

new S3FilesAccessPointTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsList.get"></a>

```java
public S3FilesAccessPointTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTags">S3FilesAccessPointTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<S3FilesAccessPointTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTags">S3FilesAccessPointTags</a>>

---


### S3FilesAccessPointTagsOutputReference <a name="S3FilesAccessPointTagsOutputReference" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.s3_files_access_point.S3FilesAccessPointTagsOutputReference;

new S3FilesAccessPointTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTags">S3FilesAccessPointTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|S3FilesAccessPointTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTags">S3FilesAccessPointTags</a>

---



