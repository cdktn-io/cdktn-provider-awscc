# `appsyncApi` Submodule <a name="`appsyncApi` Submodule" id="@cdktn/provider-awscc.appsyncApi"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppsyncApi <a name="AppsyncApi" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api awscc_appsync_api}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_api.AppsyncApi;

AppsyncApi.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .eventConfig(AppsyncApiEventConfig)
//  .ownerContact(java.lang.String)
//  .tags(IResolvable|java.util.List<AppsyncApiTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the AppSync API. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.Initializer.parameter.eventConfig">eventConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfig">AppsyncApiEventConfig</a></code> | The configuration for an Event Api. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.Initializer.parameter.ownerContact">ownerContact</a></code> | <code>java.lang.String</code> | The owner contact information for an API resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTags">AppsyncApiTags</a>></code> | An arbitrary set of tags (key-value pairs) for this AppSync API. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the AppSync API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#name AppsyncApi#name}

---

##### `eventConfig`<sup>Optional</sup> <a name="eventConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.Initializer.parameter.eventConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfig">AppsyncApiEventConfig</a>

The configuration for an Event Api.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#event_config AppsyncApi#event_config}

---

##### `ownerContact`<sup>Optional</sup> <a name="ownerContact" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.Initializer.parameter.ownerContact"></a>

- *Type:* java.lang.String

The owner contact information for an API resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#owner_contact AppsyncApi#owner_contact}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTags">AppsyncApiTags</a>>

An arbitrary set of tags (key-value pairs) for this AppSync API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#tags AppsyncApi#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.putEventConfig">putEventConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.resetEventConfig">resetEventConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.resetOwnerContact">resetOwnerContact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEventConfig` <a name="putEventConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.putEventConfig"></a>

```java
public void putEventConfig(AppsyncApiEventConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.putEventConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfig">AppsyncApiEventConfig</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<AppsyncApiTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTags">AppsyncApiTags</a>>

---

##### `resetEventConfig` <a name="resetEventConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.resetEventConfig"></a>

```java
public void resetEventConfig()
```

##### `resetOwnerContact` <a name="resetOwnerContact" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.resetOwnerContact"></a>

```java
public void resetOwnerContact()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AppsyncApi resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.isConstruct"></a>

```java
import io.cdktn.providers.awscc.appsync_api.AppsyncApi;

AppsyncApi.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.appsync_api.AppsyncApi;

AppsyncApi.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.appsync_api.AppsyncApi;

AppsyncApi.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.appsync_api.AppsyncApi;

AppsyncApi.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AppsyncApi.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a AppsyncApi resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AppsyncApi to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AppsyncApi that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the AppsyncApi to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.apiArn">apiArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.apiId">apiId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.dns">dns</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference">AppsyncApiDnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.eventConfig">eventConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference">AppsyncApiEventConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList">AppsyncApiTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.eventConfigInput">eventConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfig">AppsyncApiEventConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.ownerContactInput">ownerContactInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTags">AppsyncApiTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.ownerContact">ownerContact</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `apiArn`<sup>Required</sup> <a name="apiArn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.apiArn"></a>

```java
public java.lang.String getApiArn();
```

- *Type:* java.lang.String

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.apiId"></a>

```java
public java.lang.String getApiId();
```

- *Type:* java.lang.String

---

##### `dns`<sup>Required</sup> <a name="dns" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.dns"></a>

```java
public AppsyncApiDnsOutputReference getDns();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference">AppsyncApiDnsOutputReference</a>

---

##### `eventConfig`<sup>Required</sup> <a name="eventConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.eventConfig"></a>

```java
public AppsyncApiEventConfigOutputReference getEventConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference">AppsyncApiEventConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.tags"></a>

```java
public AppsyncApiTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList">AppsyncApiTagsList</a>

---

##### `eventConfigInput`<sup>Optional</sup> <a name="eventConfigInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.eventConfigInput"></a>

```java
public IResolvable|AppsyncApiEventConfig getEventConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfig">AppsyncApiEventConfig</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `ownerContactInput`<sup>Optional</sup> <a name="ownerContactInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.ownerContactInput"></a>

```java
public java.lang.String getOwnerContactInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.tagsInput"></a>

```java
public IResolvable|java.util.List<AppsyncApiTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTags">AppsyncApiTags</a>>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `ownerContact`<sup>Required</sup> <a name="ownerContact" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.ownerContact"></a>

```java
public java.lang.String getOwnerContact();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AppsyncApiConfig <a name="AppsyncApiConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_api.AppsyncApiConfig;

AppsyncApiConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .eventConfig(AppsyncApiEventConfig)
//  .ownerContact(java.lang.String)
//  .tags(IResolvable|java.util.List<AppsyncApiTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the AppSync API. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.eventConfig">eventConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfig">AppsyncApiEventConfig</a></code> | The configuration for an Event Api. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.ownerContact">ownerContact</a></code> | <code>java.lang.String</code> | The owner contact information for an API resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTags">AppsyncApiTags</a>></code> | An arbitrary set of tags (key-value pairs) for this AppSync API. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the AppSync API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#name AppsyncApi#name}

---

##### `eventConfig`<sup>Optional</sup> <a name="eventConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.eventConfig"></a>

```java
public AppsyncApiEventConfig getEventConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfig">AppsyncApiEventConfig</a>

The configuration for an Event Api.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#event_config AppsyncApi#event_config}

---

##### `ownerContact`<sup>Optional</sup> <a name="ownerContact" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.ownerContact"></a>

```java
public java.lang.String getOwnerContact();
```

- *Type:* java.lang.String

The owner contact information for an API resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#owner_contact AppsyncApi#owner_contact}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.tags"></a>

```java
public IResolvable|java.util.List<AppsyncApiTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTags">AppsyncApiTags</a>>

