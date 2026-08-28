# `bedrockagentcoreWorkloadIdentity` Submodule <a name="`bedrockagentcoreWorkloadIdentity` Submodule" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcoreWorkloadIdentity <a name="BedrockagentcoreWorkloadIdentity" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_workload_identity awscc_bedrockagentcore_workload_identity}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_workload_identity.BedrockagentcoreWorkloadIdentity;

BedrockagentcoreWorkloadIdentity.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .allowedResourceOauth2ReturnUrls(java.util.List<java.lang.String>)
//  .tags(IResolvable|java.util.List<BedrockagentcoreWorkloadIdentityTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the workload identity. The name must be unique within your account. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.Initializer.parameter.allowedResourceOauth2ReturnUrls">allowedResourceOauth2ReturnUrls</a></code> | <code>java.util.List<java.lang.String></code> | The list of allowed OAuth2 return URLs for resources associated with this workload identity. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTags">BedrockagentcoreWorkloadIdentityTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the workload identity. The name must be unique within your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_workload_identity#name BedrockagentcoreWorkloadIdentity#name}

---

##### `allowedResourceOauth2ReturnUrls`<sup>Optional</sup> <a name="allowedResourceOauth2ReturnUrls" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.Initializer.parameter.allowedResourceOauth2ReturnUrls"></a>

- *Type:* java.util.List<java.lang.String>

The list of allowed OAuth2 return URLs for resources associated with this workload identity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_workload_identity#allowed_resource_oauth_2_return_urls BedrockagentcoreWorkloadIdentity#allowed_resource_oauth_2_return_urls}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTags">BedrockagentcoreWorkloadIdentityTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_workload_identity#tags BedrockagentcoreWorkloadIdentity#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.resetAllowedResourceOauth2ReturnUrls">resetAllowedResourceOauth2ReturnUrls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<BedrockagentcoreWorkloadIdentityTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTags">BedrockagentcoreWorkloadIdentityTags</a>>

---

##### `resetAllowedResourceOauth2ReturnUrls` <a name="resetAllowedResourceOauth2ReturnUrls" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.resetAllowedResourceOauth2ReturnUrls"></a>

```java
public void resetAllowedResourceOauth2ReturnUrls()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockagentcoreWorkloadIdentity resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.isConstruct"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_workload_identity.BedrockagentcoreWorkloadIdentity;

BedrockagentcoreWorkloadIdentity.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_workload_identity.BedrockagentcoreWorkloadIdentity;

BedrockagentcoreWorkloadIdentity.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_workload_identity.BedrockagentcoreWorkloadIdentity;

BedrockagentcoreWorkloadIdentity.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_workload_identity.BedrockagentcoreWorkloadIdentity;

BedrockagentcoreWorkloadIdentity.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BedrockagentcoreWorkloadIdentity.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a BedrockagentcoreWorkloadIdentity resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BedrockagentcoreWorkloadIdentity to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BedrockagentcoreWorkloadIdentity that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_workload_identity#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the BedrockagentcoreWorkloadIdentity to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.createdTime">createdTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsList">BedrockagentcoreWorkloadIdentityTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.workloadIdentityArn">workloadIdentityArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.allowedResourceOauth2ReturnUrlsInput">allowedResourceOauth2ReturnUrlsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTags">BedrockagentcoreWorkloadIdentityTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.allowedResourceOauth2ReturnUrls">allowedResourceOauth2ReturnUrls</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.createdTime"></a>

```java
public java.lang.Number getCreatedTime();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.lastUpdatedTime"></a>

```java
public java.lang.Number getLastUpdatedTime();
```

- *Type:* java.lang.Number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.tags"></a>

