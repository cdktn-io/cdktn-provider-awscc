# `apiportalManagedApi` Submodule <a name="`apiportalManagedApi` Submodule" id="@cdktn/provider-awscc.apiportalManagedApi"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiportalManagedApi <a name="ApiportalManagedApi" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_managed_api awscc_apiportal_managed_api}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.Initializer"></a>

```java
import io.cdktn.providers.awscc.apiportal_managed_api.ApiportalManagedApi;

ApiportalManagedApi.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .apiSignature(ApiportalManagedApiApiSignature)
//  .tags(IResolvable|java.util.List<ApiportalManagedApiTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.Initializer.parameter.apiSignature">apiSignature</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignature">ApiportalManagedApiApiSignature</a></code> | Identifies a discovered API by its source resource, method, hostname, port, and path. |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTags">ApiportalManagedApiTags</a>></code> | The tags associated with the managed API. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `apiSignature`<sup>Required</sup> <a name="apiSignature" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.Initializer.parameter.apiSignature"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignature">ApiportalManagedApiApiSignature</a>

Identifies a discovered API by its source resource, method, hostname, port, and path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_managed_api#api_signature ApiportalManagedApi#api_signature}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTags">ApiportalManagedApiTags</a>>

The tags associated with the managed API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_managed_api#tags ApiportalManagedApi#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.putApiSignature">putApiSignature</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putApiSignature` <a name="putApiSignature" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.putApiSignature"></a>

```java
public void putApiSignature(ApiportalManagedApiApiSignature value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.putApiSignature.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignature">ApiportalManagedApiApiSignature</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<ApiportalManagedApiTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTags">ApiportalManagedApiTags</a>>

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApiportalManagedApi resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.isConstruct"></a>

```java
import io.cdktn.providers.awscc.apiportal_managed_api.ApiportalManagedApi;

ApiportalManagedApi.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.apiportal_managed_api.ApiportalManagedApi;

ApiportalManagedApi.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.apiportal_managed_api.ApiportalManagedApi;

ApiportalManagedApi.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.apiportal_managed_api.ApiportalManagedApi;

ApiportalManagedApi.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApiportalManagedApi.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ApiportalManagedApi resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApiportalManagedApi to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApiportalManagedApi that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_managed_api#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ApiportalManagedApi to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.apiSignature">apiSignature</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference">ApiportalManagedApiApiSignatureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.managedApiArn">managedApiArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.managedApiId">managedApiId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsList">ApiportalManagedApiTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.apiSignatureInput">apiSignatureInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignature">ApiportalManagedApiApiSignature</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTags">ApiportalManagedApiTags</a>></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `apiSignature`<sup>Required</sup> <a name="apiSignature" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.apiSignature"></a>

```java
public ApiportalManagedApiApiSignatureOutputReference getApiSignature();
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference">ApiportalManagedApiApiSignatureOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `managedApiArn`<sup>Required</sup> <a name="managedApiArn" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.managedApiArn"></a>

```java
public java.lang.String getManagedApiArn();
```

- *Type:* java.lang.String

---

##### `managedApiId`<sup>Required</sup> <a name="managedApiId" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.managedApiId"></a>

```java
public java.lang.String getManagedApiId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.tags"></a>

```java
public ApiportalManagedApiTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsList">ApiportalManagedApiTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `apiSignatureInput`<sup>Optional</sup> <a name="apiSignatureInput" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.apiSignatureInput"></a>

```java
public IResolvable|ApiportalManagedApiApiSignature getApiSignatureInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignature">ApiportalManagedApiApiSignature</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.tagsInput"></a>

```java
public IResolvable|java.util.List<ApiportalManagedApiTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTags">ApiportalManagedApiTags</a>>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApiportalManagedApiApiSignature <a name="ApiportalManagedApiApiSignature" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignature"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignature.Initializer"></a>

```java
import io.cdktn.providers.awscc.apiportal_managed_api.ApiportalManagedApiApiSignature;