An arbitrary set of tags (key-value pairs) for this AppSync API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#tags AppsyncApi#tags}

---

### AppsyncApiDns <a name="AppsyncApiDns" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDns.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_api.AppsyncApiDns;

AppsyncApiDns.builder()
    .build();
```


### AppsyncApiEventConfig <a name="AppsyncApiEventConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_api.AppsyncApiEventConfig;

AppsyncApiEventConfig.builder()
//  .authProviders(IResolvable|java.util.List<AppsyncApiEventConfigAuthProviders>)
//  .connectionAuthModes(IResolvable|java.util.List<AppsyncApiEventConfigConnectionAuthModes>)
//  .defaultPublishAuthModes(IResolvable|java.util.List<AppsyncApiEventConfigDefaultPublishAuthModes>)
//  .defaultSubscribeAuthModes(IResolvable|java.util.List<AppsyncApiEventConfigDefaultSubscribeAuthModes>)
//  .logConfig(AppsyncApiEventConfigLogConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfig.property.authProviders">authProviders</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProviders">AppsyncApiEventConfigAuthProviders</a>></code> | A list of auth providers for the AppSync API. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfig.property.connectionAuthModes">connectionAuthModes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModes">AppsyncApiEventConfigConnectionAuthModes</a>></code> | A list of auth modes for the AppSync API. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfig.property.defaultPublishAuthModes">defaultPublishAuthModes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModes">AppsyncApiEventConfigDefaultPublishAuthModes</a>></code> | A list of auth modes for the AppSync API. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfig.property.defaultSubscribeAuthModes">defaultSubscribeAuthModes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModes">AppsyncApiEventConfigDefaultSubscribeAuthModes</a>></code> | A list of auth modes for the AppSync API. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfig.property.logConfig">logConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfig">AppsyncApiEventConfigLogConfig</a></code> | The log config for the AppSync API. |

---

##### `authProviders`<sup>Optional</sup> <a name="authProviders" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfig.property.authProviders"></a>

```java
public IResolvable|java.util.List<AppsyncApiEventConfigAuthProviders> getAuthProviders();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProviders">AppsyncApiEventConfigAuthProviders</a>>

A list of auth providers for the AppSync API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#auth_providers AppsyncApi#auth_providers}

---

##### `connectionAuthModes`<sup>Optional</sup> <a name="connectionAuthModes" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfig.property.connectionAuthModes"></a>

```java
public IResolvable|java.util.List<AppsyncApiEventConfigConnectionAuthModes> getConnectionAuthModes();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModes">AppsyncApiEventConfigConnectionAuthModes</a>>

A list of auth modes for the AppSync API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#connection_auth_modes AppsyncApi#connection_auth_modes}

---

##### `defaultPublishAuthModes`<sup>Optional</sup> <a name="defaultPublishAuthModes" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfig.property.defaultPublishAuthModes"></a>

```java
public IResolvable|java.util.List<AppsyncApiEventConfigDefaultPublishAuthModes> getDefaultPublishAuthModes();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModes">AppsyncApiEventConfigDefaultPublishAuthModes</a>>

A list of auth modes for the AppSync API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#default_publish_auth_modes AppsyncApi#default_publish_auth_modes}

---

##### `defaultSubscribeAuthModes`<sup>Optional</sup> <a name="defaultSubscribeAuthModes" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfig.property.defaultSubscribeAuthModes"></a>

```java
public IResolvable|java.util.List<AppsyncApiEventConfigDefaultSubscribeAuthModes> getDefaultSubscribeAuthModes();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModes">AppsyncApiEventConfigDefaultSubscribeAuthModes</a>>

A list of auth modes for the AppSync API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#default_subscribe_auth_modes AppsyncApi#default_subscribe_auth_modes}

---

##### `logConfig`<sup>Optional</sup> <a name="logConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfig.property.logConfig"></a>

```java
public AppsyncApiEventConfigLogConfig getLogConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfig">AppsyncApiEventConfigLogConfig</a>

The log config for the AppSync API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#log_config AppsyncApi#log_config}

---

### AppsyncApiEventConfigAuthProviders <a name="AppsyncApiEventConfigAuthProviders" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProviders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProviders.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_api.AppsyncApiEventConfigAuthProviders;

AppsyncApiEventConfigAuthProviders.builder()
//  .authType(java.lang.String)
//  .cognitoConfig(AppsyncApiEventConfigAuthProvidersCognitoConfig)
//  .lambdaAuthorizerConfig(AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig)
//  .openIdConnectConfig(AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProviders.property.authType">authType</a></code> | <code>java.lang.String</code> | Security configuration for your AppSync API. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProviders.property.cognitoConfig">cognitoConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfig">AppsyncApiEventConfigAuthProvidersCognitoConfig</a></code> | Optional authorization configuration for using Amazon Cognito user pools with your API endpoint. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProviders.property.lambdaAuthorizerConfig">lambdaAuthorizerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig">AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig</a></code> | A LambdaAuthorizerConfig holds configuration on how to authorize AWS AppSync API access when using the AWS_LAMBDA authorizer mode. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProviders.property.openIdConnectConfig">openIdConnectConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig">AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig</a></code> | The OpenID Connect configuration. |

---

##### `authType`<sup>Optional</sup> <a name="authType" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProviders.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

Security configuration for your AppSync API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#auth_type AppsyncApi#auth_type}

---

##### `cognitoConfig`<sup>Optional</sup> <a name="cognitoConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProviders.property.cognitoConfig"></a>

```java
public AppsyncApiEventConfigAuthProvidersCognitoConfig getCognitoConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfig">AppsyncApiEventConfigAuthProvidersCognitoConfig</a>

Optional authorization configuration for using Amazon Cognito user pools with your API endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#cognito_config AppsyncApi#cognito_config}

---

##### `lambdaAuthorizerConfig`<sup>Optional</sup> <a name="lambdaAuthorizerConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProviders.property.lambdaAuthorizerConfig"></a>

```java
public AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig getLambdaAuthorizerConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig">AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig</a>

