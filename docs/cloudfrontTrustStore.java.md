# `cloudfrontTrustStore` Submodule <a name="`cloudfrontTrustStore` Submodule" id="@cdktn/provider-awscc.cloudfrontTrustStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudfrontTrustStore <a name="CloudfrontTrustStore" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_trust_store awscc_cloudfront_trust_store}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudfront_trust_store.CloudfrontTrustStore;

CloudfrontTrustStore.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .caCertificatesBundleSource(CloudfrontTrustStoreCaCertificatesBundleSource)
//  .tags(IResolvable|java.util.List<CloudfrontTrustStoreTags>)
//  .useClientCertificateOcspEndpoint(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The trust store's name. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.Initializer.parameter.caCertificatesBundleSource">caCertificatesBundleSource</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSource">CloudfrontTrustStoreCaCertificatesBundleSource</a></code> | A CA certificates bundle source. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTags">CloudfrontTrustStoreTags</a>></code> | A complex type that contains zero or more ``Tag`` elements. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.Initializer.parameter.useClientCertificateOcspEndpoint">useClientCertificateOcspEndpoint</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A boolean. When true, performs real-time certificate revocation checks by querying the OCSP endpoint specified within the client certificate. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The trust store's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_trust_store#name CloudfrontTrustStore#name}

---

##### `caCertificatesBundleSource`<sup>Optional</sup> <a name="caCertificatesBundleSource" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.Initializer.parameter.caCertificatesBundleSource"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSource">CloudfrontTrustStoreCaCertificatesBundleSource</a>

A CA certificates bundle source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_trust_store#ca_certificates_bundle_source CloudfrontTrustStore#ca_certificates_bundle_source}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTags">CloudfrontTrustStoreTags</a>>

A complex type that contains zero or more ``Tag`` elements.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_trust_store#tags CloudfrontTrustStore#tags}

---

##### `useClientCertificateOcspEndpoint`<sup>Optional</sup> <a name="useClientCertificateOcspEndpoint" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.Initializer.parameter.useClientCertificateOcspEndpoint"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A boolean. When true, performs real-time certificate revocation checks by querying the OCSP endpoint specified within the client certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_trust_store#use_client_certificate_ocsp_endpoint CloudfrontTrustStore#use_client_certificate_ocsp_endpoint}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.putCaCertificatesBundleSource">putCaCertificatesBundleSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.resetCaCertificatesBundleSource">resetCaCertificatesBundleSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.resetUseClientCertificateOcspEndpoint">resetUseClientCertificateOcspEndpoint</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCaCertificatesBundleSource` <a name="putCaCertificatesBundleSource" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.putCaCertificatesBundleSource"></a>

```java
public void putCaCertificatesBundleSource(CloudfrontTrustStoreCaCertificatesBundleSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.putCaCertificatesBundleSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSource">CloudfrontTrustStoreCaCertificatesBundleSource</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<CloudfrontTrustStoreTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTags">CloudfrontTrustStoreTags</a>>

---

##### `resetCaCertificatesBundleSource` <a name="resetCaCertificatesBundleSource" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.resetCaCertificatesBundleSource"></a>

```java
public void resetCaCertificatesBundleSource()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.resetTags"></a>

```java
public void resetTags()
```

##### `resetUseClientCertificateOcspEndpoint` <a name="resetUseClientCertificateOcspEndpoint" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.resetUseClientCertificateOcspEndpoint"></a>

```java
public void resetUseClientCertificateOcspEndpoint()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudfrontTrustStore resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.isConstruct"></a>

```java
import io.cdktn.providers.awscc.cloudfront_trust_store.CloudfrontTrustStore;

CloudfrontTrustStore.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.cloudfront_trust_store.CloudfrontTrustStore;

CloudfrontTrustStore.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.cloudfront_trust_store.CloudfrontTrustStore;

CloudfrontTrustStore.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.cloudfront_trust_store.CloudfrontTrustStore;

CloudfrontTrustStore.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CloudfrontTrustStore.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CloudfrontTrustStore resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CloudfrontTrustStore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CloudfrontTrustStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_trust_store#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CloudfrontTrustStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.property.caCertificatesBundleSource">caCertificatesBundleSource</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference">CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.property.eTag">eTag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.property.lastModifiedTime">lastModifiedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.property.numberOfCaCertificates">numberOfCaCertificates</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsList">CloudfrontTrustStoreTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.property.trustStoreId">trustStoreId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.property.caCertificatesBundleSourceInput">caCertificatesBundleSourceInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSource">CloudfrontTrustStoreCaCertificatesBundleSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTags">CloudfrontTrustStoreTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.property.useClientCertificateOcspEndpointInput">useClientCertificateOcspEndpointInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.property.useClientCertificateOcspEndpoint">useClientCertificateOcspEndpoint</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `caCertificatesBundleSource`<sup>Required</sup> <a name="caCertificatesBundleSource" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.property.caCertificatesBundleSource"></a>

