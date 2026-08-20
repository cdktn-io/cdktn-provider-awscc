# `elasticloadbalancingv2TrustStore` Submodule <a name="`elasticloadbalancingv2TrustStore` Submodule" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Elasticloadbalancingv2TrustStore <a name="Elasticloadbalancingv2TrustStore" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_trust_store awscc_elasticloadbalancingv2_trust_store}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_trust_store.Elasticloadbalancingv2TrustStore;

Elasticloadbalancingv2TrustStore.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .caCertificatesBundleS3Bucket(java.lang.String)
//  .caCertificatesBundleS3Key(java.lang.String)
//  .caCertificatesBundleS3ObjectVersion(java.lang.String)
//  .name(java.lang.String)
//  .tags(IResolvable|java.util.List<Elasticloadbalancingv2TrustStoreTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.Initializer.parameter.caCertificatesBundleS3Bucket">caCertificatesBundleS3Bucket</a></code> | <code>java.lang.String</code> | The name of the S3 bucket to fetch the CA certificate bundle from. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.Initializer.parameter.caCertificatesBundleS3Key">caCertificatesBundleS3Key</a></code> | <code>java.lang.String</code> | The name of the S3 object to fetch the CA certificate bundle from. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.Initializer.parameter.caCertificatesBundleS3ObjectVersion">caCertificatesBundleS3ObjectVersion</a></code> | <code>java.lang.String</code> | The version of the S3 bucket that contains the CA certificate bundle. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the trust store. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTags">Elasticloadbalancingv2TrustStoreTags</a>></code> | The tags to assign to the trust store. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `caCertificatesBundleS3Bucket`<sup>Optional</sup> <a name="caCertificatesBundleS3Bucket" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.Initializer.parameter.caCertificatesBundleS3Bucket"></a>

- *Type:* java.lang.String

The name of the S3 bucket to fetch the CA certificate bundle from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_trust_store#ca_certificates_bundle_s3_bucket Elasticloadbalancingv2TrustStore#ca_certificates_bundle_s3_bucket}

---

##### `caCertificatesBundleS3Key`<sup>Optional</sup> <a name="caCertificatesBundleS3Key" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.Initializer.parameter.caCertificatesBundleS3Key"></a>

- *Type:* java.lang.String

The name of the S3 object to fetch the CA certificate bundle from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_trust_store#ca_certificates_bundle_s3_key Elasticloadbalancingv2TrustStore#ca_certificates_bundle_s3_key}

---

##### `caCertificatesBundleS3ObjectVersion`<sup>Optional</sup> <a name="caCertificatesBundleS3ObjectVersion" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.Initializer.parameter.caCertificatesBundleS3ObjectVersion"></a>

- *Type:* java.lang.String

The version of the S3 bucket that contains the CA certificate bundle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_trust_store#ca_certificates_bundle_s3_object_version Elasticloadbalancingv2TrustStore#ca_certificates_bundle_s3_object_version}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the trust store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_trust_store#name Elasticloadbalancingv2TrustStore#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTags">Elasticloadbalancingv2TrustStoreTags</a>>

The tags to assign to the trust store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_trust_store#tags Elasticloadbalancingv2TrustStore#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.resetCaCertificatesBundleS3Bucket">resetCaCertificatesBundleS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.resetCaCertificatesBundleS3Key">resetCaCertificatesBundleS3Key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.resetCaCertificatesBundleS3ObjectVersion">resetCaCertificatesBundleS3ObjectVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<Elasticloadbalancingv2TrustStoreTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTags">Elasticloadbalancingv2TrustStoreTags</a>>

---

##### `resetCaCertificatesBundleS3Bucket` <a name="resetCaCertificatesBundleS3Bucket" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.resetCaCertificatesBundleS3Bucket"></a>

```java
public void resetCaCertificatesBundleS3Bucket()
```

##### `resetCaCertificatesBundleS3Key` <a name="resetCaCertificatesBundleS3Key" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.resetCaCertificatesBundleS3Key"></a>

```java
public void resetCaCertificatesBundleS3Key()
```

##### `resetCaCertificatesBundleS3ObjectVersion` <a name="resetCaCertificatesBundleS3ObjectVersion" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.resetCaCertificatesBundleS3ObjectVersion"></a>