A LambdaAuthorizerConfig holds configuration on how to authorize AWS AppSync API access when using the AWS_LAMBDA authorizer mode.

Be aware that an AWS AppSync API may have only one Lambda authorizer configured at a time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#lambda_authorizer_config AppsyncApi#lambda_authorizer_config}

---

##### `openIdConnectConfig`<sup>Optional</sup> <a name="openIdConnectConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProviders.property.openIdConnectConfig"></a>

```java
public AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig getOpenIdConnectConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig">AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig</a>

The OpenID Connect configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#open_id_connect_config AppsyncApi#open_id_connect_config}

---

### AppsyncApiEventConfigAuthProvidersCognitoConfig <a name="AppsyncApiEventConfigAuthProvidersCognitoConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_api.AppsyncApiEventConfigAuthProvidersCognitoConfig;

AppsyncApiEventConfigAuthProvidersCognitoConfig.builder()
//  .appIdClientRegex(java.lang.String)
//  .awsRegion(java.lang.String)
//  .userPoolId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfig.property.appIdClientRegex">appIdClientRegex</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#app_id_client_regex AppsyncApi#app_id_client_regex}. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfig.property.awsRegion">awsRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#aws_region AppsyncApi#aws_region}. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfig.property.userPoolId">userPoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#user_pool_id AppsyncApi#user_pool_id}. |

---

##### `appIdClientRegex`<sup>Optional</sup> <a name="appIdClientRegex" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfig.property.appIdClientRegex"></a>

```java
public java.lang.String getAppIdClientRegex();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#app_id_client_regex AppsyncApi#app_id_client_regex}.

---

##### `awsRegion`<sup>Optional</sup> <a name="awsRegion" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfig.property.awsRegion"></a>

```java
public java.lang.String getAwsRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#aws_region AppsyncApi#aws_region}.

---

##### `userPoolId`<sup>Optional</sup> <a name="userPoolId" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfig.property.userPoolId"></a>

```java
public java.lang.String getUserPoolId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#user_pool_id AppsyncApi#user_pool_id}.

---

### AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig <a name="AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_api.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig;

AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig.builder()
//  .authorizerResultTtlInSeconds(java.lang.Number)
//  .authorizerUri(java.lang.String)
//  .identityValidationExpression(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig.property.authorizerResultTtlInSeconds">authorizerResultTtlInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#authorizer_result_ttl_in_seconds AppsyncApi#authorizer_result_ttl_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig.property.authorizerUri">authorizerUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#authorizer_uri AppsyncApi#authorizer_uri}. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig.property.identityValidationExpression">identityValidationExpression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#identity_validation_expression AppsyncApi#identity_validation_expression}. |

---

##### `authorizerResultTtlInSeconds`<sup>Optional</sup> <a name="authorizerResultTtlInSeconds" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig.property.authorizerResultTtlInSeconds"></a>

```java
public java.lang.Number getAuthorizerResultTtlInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#authorizer_result_ttl_in_seconds AppsyncApi#authorizer_result_ttl_in_seconds}.

---

##### `authorizerUri`<sup>Optional</sup> <a name="authorizerUri" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig.property.authorizerUri"></a>

```java
public java.lang.String getAuthorizerUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#authorizer_uri AppsyncApi#authorizer_uri}.

---

##### `identityValidationExpression`<sup>Optional</sup> <a name="identityValidationExpression" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig.property.identityValidationExpression"></a>

```java
public java.lang.String getIdentityValidationExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#identity_validation_expression AppsyncApi#identity_validation_expression}.

---

### AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig <a name="AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_api.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig;

AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig.builder()
//  .authTtl(java.lang.Number)
//  .clientId(java.lang.String)
//  .iatTtl(java.lang.Number)
//  .issuer(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig.property.authTtl">authTtl</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#auth_ttl AppsyncApi#auth_ttl}. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig.property.clientId">clientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#client_id AppsyncApi#client_id}. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig.property.iatTtl">iatTtl</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#iat_ttl AppsyncApi#iat_ttl}. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig.property.issuer">issuer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#issuer AppsyncApi#issuer}. |

---

##### `authTtl`<sup>Optional</sup> <a name="authTtl" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig.property.authTtl"></a>

```java
public java.lang.Number getAuthTtl();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#auth_ttl AppsyncApi#auth_ttl}.

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#client_id AppsyncApi#client_id}.

---

##### `iatTtl`<sup>Optional</sup> <a name="iatTtl" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig.property.iatTtl"></a>

