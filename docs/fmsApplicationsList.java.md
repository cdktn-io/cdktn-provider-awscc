# `fmsApplicationsList` Submodule <a name="`fmsApplicationsList` Submodule" id="@cdktn/provider-awscc.fmsApplicationsList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FmsApplicationsList <a name="FmsApplicationsList" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/fms_applications_list awscc_fms_applications_list}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.fms_applications_list.FmsApplicationsList;

FmsApplicationsList.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .appsList(IResolvable|java.util.List<FmsApplicationsListAppsListStruct>)
    .listName(java.lang.String)
//  .tags(IResolvable|java.util.List<FmsApplicationsListTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.Initializer.parameter.appsList">appsList</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStruct">FmsApplicationsListAppsListStruct</a>></code> | An array of applications in the Firewall Manager applications list. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.Initializer.parameter.listName">listName</a></code> | <code>java.lang.String</code> | The name of the Firewall Manager applications list. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTags">FmsApplicationsListTags</a>></code> | An array of key-value pairs to apply to the applications list. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `appsList`<sup>Required</sup> <a name="appsList" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.Initializer.parameter.appsList"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStruct">FmsApplicationsListAppsListStruct</a>>

An array of applications in the Firewall Manager applications list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/fms_applications_list#apps_list FmsApplicationsList#apps_list}

---

##### `listName`<sup>Required</sup> <a name="listName" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.Initializer.parameter.listName"></a>

- *Type:* java.lang.String

The name of the Firewall Manager applications list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/fms_applications_list#list_name FmsApplicationsList#list_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTags">FmsApplicationsListTags</a>>

An array of key-value pairs to apply to the applications list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/fms_applications_list#tags FmsApplicationsList#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.putAppsList">putAppsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAppsList` <a name="putAppsList" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.putAppsList"></a>

```java
public void putAppsList(IResolvable|java.util.List<FmsApplicationsListAppsListStruct> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.putAppsList.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStruct">FmsApplicationsListAppsListStruct</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<FmsApplicationsListTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTags">FmsApplicationsListTags</a>>

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a FmsApplicationsList resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.isConstruct"></a>

```java
import io.cdktn.providers.awscc.fms_applications_list.FmsApplicationsList;

FmsApplicationsList.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.fms_applications_list.FmsApplicationsList;

FmsApplicationsList.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.fms_applications_list.FmsApplicationsList;

FmsApplicationsList.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.fms_applications_list.FmsApplicationsList;

FmsApplicationsList.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),FmsApplicationsList.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a FmsApplicationsList resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the FmsApplicationsList to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing FmsApplicationsList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/fms_applications_list#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the FmsApplicationsList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.appsList">appsList</a></code> | <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructList">FmsApplicationsListAppsListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.lastUpdateTime">lastUpdateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.listId">listId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsList">FmsApplicationsListTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.appsListInput">appsListInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStruct">FmsApplicationsListAppsListStruct</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.listNameInput">listNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTags">FmsApplicationsListTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.listName">listName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `appsList`<sup>Required</sup> <a name="appsList" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.appsList"></a>

```java
public FmsApplicationsListAppsListStructList getAppsList();
```

- *Type:* <a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructList">FmsApplicationsListAppsListStructList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastUpdateTime`<sup>Required</sup> <a name="lastUpdateTime" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.lastUpdateTime"></a>

```java
public java.lang.String getLastUpdateTime();
```

- *Type:* java.lang.String

---

##### `listId`<sup>Required</sup> <a name="listId" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.listId"></a>

```java
public java.lang.String getListId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.tags"></a>

```java
public FmsApplicationsListTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsList">FmsApplicationsListTagsList</a>

---

##### `appsListInput`<sup>Optional</sup> <a name="appsListInput" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.appsListInput"></a>

```java
public IResolvable|java.util.List<FmsApplicationsListAppsListStruct> getAppsListInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStruct">FmsApplicationsListAppsListStruct</a>>

---

##### `listNameInput`<sup>Optional</sup> <a name="listNameInput" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.listNameInput"></a>

```java
public java.lang.String getListNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.tagsInput"></a>

```java
public IResolvable|java.util.List<FmsApplicationsListTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTags">FmsApplicationsListTags</a>>

---

##### `listName`<sup>Required</sup> <a name="listName" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.listName"></a>

```java
public java.lang.String getListName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### FmsApplicationsListAppsListStruct <a name="FmsApplicationsListAppsListStruct" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStruct.Initializer"></a>