```java
public void resetCaCertificatesBundleS3ObjectVersion()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.resetName"></a>

```java
public void resetName()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Elasticloadbalancingv2TrustStore resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.isConstruct"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_trust_store.Elasticloadbalancingv2TrustStore;

Elasticloadbalancingv2TrustStore.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_trust_store.Elasticloadbalancingv2TrustStore;

Elasticloadbalancingv2TrustStore.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_trust_store.Elasticloadbalancingv2TrustStore;

Elasticloadbalancingv2TrustStore.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_trust_store.Elasticloadbalancingv2TrustStore;

Elasticloadbalancingv2TrustStore.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Elasticloadbalancingv2TrustStore.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Elasticloadbalancingv2TrustStore resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Elasticloadbalancingv2TrustStore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Elasticloadbalancingv2TrustStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_trust_store#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Elasticloadbalancingv2TrustStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.numberOfCaCertificates">numberOfCaCertificates</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList">Elasticloadbalancingv2TrustStoreTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.trustStoreArn">trustStoreArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.caCertificatesBundleS3BucketInput">caCertificatesBundleS3BucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.caCertificatesBundleS3KeyInput">caCertificatesBundleS3KeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.caCertificatesBundleS3ObjectVersionInput">caCertificatesBundleS3ObjectVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTags">Elasticloadbalancingv2TrustStoreTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.caCertificatesBundleS3Bucket">caCertificatesBundleS3Bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.caCertificatesBundleS3Key">caCertificatesBundleS3Key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.caCertificatesBundleS3ObjectVersion">caCertificatesBundleS3ObjectVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `numberOfCaCertificates`<sup>Required</sup> <a name="numberOfCaCertificates" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.numberOfCaCertificates"></a>

```java
public java.lang.Number getNumberOfCaCertificates();
```

- *Type:* java.lang.Number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.tags"></a>

```java
public Elasticloadbalancingv2TrustStoreTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList">Elasticloadbalancingv2TrustStoreTagsList</a>

---

##### `trustStoreArn`<sup>Required</sup> <a name="trustStoreArn" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.trustStoreArn"></a>

```java
public java.lang.String getTrustStoreArn();
```

- *Type:* java.lang.String

---

##### `caCertificatesBundleS3BucketInput`<sup>Optional</sup> <a name="caCertificatesBundleS3BucketInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.caCertificatesBundleS3BucketInput"></a>

```java
public java.lang.String getCaCertificatesBundleS3BucketInput();
```

- *Type:* java.lang.String

---

##### `caCertificatesBundleS3KeyInput`<sup>Optional</sup> <a name="caCertificatesBundleS3KeyInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.caCertificatesBundleS3KeyInput"></a>

```java
public java.lang.String getCaCertificatesBundleS3KeyInput();
```

- *Type:* java.lang.String

---

##### `caCertificatesBundleS3ObjectVersionInput`<sup>Optional</sup> <a name="caCertificatesBundleS3ObjectVersionInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.caCertificatesBundleS3ObjectVersionInput"></a>

```java
public java.lang.String getCaCertificatesBundleS3ObjectVersionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.tagsInput"></a>

```java
public IResolvable|java.util.List<Elasticloadbalancingv2TrustStoreTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTags">Elasticloadbalancingv2TrustStoreTags</a>>

---

##### `caCertificatesBundleS3Bucket`<sup>Required</sup> <a name="caCertificatesBundleS3Bucket" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.caCertificatesBundleS3Bucket"></a>

```java
public java.lang.String getCaCertificatesBundleS3Bucket();
```

- *Type:* java.lang.String

---

##### `caCertificatesBundleS3Key`<sup>Required</sup> <a name="caCertificatesBundleS3Key" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.caCertificatesBundleS3Key"></a>

```java
public java.lang.String getCaCertificatesBundleS3Key();
```

- *Type:* java.lang.String

---

##### `caCertificatesBundleS3ObjectVersion`<sup>Required</sup> <a name="caCertificatesBundleS3ObjectVersion" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.caCertificatesBundleS3ObjectVersion"></a>

```java
public java.lang.String getCaCertificatesBundleS3ObjectVersion();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Elasticloadbalancingv2TrustStoreConfig <a name="Elasticloadbalancingv2TrustStoreConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_trust_store.Elasticloadbalancingv2TrustStoreConfig;