```java
public java.lang.Number getIatTtl();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#iat_ttl AppsyncApi#iat_ttl}.

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#issuer AppsyncApi#issuer}.

---

### AppsyncApiEventConfigConnectionAuthModes <a name="AppsyncApiEventConfigConnectionAuthModes" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModes.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_api.AppsyncApiEventConfigConnectionAuthModes;

AppsyncApiEventConfigConnectionAuthModes.builder()
//  .authType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModes.property.authType">authType</a></code> | <code>java.lang.String</code> | Security configuration for your AppSync API. |

---

##### `authType`<sup>Optional</sup> <a name="authType" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModes.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

Security configuration for your AppSync API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#auth_type AppsyncApi#auth_type}

---

### AppsyncApiEventConfigDefaultPublishAuthModes <a name="AppsyncApiEventConfigDefaultPublishAuthModes" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModes.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_api.AppsyncApiEventConfigDefaultPublishAuthModes;

AppsyncApiEventConfigDefaultPublishAuthModes.builder()
//  .authType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModes.property.authType">authType</a></code> | <code>java.lang.String</code> | Security configuration for your AppSync API. |

---

##### `authType`<sup>Optional</sup> <a name="authType" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModes.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

Security configuration for your AppSync API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#auth_type AppsyncApi#auth_type}

---

### AppsyncApiEventConfigDefaultSubscribeAuthModes <a name="AppsyncApiEventConfigDefaultSubscribeAuthModes" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModes.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_api.AppsyncApiEventConfigDefaultSubscribeAuthModes;

AppsyncApiEventConfigDefaultSubscribeAuthModes.builder()
//  .authType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModes.property.authType">authType</a></code> | <code>java.lang.String</code> | Security configuration for your AppSync API. |

---

##### `authType`<sup>Optional</sup> <a name="authType" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModes.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

Security configuration for your AppSync API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#auth_type AppsyncApi#auth_type}

---

### AppsyncApiEventConfigLogConfig <a name="AppsyncApiEventConfigLogConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_api.AppsyncApiEventConfigLogConfig;

AppsyncApiEventConfigLogConfig.builder()
//  .cloudwatchLogsRoleArn(java.lang.String)
//  .logLevel(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfig.property.cloudwatchLogsRoleArn">cloudwatchLogsRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#cloudwatch_logs_role_arn AppsyncApi#cloudwatch_logs_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfig.property.logLevel">logLevel</a></code> | <code>java.lang.String</code> | Logging level for the AppSync API. |

---

##### `cloudwatchLogsRoleArn`<sup>Optional</sup> <a name="cloudwatchLogsRoleArn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfig.property.cloudwatchLogsRoleArn"></a>

```java
public java.lang.String getCloudwatchLogsRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#cloudwatch_logs_role_arn AppsyncApi#cloudwatch_logs_role_arn}.

---

##### `logLevel`<sup>Optional</sup> <a name="logLevel" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfig.property.logLevel"></a>

```java
public java.lang.String getLogLevel();
```

- *Type:* java.lang.String

Logging level for the AppSync API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#log_level AppsyncApi#log_level}

---

### AppsyncApiTags <a name="AppsyncApiTags" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_api.AppsyncApiTags;

AppsyncApiTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTags.property.key">key</a></code> | <code>java.lang.String</code> | A string used to identify this tag. You can specify a maximum of 128 characters for a tag key. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTags.property.value">value</a></code> | <code>java.lang.String</code> | A string containing the value for this tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

A string used to identify this tag. You can specify a maximum of 128 characters for a tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#key AppsyncApi#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

A string containing the value for this tag.

You can specify a maximum of 256 characters for a tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#value AppsyncApi#value}

---

## Classes <a name="Classes" id="Classes"></a>

### AppsyncApiDnsOutputReference <a name="AppsyncApiDnsOutputReference" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_api.AppsyncApiDnsOutputReference;

new AppsyncApiDnsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.property.http">http</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.property.realtime">realtime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDns">AppsyncApiDns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `http`<sup>Required</sup> <a name="http" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.property.http"></a>

```java
public java.lang.String getHttp();
```

- *Type:* java.lang.String

---

##### `realtime`<sup>Required</sup> <a name="realtime" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.property.realtime"></a>

```java
public java.lang.String getRealtime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.property.internalValue"></a>

```java
public AppsyncApiDns getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDns">AppsyncApiDns</a>

---


### AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference <a name="AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_api.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference;

new AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.resetAppIdClientRegex">resetAppIdClientRegex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.resetAwsRegion">resetAwsRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.resetUserPoolId">resetUserPoolId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAppIdClientRegex` <a name="resetAppIdClientRegex" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.resetAppIdClientRegex"></a>

```java
public void resetAppIdClientRegex()
```

##### `resetAwsRegion` <a name="resetAwsRegion" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.resetAwsRegion"></a>

```java
public void resetAwsRegion()
```

##### `resetUserPoolId` <a name="resetUserPoolId" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.resetUserPoolId"></a>

```java
public void resetUserPoolId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.property.appIdClientRegexInput">appIdClientRegexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.property.awsRegionInput">awsRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.property.userPoolIdInput">userPoolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.property.appIdClientRegex">appIdClientRegex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.property.awsRegion">awsRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.property.userPoolId">userPoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfig">AppsyncApiEventConfigAuthProvidersCognitoConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `appIdClientRegexInput`<sup>Optional</sup> <a name="appIdClientRegexInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.property.appIdClientRegexInput"></a>

```java
public java.lang.String getAppIdClientRegexInput();
```

- *Type:* java.lang.String

---

##### `awsRegionInput`<sup>Optional</sup> <a name="awsRegionInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.property.awsRegionInput"></a>

```java
public java.lang.String getAwsRegionInput();
```

- *Type:* java.lang.String

---

##### `userPoolIdInput`<sup>Optional</sup> <a name="userPoolIdInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.property.userPoolIdInput"></a>

```java
public java.lang.String getUserPoolIdInput();
```

- *Type:* java.lang.String

---

##### `appIdClientRegex`<sup>Required</sup> <a name="appIdClientRegex" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.property.appIdClientRegex"></a>

```java
public java.lang.String getAppIdClientRegex();
```

- *Type:* java.lang.String

---

##### `awsRegion`<sup>Required</sup> <a name="awsRegion" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.property.awsRegion"></a>

```java
public java.lang.String getAwsRegion();
```

- *Type:* java.lang.String

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.property.userPoolId"></a>

```java
public java.lang.String getUserPoolId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|AppsyncApiEventConfigAuthProvidersCognitoConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfig">AppsyncApiEventConfigAuthProvidersCognitoConfig</a>

---


### AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference <a name="AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_api.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference;

new AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.resetAuthorizerResultTtlInSeconds">resetAuthorizerResultTtlInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.resetAuthorizerUri">resetAuthorizerUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.resetIdentityValidationExpression">resetIdentityValidationExpression</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthorizerResultTtlInSeconds` <a name="resetAuthorizerResultTtlInSeconds" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.resetAuthorizerResultTtlInSeconds"></a>