```java
import io.cdktn.providers.awscc.fms_applications_list.FmsApplicationsListAppsListStruct;

FmsApplicationsListAppsListStruct.builder()
    .appName(java.lang.String)
    .port(java.lang.Number)
    .protocol(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStruct.property.appName">appName</a></code> | <code>java.lang.String</code> | The application's name. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStruct.property.port">port</a></code> | <code>java.lang.Number</code> | The application's port number, for example 80. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStruct.property.protocol">protocol</a></code> | <code>java.lang.String</code> | The IP protocol name or number. |

---

##### `appName`<sup>Required</sup> <a name="appName" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStruct.property.appName"></a>

```java
public java.lang.String getAppName();
```

- *Type:* java.lang.String

The application's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/fms_applications_list#app_name FmsApplicationsList#app_name}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStruct.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

The application's port number, for example 80.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/fms_applications_list#port FmsApplicationsList#port}

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStruct.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

The IP protocol name or number.

The name can be one of tcp, udp, or icmp. For information on possible numbers, see Protocol Numbers (https://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/fms_applications_list#protocol FmsApplicationsList#protocol}

---

### FmsApplicationsListConfig <a name="FmsApplicationsListConfig" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.fms_applications_list.FmsApplicationsListConfig;

FmsApplicationsListConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .appsList(IResolvable|java.util.List<FmsApplicationsListAppsListStruct>)
    .listName(java.lang.String)
//  .tags(IResolvable|java.util.List<FmsApplicationsListTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListConfig.property.appsList">appsList</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStruct">FmsApplicationsListAppsListStruct</a>></code> | An array of applications in the Firewall Manager applications list. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListConfig.property.listName">listName</a></code> | <code>java.lang.String</code> | The name of the Firewall Manager applications list. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTags">FmsApplicationsListTags</a>></code> | An array of key-value pairs to apply to the applications list. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `appsList`<sup>Required</sup> <a name="appsList" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListConfig.property.appsList"></a>

```java
public IResolvable|java.util.List<FmsApplicationsListAppsListStruct> getAppsList();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStruct">FmsApplicationsListAppsListStruct</a>>

An array of applications in the Firewall Manager applications list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/fms_applications_list#apps_list FmsApplicationsList#apps_list}

---

##### `listName`<sup>Required</sup> <a name="listName" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListConfig.property.listName"></a>

```java
public java.lang.String getListName();
```

- *Type:* java.lang.String

The name of the Firewall Manager applications list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/fms_applications_list#list_name FmsApplicationsList#list_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListConfig.property.tags"></a>

```java
public IResolvable|java.util.List<FmsApplicationsListTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTags">FmsApplicationsListTags</a>>

An array of key-value pairs to apply to the applications list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/fms_applications_list#tags FmsApplicationsList#tags}

---

### FmsApplicationsListTags <a name="FmsApplicationsListTags" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.fms_applications_list.FmsApplicationsListTags;

FmsApplicationsListTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTags.property.key">key</a></code> | <code>java.lang.String</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTags.property.value">value</a></code> | <code>java.lang.String</code> | The tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/fms_applications_list#key FmsApplicationsList#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/fms_applications_list#value FmsApplicationsList#value}

---

## Classes <a name="Classes" id="Classes"></a>

### FmsApplicationsListAppsListStructList <a name="FmsApplicationsListAppsListStructList" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructList.Initializer"></a>

```java
import io.cdktn.providers.awscc.fms_applications_list.FmsApplicationsListAppsListStructList;

new FmsApplicationsListAppsListStructList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructList.get"></a>

```java
public FmsApplicationsListAppsListStructOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStruct">FmsApplicationsListAppsListStruct</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructList.property.internalValue"></a>

```java
public IResolvable|java.util.List<FmsApplicationsListAppsListStruct> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStruct">FmsApplicationsListAppsListStruct</a>>

---


### FmsApplicationsListAppsListStructOutputReference <a name="FmsApplicationsListAppsListStructOutputReference" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.fms_applications_list.FmsApplicationsListAppsListStructOutputReference;

new FmsApplicationsListAppsListStructOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.property.appNameInput">appNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.property.appName">appName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStruct">FmsApplicationsListAppsListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `appNameInput`<sup>Optional</sup> <a name="appNameInput" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.property.appNameInput"></a>

```java
public java.lang.String getAppNameInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `appName`<sup>Required</sup> <a name="appName" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.property.appName"></a>

```java
public java.lang.String getAppName();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.property.internalValue"></a>

```java
public IResolvable|FmsApplicationsListAppsListStruct getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStruct">FmsApplicationsListAppsListStruct</a>

---


### FmsApplicationsListTagsList <a name="FmsApplicationsListTagsList" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.fms_applications_list.FmsApplicationsListTagsList;

new FmsApplicationsListTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsList.get"></a>

```java
public FmsApplicationsListTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTags">FmsApplicationsListTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<FmsApplicationsListTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTags">FmsApplicationsListTags</a>>

---


### FmsApplicationsListTagsOutputReference <a name="FmsApplicationsListTagsOutputReference" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.fms_applications_list.FmsApplicationsListTagsOutputReference;

new FmsApplicationsListTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTags">FmsApplicationsListTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|FmsApplicationsListTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTags">FmsApplicationsListTags</a>

---