```java
public CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference getCaCertificatesBundleSource();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference">CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference</a>

---

##### `eTag`<sup>Required</sup> <a name="eTag" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.property.eTag"></a>

```java
public java.lang.String getETag();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.property.lastModifiedTime"></a>

```java
public java.lang.String getLastModifiedTime();
```

- *Type:* java.lang.String

---

##### `numberOfCaCertificates`<sup>Required</sup> <a name="numberOfCaCertificates" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.property.numberOfCaCertificates"></a>

```java
public java.lang.Number getNumberOfCaCertificates();
```

- *Type:* java.lang.Number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.property.tags"></a>

```java
public CloudfrontTrustStoreTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsList">CloudfrontTrustStoreTagsList</a>

---

##### `trustStoreId`<sup>Required</sup> <a name="trustStoreId" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.property.trustStoreId"></a>

```java
public java.lang.String getTrustStoreId();
```

- *Type:* java.lang.String

---

##### `caCertificatesBundleSourceInput`<sup>Optional</sup> <a name="caCertificatesBundleSourceInput" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.property.caCertificatesBundleSourceInput"></a>

```java
public IResolvable|CloudfrontTrustStoreCaCertificatesBundleSource getCaCertificatesBundleSourceInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSource">CloudfrontTrustStoreCaCertificatesBundleSource</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.property.tagsInput"></a>

```java
public IResolvable|java.util.List<CloudfrontTrustStoreTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTags">CloudfrontTrustStoreTags</a>>

---

##### `useClientCertificateOcspEndpointInput`<sup>Optional</sup> <a name="useClientCertificateOcspEndpointInput" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.property.useClientCertificateOcspEndpointInput"></a>

```java
public java.lang.Boolean|IResolvable getUseClientCertificateOcspEndpointInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `useClientCertificateOcspEndpoint`<sup>Required</sup> <a name="useClientCertificateOcspEndpoint" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.property.useClientCertificateOcspEndpoint"></a>

```java
public java.lang.Boolean|IResolvable getUseClientCertificateOcspEndpoint();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStore.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudfrontTrustStoreCaCertificatesBundleSource <a name="CloudfrontTrustStoreCaCertificatesBundleSource" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSource.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudfront_trust_store.CloudfrontTrustStoreCaCertificatesBundleSource;

CloudfrontTrustStoreCaCertificatesBundleSource.builder()
//  .caCertificatesBundleS3Location(CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSource.property.caCertificatesBundleS3Location">caCertificatesBundleS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location">CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location</a></code> | The CA certificates bundle location in Amazon S3. |

---

##### `caCertificatesBundleS3Location`<sup>Optional</sup> <a name="caCertificatesBundleS3Location" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSource.property.caCertificatesBundleS3Location"></a>

```java
public CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location getCaCertificatesBundleS3Location();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location">CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location</a>

The CA certificates bundle location in Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_trust_store#ca_certificates_bundle_s3_location CloudfrontTrustStore#ca_certificates_bundle_s3_location}

---

### CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location <a name="CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudfront_trust_store.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location;

CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location.builder()
//  .bucket(java.lang.String)
//  .key(java.lang.String)
//  .region(java.lang.String)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location.property.bucket">bucket</a></code> | <code>java.lang.String</code> | The S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location.property.key">key</a></code> | <code>java.lang.String</code> | The location's key. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location.property.region">region</a></code> | <code>java.lang.String</code> | The location's Region. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location.property.version">version</a></code> | <code>java.lang.String</code> | The location's version. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

The S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_trust_store#bucket CloudfrontTrustStore#bucket}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The location's key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_trust_store#key CloudfrontTrustStore#key}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The location's Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_trust_store#region CloudfrontTrustStore#region}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

The location's version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_trust_store#version CloudfrontTrustStore#version}

---

### CloudfrontTrustStoreConfig <a name="CloudfrontTrustStoreConfig" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudfront_trust_store.CloudfrontTrustStoreConfig;

CloudfrontTrustStoreConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .caCertificatesBundleSource(CloudfrontTrustStoreCaCertificatesBundleSource)
//  .tags(IResolvable|java.util.List<CloudfrontTrustStoreTags>)
//  .useClientCertificateOcspEndpoint(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreConfig.property.name">name</a></code> | <code>java.lang.String</code> | The trust store's name. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreConfig.property.caCertificatesBundleSource">caCertificatesBundleSource</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSource">CloudfrontTrustStoreCaCertificatesBundleSource</a></code> | A CA certificates bundle source. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTags">CloudfrontTrustStoreTags</a>></code> | A complex type that contains zero or more ``Tag`` elements. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreConfig.property.useClientCertificateOcspEndpoint">useClientCertificateOcspEndpoint</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A boolean. When true, performs real-time certificate revocation checks by querying the OCSP endpoint specified within the client certificate. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The trust store's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_trust_store#name CloudfrontTrustStore#name}