```java
public void resetAuthorizerResultTtlInSeconds()
```

##### `resetAuthorizerUri` <a name="resetAuthorizerUri" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.resetAuthorizerUri"></a>

```java
public void resetAuthorizerUri()
```

##### `resetIdentityValidationExpression` <a name="resetIdentityValidationExpression" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.resetIdentityValidationExpression"></a>

```java
public void resetIdentityValidationExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSecondsInput">authorizerResultTtlInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.property.authorizerUriInput">authorizerUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.property.identityValidationExpressionInput">identityValidationExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSeconds">authorizerResultTtlInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.property.authorizerUri">authorizerUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.property.identityValidationExpression">identityValidationExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig">AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorizerResultTtlInSecondsInput`<sup>Optional</sup> <a name="authorizerResultTtlInSecondsInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSecondsInput"></a>

```java
public java.lang.Number getAuthorizerResultTtlInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `authorizerUriInput`<sup>Optional</sup> <a name="authorizerUriInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.property.authorizerUriInput"></a>

```java
public java.lang.String getAuthorizerUriInput();
```

- *Type:* java.lang.String

---

##### `identityValidationExpressionInput`<sup>Optional</sup> <a name="identityValidationExpressionInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.property.identityValidationExpressionInput"></a>

```java
public java.lang.String getIdentityValidationExpressionInput();
```

- *Type:* java.lang.String

---

##### `authorizerResultTtlInSeconds`<sup>Required</sup> <a name="authorizerResultTtlInSeconds" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSeconds"></a>

```java
public java.lang.Number getAuthorizerResultTtlInSeconds();
```

- *Type:* java.lang.Number

---

##### `authorizerUri`<sup>Required</sup> <a name="authorizerUri" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.property.authorizerUri"></a>

```java
public java.lang.String getAuthorizerUri();
```

- *Type:* java.lang.String

---

##### `identityValidationExpression`<sup>Required</sup> <a name="identityValidationExpression" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.property.identityValidationExpression"></a>

```java
public java.lang.String getIdentityValidationExpression();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig">AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig</a>

---


### AppsyncApiEventConfigAuthProvidersList <a name="AppsyncApiEventConfigAuthProvidersList" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_api.AppsyncApiEventConfigAuthProvidersList;

new AppsyncApiEventConfigAuthProvidersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.get"></a>

```java
public AppsyncApiEventConfigAuthProvidersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProviders">AppsyncApiEventConfigAuthProviders</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AppsyncApiEventConfigAuthProviders> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProviders">AppsyncApiEventConfigAuthProviders</a>>

---


### AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference <a name="AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_api.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference;

new AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.resetAuthTtl">resetAuthTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.resetIatTtl">resetIatTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.resetIssuer">resetIssuer</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthTtl` <a name="resetAuthTtl" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.resetAuthTtl"></a>

```java
public void resetAuthTtl()
```

##### `resetClientId` <a name="resetClientId" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.resetClientId"></a>

```java
public void resetClientId()
```

##### `resetIatTtl` <a name="resetIatTtl" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.resetIatTtl"></a>

```java
public void resetIatTtl()
```

##### `resetIssuer` <a name="resetIssuer" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.resetIssuer"></a>

```java
public void resetIssuer()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.authTtlInput">authTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.iatTtlInput">iatTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.issuerInput">issuerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.authTtl">authTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.iatTtl">iatTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.issuer">issuer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig">AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authTtlInput`<sup>Optional</sup> <a name="authTtlInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.authTtlInput"></a>

```java
public java.lang.Number getAuthTtlInput();
```

- *Type:* java.lang.Number

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `iatTtlInput`<sup>Optional</sup> <a name="iatTtlInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.iatTtlInput"></a>

```java
public java.lang.Number getIatTtlInput();
```

- *Type:* java.lang.Number

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.issuerInput"></a>

```java
public java.lang.String getIssuerInput();
```

- *Type:* java.lang.String

---

##### `authTtl`<sup>Required</sup> <a name="authTtl" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.authTtl"></a>

```java
public java.lang.Number getAuthTtl();
```

- *Type:* java.lang.Number

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `iatTtl`<sup>Required</sup> <a name="iatTtl" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.iatTtl"></a>

```java
public java.lang.Number getIatTtl();
```

- *Type:* java.lang.Number

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig">AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig</a>

---


### AppsyncApiEventConfigAuthProvidersOutputReference <a name="AppsyncApiEventConfigAuthProvidersOutputReference" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_api.AppsyncApiEventConfigAuthProvidersOutputReference;

new AppsyncApiEventConfigAuthProvidersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.putCognitoConfig">putCognitoConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.putLambdaAuthorizerConfig">putLambdaAuthorizerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.putOpenIdConnectConfig">putOpenIdConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.resetAuthType">resetAuthType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.resetCognitoConfig">resetCognitoConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.resetLambdaAuthorizerConfig">resetLambdaAuthorizerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.resetOpenIdConnectConfig">resetOpenIdConnectConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCognitoConfig` <a name="putCognitoConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.putCognitoConfig"></a>