```java
public BedrockagentcoreWorkloadIdentityTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsList">BedrockagentcoreWorkloadIdentityTagsList</a>

---

##### `workloadIdentityArn`<sup>Required</sup> <a name="workloadIdentityArn" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.workloadIdentityArn"></a>

```java
public java.lang.String getWorkloadIdentityArn();
```

- *Type:* java.lang.String

---

##### `allowedResourceOauth2ReturnUrlsInput`<sup>Optional</sup> <a name="allowedResourceOauth2ReturnUrlsInput" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.allowedResourceOauth2ReturnUrlsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedResourceOauth2ReturnUrlsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.tagsInput"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreWorkloadIdentityTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTags">BedrockagentcoreWorkloadIdentityTags</a>>

---

##### `allowedResourceOauth2ReturnUrls`<sup>Required</sup> <a name="allowedResourceOauth2ReturnUrls" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.allowedResourceOauth2ReturnUrls"></a>

```java
public java.util.List<java.lang.String> getAllowedResourceOauth2ReturnUrls();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcoreWorkloadIdentityConfig <a name="BedrockagentcoreWorkloadIdentityConfig" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_workload_identity.BedrockagentcoreWorkloadIdentityConfig;

BedrockagentcoreWorkloadIdentityConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .allowedResourceOauth2ReturnUrls(java.util.List<java.lang.String>)
//  .tags(IResolvable|java.util.List<BedrockagentcoreWorkloadIdentityTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the workload identity. The name must be unique within your account. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityConfig.property.allowedResourceOauth2ReturnUrls">allowedResourceOauth2ReturnUrls</a></code> | <code>java.util.List<java.lang.String></code> | The list of allowed OAuth2 return URLs for resources associated with this workload identity. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTags">BedrockagentcoreWorkloadIdentityTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the workload identity. The name must be unique within your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_workload_identity#name BedrockagentcoreWorkloadIdentity#name}

---

##### `allowedResourceOauth2ReturnUrls`<sup>Optional</sup> <a name="allowedResourceOauth2ReturnUrls" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityConfig.property.allowedResourceOauth2ReturnUrls"></a>

```java
public java.util.List<java.lang.String> getAllowedResourceOauth2ReturnUrls();
```

- *Type:* java.util.List<java.lang.String>

The list of allowed OAuth2 return URLs for resources associated with this workload identity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_workload_identity#allowed_resource_oauth_2_return_urls BedrockagentcoreWorkloadIdentity#allowed_resource_oauth_2_return_urls}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityConfig.property.tags"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreWorkloadIdentityTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTags">BedrockagentcoreWorkloadIdentityTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_workload_identity#tags BedrockagentcoreWorkloadIdentity#tags}

---

### BedrockagentcoreWorkloadIdentityTags <a name="BedrockagentcoreWorkloadIdentityTags" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_workload_identity.BedrockagentcoreWorkloadIdentityTags;

BedrockagentcoreWorkloadIdentityTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_workload_identity#key BedrockagentcoreWorkloadIdentity#key}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_workload_identity#value BedrockagentcoreWorkloadIdentity#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_workload_identity#key BedrockagentcoreWorkloadIdentity#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_workload_identity#value BedrockagentcoreWorkloadIdentity#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcoreWorkloadIdentityTagsList <a name="BedrockagentcoreWorkloadIdentityTagsList" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_workload_identity.BedrockagentcoreWorkloadIdentityTagsList;

new BedrockagentcoreWorkloadIdentityTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsList.get"></a>

```java
public BedrockagentcoreWorkloadIdentityTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTags">BedrockagentcoreWorkloadIdentityTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreWorkloadIdentityTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTags">BedrockagentcoreWorkloadIdentityTags</a>>

---


### BedrockagentcoreWorkloadIdentityTagsOutputReference <a name="BedrockagentcoreWorkloadIdentityTagsOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_workload_identity.BedrockagentcoreWorkloadIdentityTagsOutputReference;

new BedrockagentcoreWorkloadIdentityTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTags">BedrockagentcoreWorkloadIdentityTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreWorkloadIdentityTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityTags">BedrockagentcoreWorkloadIdentityTags</a>

---



