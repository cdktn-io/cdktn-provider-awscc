# `cloudfrontCloudfrontOriginAccessIdentity` Submodule <a name="`cloudfrontCloudfrontOriginAccessIdentity` Submodule" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudfrontCloudfrontOriginAccessIdentity <a name="CloudfrontCloudfrontOriginAccessIdentity" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_cloudfront_origin_access_identity awscc_cloudfront_cloudfront_origin_access_identity}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudfront_cloudfront_origin_access_identity.CloudfrontCloudfrontOriginAccessIdentity;

CloudfrontCloudfrontOriginAccessIdentity.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .cloudfrontOriginAccessIdentityConfig(CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.Initializer.parameter.cloudfrontOriginAccessIdentityConfig">cloudfrontOriginAccessIdentityConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig">CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig</a></code> | The current configuration information for the identity. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cloudfrontOriginAccessIdentityConfig`<sup>Required</sup> <a name="cloudfrontOriginAccessIdentityConfig" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.Initializer.parameter.cloudfrontOriginAccessIdentityConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig">CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig</a>

The current configuration information for the identity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_cloudfront_origin_access_identity#cloudfront_origin_access_identity_config CloudfrontCloudfrontOriginAccessIdentity#cloudfront_origin_access_identity_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.putCloudfrontOriginAccessIdentityConfig">putCloudfrontOriginAccessIdentityConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCloudfrontOriginAccessIdentityConfig` <a name="putCloudfrontOriginAccessIdentityConfig" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.putCloudfrontOriginAccessIdentityConfig"></a>

```java
public void putCloudfrontOriginAccessIdentityConfig(CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.putCloudfrontOriginAccessIdentityConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig">CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudfrontCloudfrontOriginAccessIdentity resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.isConstruct"></a>

```java
import io.cdktn.providers.awscc.cloudfront_cloudfront_origin_access_identity.CloudfrontCloudfrontOriginAccessIdentity;

CloudfrontCloudfrontOriginAccessIdentity.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.cloudfront_cloudfront_origin_access_identity.CloudfrontCloudfrontOriginAccessIdentity;

CloudfrontCloudfrontOriginAccessIdentity.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.cloudfront_cloudfront_origin_access_identity.CloudfrontCloudfrontOriginAccessIdentity;

CloudfrontCloudfrontOriginAccessIdentity.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.cloudfront_cloudfront_origin_access_identity.CloudfrontCloudfrontOriginAccessIdentity;

CloudfrontCloudfrontOriginAccessIdentity.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CloudfrontCloudfrontOriginAccessIdentity.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CloudfrontCloudfrontOriginAccessIdentity resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CloudfrontCloudfrontOriginAccessIdentity to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CloudfrontCloudfrontOriginAccessIdentity that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_cloudfront_origin_access_identity#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CloudfrontCloudfrontOriginAccessIdentity to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.cloudfrontOriginAccessIdentityConfig">cloudfrontOriginAccessIdentityConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference">CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.cloudfrontOriginAccessIdentityId">cloudfrontOriginAccessIdentityId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.s3CanonicalUserId">s3CanonicalUserId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.cloudfrontOriginAccessIdentityConfigInput">cloudfrontOriginAccessIdentityConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig">CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cloudfrontOriginAccessIdentityConfig`<sup>Required</sup> <a name="cloudfrontOriginAccessIdentityConfig" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.cloudfrontOriginAccessIdentityConfig"></a>

```java
public CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference getCloudfrontOriginAccessIdentityConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference">CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference</a>

---

##### `cloudfrontOriginAccessIdentityId`<sup>Required</sup> <a name="cloudfrontOriginAccessIdentityId" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.cloudfrontOriginAccessIdentityId"></a>

```java
public java.lang.String getCloudfrontOriginAccessIdentityId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `s3CanonicalUserId`<sup>Required</sup> <a name="s3CanonicalUserId" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.s3CanonicalUserId"></a>

```java
public java.lang.String getS3CanonicalUserId();
```

- *Type:* java.lang.String

---

##### `cloudfrontOriginAccessIdentityConfigInput`<sup>Optional</sup> <a name="cloudfrontOriginAccessIdentityConfigInput" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.cloudfrontOriginAccessIdentityConfigInput"></a>

```java
public IResolvable|CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig getCloudfrontOriginAccessIdentityConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig">CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig <a name="CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudfront_cloudfront_origin_access_identity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig;

CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig.builder()
    .comment(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig.property.comment">comment</a></code> | <code>java.lang.String</code> | A comment to describe the origin access identity. The comment cannot be longer than 128 characters. |

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

A comment to describe the origin access identity. The comment cannot be longer than 128 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_cloudfront_origin_access_identity#comment CloudfrontCloudfrontOriginAccessIdentity#comment}

---

### CloudfrontCloudfrontOriginAccessIdentityConfig <a name="CloudfrontCloudfrontOriginAccessIdentityConfig" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudfront_cloudfront_origin_access_identity.CloudfrontCloudfrontOriginAccessIdentityConfig;

CloudfrontCloudfrontOriginAccessIdentityConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .cloudfrontOriginAccessIdentityConfig(CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityConfig.property.cloudfrontOriginAccessIdentityConfig">cloudfrontOriginAccessIdentityConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig">CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig</a></code> | The current configuration information for the identity. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cloudfrontOriginAccessIdentityConfig`<sup>Required</sup> <a name="cloudfrontOriginAccessIdentityConfig" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityConfig.property.cloudfrontOriginAccessIdentityConfig"></a>

```java
public CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig getCloudfrontOriginAccessIdentityConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig">CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig</a>

The current configuration information for the identity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_cloudfront_origin_access_identity#cloudfront_origin_access_identity_config CloudfrontCloudfrontOriginAccessIdentity#cloudfront_origin_access_identity_config}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference <a name="CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudfront_cloudfront_origin_access_identity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference;

new CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig">CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig">CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig</a>

---