ApiportalManagedApiApiSignature.builder()
    .hostname(java.lang.String)
    .method(java.lang.String)
    .path(java.lang.String)
    .port(java.lang.Number)
    .resourceArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignature.property.hostname">hostname</a></code> | <code>java.lang.String</code> | The front-door hostname of the API. |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignature.property.method">method</a></code> | <code>java.lang.String</code> | The HTTP method of the API. |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignature.property.path">path</a></code> | <code>java.lang.String</code> | The route path of the API. |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignature.property.port">port</a></code> | <code>java.lang.Number</code> | The port the API is served on. |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignature.property.resourceArn">resourceArn</a></code> | <code>java.lang.String</code> | ARN of the source-service resource (API Gateway stage, load balancer, or CloudFront distribution). |

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignature.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

The front-door hostname of the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_managed_api#hostname ApiportalManagedApi#hostname}

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignature.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

The HTTP method of the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_managed_api#method ApiportalManagedApi#method}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignature.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

The route path of the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_managed_api#path ApiportalManagedApi#path}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignature.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

The port the API is served on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_managed_api#port ApiportalManagedApi#port}

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignature.property.resourceArn"></a>

```java
public java.lang.String getResourceArn();
```

- *Type:* java.lang.String

ARN of the source-service resource (API Gateway stage, load balancer, or CloudFront distribution).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_managed_api#resource_arn ApiportalManagedApi#resource_arn}

---

### ApiportalManagedApiConfig <a name="ApiportalManagedApiConfig" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.apiportal_managed_api.ApiportalManagedApiConfig;

ApiportalManagedApiConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .apiSignature(ApiportalManagedApiApiSignature)
//  .tags(IResolvable|java.util.List<ApiportalManagedApiTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiConfig.property.apiSignature">apiSignature</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignature">ApiportalManagedApiApiSignature</a></code> | Identifies a discovered API by its source resource, method, hostname, port, and path. |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTags">ApiportalManagedApiTags</a>></code> | The tags associated with the managed API. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `apiSignature`<sup>Required</sup> <a name="apiSignature" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiConfig.property.apiSignature"></a>

```java
public ApiportalManagedApiApiSignature getApiSignature();
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignature">ApiportalManagedApiApiSignature</a>

Identifies a discovered API by its source resource, method, hostname, port, and path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_managed_api#api_signature ApiportalManagedApi#api_signature}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiConfig.property.tags"></a>

```java
public IResolvable|java.util.List<ApiportalManagedApiTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTags">ApiportalManagedApiTags</a>>

The tags associated with the managed API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_managed_api#tags ApiportalManagedApi#tags}

---

### ApiportalManagedApiTags <a name="ApiportalManagedApiTags" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.apiportal_managed_api.ApiportalManagedApiTags;

ApiportalManagedApiTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_managed_api#key ApiportalManagedApi#key}. |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_managed_api#value ApiportalManagedApi#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_managed_api#key ApiportalManagedApi#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_managed_api#value ApiportalManagedApi#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiportalManagedApiApiSignatureOutputReference <a name="ApiportalManagedApiApiSignatureOutputReference" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apiportal_managed_api.ApiportalManagedApiApiSignatureOutputReference;

new ApiportalManagedApiApiSignatureOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.property.methodInput">methodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.property.resourceArnInput">resourceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.property.method">method</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.property.resourceArn">resourceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignature">ApiportalManagedApiApiSignature</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.property.hostnameInput"></a>

```java
public java.lang.String getHostnameInput();
```

- *Type:* java.lang.String

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.property.methodInput"></a>

```java
public java.lang.String getMethodInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `resourceArnInput`<sup>Optional</sup> <a name="resourceArnInput" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.property.resourceArnInput"></a>

```java
public java.lang.String getResourceArnInput();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.property.resourceArn"></a>

```java
public java.lang.String getResourceArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.property.internalValue"></a>

```java
public IResolvable|ApiportalManagedApiApiSignature getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignature">ApiportalManagedApiApiSignature</a>

---


### ApiportalManagedApiTagsList <a name="ApiportalManagedApiTagsList" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.apiportal_managed_api.ApiportalManagedApiTagsList;

new ApiportalManagedApiTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsList.get"></a>

```java
public ApiportalManagedApiTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTags">ApiportalManagedApiTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ApiportalManagedApiTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTags">ApiportalManagedApiTags</a>>

---


### ApiportalManagedApiTagsOutputReference <a name="ApiportalManagedApiTagsOutputReference" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apiportal_managed_api.ApiportalManagedApiTagsOutputReference;

new ApiportalManagedApiTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTags">ApiportalManagedApiTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|ApiportalManagedApiTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTags">ApiportalManagedApiTags</a>

---