```java
public void putCognitoConfig(AppsyncApiEventConfigAuthProvidersCognitoConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.putCognitoConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfig">AppsyncApiEventConfigAuthProvidersCognitoConfig</a>

---

##### `putLambdaAuthorizerConfig` <a name="putLambdaAuthorizerConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.putLambdaAuthorizerConfig"></a>

```java
public void putLambdaAuthorizerConfig(AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.putLambdaAuthorizerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig">AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig</a>

---

##### `putOpenIdConnectConfig` <a name="putOpenIdConnectConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.putOpenIdConnectConfig"></a>

```java
public void putOpenIdConnectConfig(AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.putOpenIdConnectConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig">AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig</a>

---

##### `resetAuthType` <a name="resetAuthType" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.resetAuthType"></a>

```java
public void resetAuthType()
```

##### `resetCognitoConfig` <a name="resetCognitoConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.resetCognitoConfig"></a>

```java
public void resetCognitoConfig()
```

##### `resetLambdaAuthorizerConfig` <a name="resetLambdaAuthorizerConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.resetLambdaAuthorizerConfig"></a>

```java
public void resetLambdaAuthorizerConfig()
```

##### `resetOpenIdConnectConfig` <a name="resetOpenIdConnectConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.resetOpenIdConnectConfig"></a>

```java
public void resetOpenIdConnectConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.cognitoConfig">cognitoConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference">AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.lambdaAuthorizerConfig">lambdaAuthorizerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference">AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.openIdConnectConfig">openIdConnectConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference">AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.authTypeInput">authTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.cognitoConfigInput">cognitoConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfig">AppsyncApiEventConfigAuthProvidersCognitoConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.lambdaAuthorizerConfigInput">lambdaAuthorizerConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig">AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.openIdConnectConfigInput">openIdConnectConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig">AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.authType">authType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProviders">AppsyncApiEventConfigAuthProviders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cognitoConfig`<sup>Required</sup> <a name="cognitoConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.cognitoConfig"></a>

```java
public AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference getCognitoConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference">AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference</a>

---

##### `lambdaAuthorizerConfig`<sup>Required</sup> <a name="lambdaAuthorizerConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.lambdaAuthorizerConfig"></a>

```java
public AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference getLambdaAuthorizerConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference">AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference</a>

---

##### `openIdConnectConfig`<sup>Required</sup> <a name="openIdConnectConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.openIdConnectConfig"></a>

```java
public AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference getOpenIdConnectConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference">AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference</a>

---

##### `authTypeInput`<sup>Optional</sup> <a name="authTypeInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.authTypeInput"></a>

```java
public java.lang.String getAuthTypeInput();
```

- *Type:* java.lang.String

---

##### `cognitoConfigInput`<sup>Optional</sup> <a name="cognitoConfigInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.cognitoConfigInput"></a>

```java
public IResolvable|AppsyncApiEventConfigAuthProvidersCognitoConfig getCognitoConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfig">AppsyncApiEventConfigAuthProvidersCognitoConfig</a>

---

##### `lambdaAuthorizerConfigInput`<sup>Optional</sup> <a name="lambdaAuthorizerConfigInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.lambdaAuthorizerConfigInput"></a>

```java
public IResolvable|AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig getLambdaAuthorizerConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig">AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig</a>

---

##### `openIdConnectConfigInput`<sup>Optional</sup> <a name="openIdConnectConfigInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.openIdConnectConfigInput"></a>

```java
public IResolvable|AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig getOpenIdConnectConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig">AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig</a>

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.internalValue"></a>

```java
public IResolvable|AppsyncApiEventConfigAuthProviders getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProviders">AppsyncApiEventConfigAuthProviders</a>

---


### AppsyncApiEventConfigConnectionAuthModesList <a name="AppsyncApiEventConfigConnectionAuthModesList" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_api.AppsyncApiEventConfigConnectionAuthModesList;

new AppsyncApiEventConfigConnectionAuthModesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.get"></a>

```java
public AppsyncApiEventConfigConnectionAuthModesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModes">AppsyncApiEventConfigConnectionAuthModes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AppsyncApiEventConfigConnectionAuthModes> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModes">AppsyncApiEventConfigConnectionAuthModes</a>>

---


### AppsyncApiEventConfigConnectionAuthModesOutputReference <a name="AppsyncApiEventConfigConnectionAuthModesOutputReference" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_api.AppsyncApiEventConfigConnectionAuthModesOutputReference;

new AppsyncApiEventConfigConnectionAuthModesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.resetAuthType">resetAuthType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthType` <a name="resetAuthType" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.resetAuthType"></a>

```java
public void resetAuthType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.property.authTypeInput">authTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.property.authType">authType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModes">AppsyncApiEventConfigConnectionAuthModes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authTypeInput`<sup>Optional</sup> <a name="authTypeInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.property.authTypeInput"></a>

```java
public java.lang.String getAuthTypeInput();
```

- *Type:* java.lang.String

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.property.internalValue"></a>

```java
public IResolvable|AppsyncApiEventConfigConnectionAuthModes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModes">AppsyncApiEventConfigConnectionAuthModes</a>

---


### AppsyncApiEventConfigDefaultPublishAuthModesList <a name="AppsyncApiEventConfigDefaultPublishAuthModesList" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_api.AppsyncApiEventConfigDefaultPublishAuthModesList;

new AppsyncApiEventConfigDefaultPublishAuthModesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.get"></a>

```java
public AppsyncApiEventConfigDefaultPublishAuthModesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModes">AppsyncApiEventConfigDefaultPublishAuthModes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AppsyncApiEventConfigDefaultPublishAuthModes> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModes">AppsyncApiEventConfigDefaultPublishAuthModes</a>>

---


### AppsyncApiEventConfigDefaultPublishAuthModesOutputReference <a name="AppsyncApiEventConfigDefaultPublishAuthModesOutputReference" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_api.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference;

new AppsyncApiEventConfigDefaultPublishAuthModesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.resetAuthType">resetAuthType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthType` <a name="resetAuthType" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.resetAuthType"></a>

```java
public void resetAuthType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.property.authTypeInput">authTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.property.authType">authType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModes">AppsyncApiEventConfigDefaultPublishAuthModes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authTypeInput`<sup>Optional</sup> <a name="authTypeInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.property.authTypeInput"></a>

```java
public java.lang.String getAuthTypeInput();
```

- *Type:* java.lang.String

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.property.internalValue"></a>

```java
public IResolvable|AppsyncApiEventConfigDefaultPublishAuthModes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModes">AppsyncApiEventConfigDefaultPublishAuthModes</a>

---


### AppsyncApiEventConfigDefaultSubscribeAuthModesList <a name="AppsyncApiEventConfigDefaultSubscribeAuthModesList" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_api.AppsyncApiEventConfigDefaultSubscribeAuthModesList;

new AppsyncApiEventConfigDefaultSubscribeAuthModesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.get"></a>

```java
public AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModes">AppsyncApiEventConfigDefaultSubscribeAuthModes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AppsyncApiEventConfigDefaultSubscribeAuthModes> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModes">AppsyncApiEventConfigDefaultSubscribeAuthModes</a>>

---


### AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference <a name="AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_api.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference;

new AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.resetAuthType">resetAuthType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthType` <a name="resetAuthType" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.resetAuthType"></a>

```java
public void resetAuthType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.property.authTypeInput">authTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.property.authType">authType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModes">AppsyncApiEventConfigDefaultSubscribeAuthModes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authTypeInput`<sup>Optional</sup> <a name="authTypeInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.property.authTypeInput"></a>

```java
public java.lang.String getAuthTypeInput();
```

- *Type:* java.lang.String

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.property.internalValue"></a>

```java
public IResolvable|AppsyncApiEventConfigDefaultSubscribeAuthModes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModes">AppsyncApiEventConfigDefaultSubscribeAuthModes</a>

---


### AppsyncApiEventConfigLogConfigOutputReference <a name="AppsyncApiEventConfigLogConfigOutputReference" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_api.AppsyncApiEventConfigLogConfigOutputReference;

new AppsyncApiEventConfigLogConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.resetCloudwatchLogsRoleArn">resetCloudwatchLogsRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.resetLogLevel">resetLogLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCloudwatchLogsRoleArn` <a name="resetCloudwatchLogsRoleArn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.resetCloudwatchLogsRoleArn"></a>

```java
public void resetCloudwatchLogsRoleArn()
```

##### `resetLogLevel` <a name="resetLogLevel" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.resetLogLevel"></a>

```java
public void resetLogLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.cloudwatchLogsRoleArnInput">cloudwatchLogsRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.logLevelInput">logLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.cloudwatchLogsRoleArn">cloudwatchLogsRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.logLevel">logLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfig">AppsyncApiEventConfigLogConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudwatchLogsRoleArnInput`<sup>Optional</sup> <a name="cloudwatchLogsRoleArnInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.cloudwatchLogsRoleArnInput"></a>

```java
public java.lang.String getCloudwatchLogsRoleArnInput();
```

- *Type:* java.lang.String

---

##### `logLevelInput`<sup>Optional</sup> <a name="logLevelInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.logLevelInput"></a>

```java
public java.lang.String getLogLevelInput();
```

- *Type:* java.lang.String

---

##### `cloudwatchLogsRoleArn`<sup>Required</sup> <a name="cloudwatchLogsRoleArn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.cloudwatchLogsRoleArn"></a>

```java
public java.lang.String getCloudwatchLogsRoleArn();
```

- *Type:* java.lang.String

---

##### `logLevel`<sup>Required</sup> <a name="logLevel" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.logLevel"></a>

```java
public java.lang.String getLogLevel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|AppsyncApiEventConfigLogConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfig">AppsyncApiEventConfigLogConfig</a>

---


### AppsyncApiEventConfigOutputReference <a name="AppsyncApiEventConfigOutputReference" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_api.AppsyncApiEventConfigOutputReference;

new AppsyncApiEventConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.putAuthProviders">putAuthProviders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.putConnectionAuthModes">putConnectionAuthModes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.putDefaultPublishAuthModes">putDefaultPublishAuthModes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.putDefaultSubscribeAuthModes">putDefaultSubscribeAuthModes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.putLogConfig">putLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.resetAuthProviders">resetAuthProviders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.resetConnectionAuthModes">resetConnectionAuthModes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.resetDefaultPublishAuthModes">resetDefaultPublishAuthModes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.resetDefaultSubscribeAuthModes">resetDefaultSubscribeAuthModes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.resetLogConfig">resetLogConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthProviders` <a name="putAuthProviders" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.putAuthProviders"></a>

```java
public void putAuthProviders(IResolvable|java.util.List<AppsyncApiEventConfigAuthProviders> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.putAuthProviders.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProviders">AppsyncApiEventConfigAuthProviders</a>>

---

##### `putConnectionAuthModes` <a name="putConnectionAuthModes" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.putConnectionAuthModes"></a>

```java
public void putConnectionAuthModes(IResolvable|java.util.List<AppsyncApiEventConfigConnectionAuthModes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.putConnectionAuthModes.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModes">AppsyncApiEventConfigConnectionAuthModes</a>>

---

##### `putDefaultPublishAuthModes` <a name="putDefaultPublishAuthModes" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.putDefaultPublishAuthModes"></a>

```java
public void putDefaultPublishAuthModes(IResolvable|java.util.List<AppsyncApiEventConfigDefaultPublishAuthModes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.putDefaultPublishAuthModes.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModes">AppsyncApiEventConfigDefaultPublishAuthModes</a>>

---

##### `putDefaultSubscribeAuthModes` <a name="putDefaultSubscribeAuthModes" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.putDefaultSubscribeAuthModes"></a>

```java
public void putDefaultSubscribeAuthModes(IResolvable|java.util.List<AppsyncApiEventConfigDefaultSubscribeAuthModes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.putDefaultSubscribeAuthModes.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModes">AppsyncApiEventConfigDefaultSubscribeAuthModes</a>>

---

##### `putLogConfig` <a name="putLogConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.putLogConfig"></a>

```java
public void putLogConfig(AppsyncApiEventConfigLogConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.putLogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfig">AppsyncApiEventConfigLogConfig</a>

---

##### `resetAuthProviders` <a name="resetAuthProviders" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.resetAuthProviders"></a>

```java
public void resetAuthProviders()
```

##### `resetConnectionAuthModes` <a name="resetConnectionAuthModes" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.resetConnectionAuthModes"></a>

```java
public void resetConnectionAuthModes()
```

##### `resetDefaultPublishAuthModes` <a name="resetDefaultPublishAuthModes" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.resetDefaultPublishAuthModes"></a>

```java
public void resetDefaultPublishAuthModes()
```

##### `resetDefaultSubscribeAuthModes` <a name="resetDefaultSubscribeAuthModes" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.resetDefaultSubscribeAuthModes"></a>

```java
public void resetDefaultSubscribeAuthModes()
```

##### `resetLogConfig` <a name="resetLogConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.resetLogConfig"></a>

```java
public void resetLogConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.authProviders">authProviders</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList">AppsyncApiEventConfigAuthProvidersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.connectionAuthModes">connectionAuthModes</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList">AppsyncApiEventConfigConnectionAuthModesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.defaultPublishAuthModes">defaultPublishAuthModes</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList">AppsyncApiEventConfigDefaultPublishAuthModesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.defaultSubscribeAuthModes">defaultSubscribeAuthModes</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList">AppsyncApiEventConfigDefaultSubscribeAuthModesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.logConfig">logConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference">AppsyncApiEventConfigLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.authProvidersInput">authProvidersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProviders">AppsyncApiEventConfigAuthProviders</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.connectionAuthModesInput">connectionAuthModesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModes">AppsyncApiEventConfigConnectionAuthModes</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.defaultPublishAuthModesInput">defaultPublishAuthModesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModes">AppsyncApiEventConfigDefaultPublishAuthModes</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.defaultSubscribeAuthModesInput">defaultSubscribeAuthModesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModes">AppsyncApiEventConfigDefaultSubscribeAuthModes</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.logConfigInput">logConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfig">AppsyncApiEventConfigLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfig">AppsyncApiEventConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authProviders`<sup>Required</sup> <a name="authProviders" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.authProviders"></a>

```java
public AppsyncApiEventConfigAuthProvidersList getAuthProviders();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList">AppsyncApiEventConfigAuthProvidersList</a>

---

##### `connectionAuthModes`<sup>Required</sup> <a name="connectionAuthModes" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.connectionAuthModes"></a>

```java
public AppsyncApiEventConfigConnectionAuthModesList getConnectionAuthModes();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList">AppsyncApiEventConfigConnectionAuthModesList</a>

---

##### `defaultPublishAuthModes`<sup>Required</sup> <a name="defaultPublishAuthModes" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.defaultPublishAuthModes"></a>

```java
public AppsyncApiEventConfigDefaultPublishAuthModesList getDefaultPublishAuthModes();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList">AppsyncApiEventConfigDefaultPublishAuthModesList</a>

---

##### `defaultSubscribeAuthModes`<sup>Required</sup> <a name="defaultSubscribeAuthModes" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.defaultSubscribeAuthModes"></a>

```java
public AppsyncApiEventConfigDefaultSubscribeAuthModesList getDefaultSubscribeAuthModes();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList">AppsyncApiEventConfigDefaultSubscribeAuthModesList</a>

---

##### `logConfig`<sup>Required</sup> <a name="logConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.logConfig"></a>

```java
public AppsyncApiEventConfigLogConfigOutputReference getLogConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference">AppsyncApiEventConfigLogConfigOutputReference</a>

---

##### `authProvidersInput`<sup>Optional</sup> <a name="authProvidersInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.authProvidersInput"></a>

```java
public IResolvable|java.util.List<AppsyncApiEventConfigAuthProviders> getAuthProvidersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProviders">AppsyncApiEventConfigAuthProviders</a>>

---

##### `connectionAuthModesInput`<sup>Optional</sup> <a name="connectionAuthModesInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.connectionAuthModesInput"></a>

```java
public IResolvable|java.util.List<AppsyncApiEventConfigConnectionAuthModes> getConnectionAuthModesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModes">AppsyncApiEventConfigConnectionAuthModes</a>>

---

##### `defaultPublishAuthModesInput`<sup>Optional</sup> <a name="defaultPublishAuthModesInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.defaultPublishAuthModesInput"></a>

```java
public IResolvable|java.util.List<AppsyncApiEventConfigDefaultPublishAuthModes> getDefaultPublishAuthModesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModes">AppsyncApiEventConfigDefaultPublishAuthModes</a>>

---

##### `defaultSubscribeAuthModesInput`<sup>Optional</sup> <a name="defaultSubscribeAuthModesInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.defaultSubscribeAuthModesInput"></a>

```java
public IResolvable|java.util.List<AppsyncApiEventConfigDefaultSubscribeAuthModes> getDefaultSubscribeAuthModesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModes">AppsyncApiEventConfigDefaultSubscribeAuthModes</a>>

---

##### `logConfigInput`<sup>Optional</sup> <a name="logConfigInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.logConfigInput"></a>

```java
public IResolvable|AppsyncApiEventConfigLogConfig getLogConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfig">AppsyncApiEventConfigLogConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|AppsyncApiEventConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfig">AppsyncApiEventConfig</a>

---


### AppsyncApiTagsList <a name="AppsyncApiTagsList" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_api.AppsyncApiTagsList;

new AppsyncApiTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.get"></a>

```java
public AppsyncApiTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTags">AppsyncApiTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AppsyncApiTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTags">AppsyncApiTags</a>>

---


### AppsyncApiTagsOutputReference <a name="AppsyncApiTagsOutputReference" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_api.AppsyncApiTagsOutputReference;

new AppsyncApiTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTags">AppsyncApiTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|AppsyncApiTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTags">AppsyncApiTags</a>

---