Elasticloadbalancingv2TrustStoreConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .caCertificatesBundleS3Bucket(java.lang.String)
//  .caCertificatesBundleS3Key(java.lang.String)
//  .caCertificatesBundleS3ObjectVersion(java.lang.String)
//  .name(java.lang.String)
//  .tags(IResolvable|java.util.List<Elasticloadbalancingv2TrustStoreTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.caCertificatesBundleS3Bucket">caCertificatesBundleS3Bucket</a></code> | <code>java.lang.String</code> | The name of the S3 bucket to fetch the CA certificate bundle from. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.caCertificatesBundleS3Key">caCertificatesBundleS3Key</a></code> | <code>java.lang.String</code> | The name of the S3 object to fetch the CA certificate bundle from. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.caCertificatesBundleS3ObjectVersion">caCertificatesBundleS3ObjectVersion</a></code> | <code>java.lang.String</code> | The version of the S3 bucket that contains the CA certificate bundle. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the trust store. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTags">Elasticloadbalancingv2TrustStoreTags</a>></code> | The tags to assign to the trust store. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `caCertificatesBundleS3Bucket`<sup>Optional</sup> <a name="caCertificatesBundleS3Bucket" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.caCertificatesBundleS3Bucket"></a>

```java
public java.lang.String getCaCertificatesBundleS3Bucket();
```

- *Type:* java.lang.String

The name of the S3 bucket to fetch the CA certificate bundle from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_trust_store#ca_certificates_bundle_s3_bucket Elasticloadbalancingv2TrustStore#ca_certificates_bundle_s3_bucket}

---

##### `caCertificatesBundleS3Key`<sup>Optional</sup> <a name="caCertificatesBundleS3Key" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.caCertificatesBundleS3Key"></a>

```java
public java.lang.String getCaCertificatesBundleS3Key();
```

- *Type:* java.lang.String

The name of the S3 object to fetch the CA certificate bundle from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_trust_store#ca_certificates_bundle_s3_key Elasticloadbalancingv2TrustStore#ca_certificates_bundle_s3_key}

---

##### `caCertificatesBundleS3ObjectVersion`<sup>Optional</sup> <a name="caCertificatesBundleS3ObjectVersion" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.caCertificatesBundleS3ObjectVersion"></a>

```java
public java.lang.String getCaCertificatesBundleS3ObjectVersion();
```

- *Type:* java.lang.String

The version of the S3 bucket that contains the CA certificate bundle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_trust_store#ca_certificates_bundle_s3_object_version Elasticloadbalancingv2TrustStore#ca_certificates_bundle_s3_object_version}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the trust store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_trust_store#name Elasticloadbalancingv2TrustStore#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.tags"></a>

```java
public IResolvable|java.util.List<Elasticloadbalancingv2TrustStoreTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTags">Elasticloadbalancingv2TrustStoreTags</a>>

The tags to assign to the trust store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_trust_store#tags Elasticloadbalancingv2TrustStore#tags}

---

### Elasticloadbalancingv2TrustStoreTags <a name="Elasticloadbalancingv2TrustStoreTags" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_trust_store.Elasticloadbalancingv2TrustStoreTags;

Elasticloadbalancingv2TrustStoreTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_trust_store#key Elasticloadbalancingv2TrustStore#key}. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_trust_store#value Elasticloadbalancingv2TrustStore#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_trust_store#key Elasticloadbalancingv2TrustStore#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_trust_store#value Elasticloadbalancingv2TrustStore#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Elasticloadbalancingv2TrustStoreTagsList <a name="Elasticloadbalancingv2TrustStoreTagsList" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_trust_store.Elasticloadbalancingv2TrustStoreTagsList;

new Elasticloadbalancingv2TrustStoreTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.get"></a>

```java
public Elasticloadbalancingv2TrustStoreTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTags">Elasticloadbalancingv2TrustStoreTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Elasticloadbalancingv2TrustStoreTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTags">Elasticloadbalancingv2TrustStoreTags</a>>

---


### Elasticloadbalancingv2TrustStoreTagsOutputReference <a name="Elasticloadbalancingv2TrustStoreTagsOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_trust_store.Elasticloadbalancingv2TrustStoreTagsOutputReference;

new Elasticloadbalancingv2TrustStoreTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTags">Elasticloadbalancingv2TrustStoreTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|Elasticloadbalancingv2TrustStoreTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTags">Elasticloadbalancingv2TrustStoreTags</a>

---