---

##### `caCertificatesBundleSource`<sup>Optional</sup> <a name="caCertificatesBundleSource" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreConfig.property.caCertificatesBundleSource"></a>

```java
public CloudfrontTrustStoreCaCertificatesBundleSource getCaCertificatesBundleSource();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSource">CloudfrontTrustStoreCaCertificatesBundleSource</a>

A CA certificates bundle source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_trust_store#ca_certificates_bundle_source CloudfrontTrustStore#ca_certificates_bundle_source}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreConfig.property.tags"></a>

```java
public IResolvable|java.util.List<CloudfrontTrustStoreTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTags">CloudfrontTrustStoreTags</a>>

A complex type that contains zero or more ``Tag`` elements.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_trust_store#tags CloudfrontTrustStore#tags}

---

##### `useClientCertificateOcspEndpoint`<sup>Optional</sup> <a name="useClientCertificateOcspEndpoint" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreConfig.property.useClientCertificateOcspEndpoint"></a>

```java
public java.lang.Boolean|IResolvable getUseClientCertificateOcspEndpoint();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A boolean. When true, performs real-time certificate revocation checks by querying the OCSP endpoint specified within the client certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_trust_store#use_client_certificate_ocsp_endpoint CloudfrontTrustStore#use_client_certificate_ocsp_endpoint}

---

### CloudfrontTrustStoreTags <a name="CloudfrontTrustStoreTags" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudfront_trust_store.CloudfrontTrustStoreTags;

CloudfrontTrustStoreTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTags.property.key">key</a></code> | <code>java.lang.String</code> | A string that contains ``Tag`` key. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTags.property.value">value</a></code> | <code>java.lang.String</code> | A string that contains an optional ``Tag`` value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

A string that contains ``Tag`` key.

The string length should be between 1 and 128 characters. Valid characters include `a-z`, `A-Z`, `0-9`, space, and the special characters ``_ - . : / = +

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

A string that contains an optional ``Tag`` value.

The string length should be between 0 and 256 characters. Valid characters include `a-z`, `A-Z`, `0-9`, space, and the special characters ``_ - . : / = +

---

## Classes <a name="Classes" id="Classes"></a>

### CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference <a name="CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudfront_trust_store.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference;

new CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.resetBucket"></a>

```java
public void resetBucket()
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location">CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location">CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location</a>

---


### CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference <a name="CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudfront_trust_store.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference;

new CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.putCaCertificatesBundleS3Location">putCaCertificatesBundleS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.resetCaCertificatesBundleS3Location">resetCaCertificatesBundleS3Location</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCaCertificatesBundleS3Location` <a name="putCaCertificatesBundleS3Location" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.putCaCertificatesBundleS3Location"></a>

```java
public void putCaCertificatesBundleS3Location(CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.putCaCertificatesBundleS3Location.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location">CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location</a>

---

##### `resetCaCertificatesBundleS3Location` <a name="resetCaCertificatesBundleS3Location" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.resetCaCertificatesBundleS3Location"></a>

```java
public void resetCaCertificatesBundleS3Location()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.property.caCertificatesBundleS3Location">caCertificatesBundleS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference">CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.property.caCertificatesBundleS3LocationInput">caCertificatesBundleS3LocationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location">CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSource">CloudfrontTrustStoreCaCertificatesBundleSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `caCertificatesBundleS3Location`<sup>Required</sup> <a name="caCertificatesBundleS3Location" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.property.caCertificatesBundleS3Location"></a>

```java
public CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference getCaCertificatesBundleS3Location();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference">CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference</a>

---

##### `caCertificatesBundleS3LocationInput`<sup>Optional</sup> <a name="caCertificatesBundleS3LocationInput" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.property.caCertificatesBundleS3LocationInput"></a>

```java
public IResolvable|CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location getCaCertificatesBundleS3LocationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location">CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudfrontTrustStoreCaCertificatesBundleSource getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSource">CloudfrontTrustStoreCaCertificatesBundleSource</a>

---


### CloudfrontTrustStoreTagsList <a name="CloudfrontTrustStoreTagsList" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudfront_trust_store.CloudfrontTrustStoreTagsList;

new CloudfrontTrustStoreTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsList.get"></a>

```java
public CloudfrontTrustStoreTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTags">CloudfrontTrustStoreTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CloudfrontTrustStoreTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTags">CloudfrontTrustStoreTags</a>>

---


### CloudfrontTrustStoreTagsOutputReference <a name="CloudfrontTrustStoreTagsOutputReference" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudfront_trust_store.CloudfrontTrustStoreTagsOutputReference;

new CloudfrontTrustStoreTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTags">CloudfrontTrustStoreTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudfrontTrustStoreTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudfrontTrustStore.CloudfrontTrustStoreTags">CloudfrontTrustStoreTags</a>

---



