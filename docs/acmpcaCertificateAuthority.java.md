# `acmpcaCertificateAuthority` Submodule <a name="`acmpcaCertificateAuthority` Submodule" id="@cdktn/provider-awscc.acmpcaCertificateAuthority"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AcmpcaCertificateAuthority <a name="AcmpcaCertificateAuthority" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority awscc_acmpca_certificate_authority}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer"></a>

```java
import io.cdktn.providers.awscc.acmpca_certificate_authority.AcmpcaCertificateAuthority;

AcmpcaCertificateAuthority.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .keyAlgorithm(java.lang.String)
    .signingAlgorithm(java.lang.String)
    .subject(AcmpcaCertificateAuthoritySubject)
    .type(java.lang.String)
//  .csrExtensions(AcmpcaCertificateAuthorityCsrExtensions)
//  .keyStorageSecurityStandard(java.lang.String)
//  .revocationConfiguration(AcmpcaCertificateAuthorityRevocationConfiguration)
//  .tags(IResolvable|java.util.List<AcmpcaCertificateAuthorityTags>)
//  .usageMode(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.keyAlgorithm">keyAlgorithm</a></code> | <code>java.lang.String</code> | Public key algorithm and size, in bits, of the key pair that your CA creates when it issues a certificate. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.signingAlgorithm">signingAlgorithm</a></code> | <code>java.lang.String</code> | Algorithm your CA uses to sign certificate requests. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.subject">subject</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject">AcmpcaCertificateAuthoritySubject</a></code> | Structure that contains X.500 distinguished name information for your CA. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The type of the certificate authority. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.csrExtensions">csrExtensions</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensions">AcmpcaCertificateAuthorityCsrExtensions</a></code> | Structure that contains CSR pass through extension information used by the CreateCertificateAuthority action. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.keyStorageSecurityStandard">keyStorageSecurityStandard</a></code> | <code>java.lang.String</code> | KeyStorageSecurityStadard defines a cryptographic key management compliance standard used for handling CA keys. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.revocationConfiguration">revocationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfiguration">AcmpcaCertificateAuthorityRevocationConfiguration</a></code> | Certificate revocation information used by the CreateCertificateAuthority and UpdateCertificateAuthority actions. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTags">AcmpcaCertificateAuthorityTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#tags AcmpcaCertificateAuthority#tags}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.usageMode">usageMode</a></code> | <code>java.lang.String</code> | Usage mode of the ceritificate authority. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `keyAlgorithm`<sup>Required</sup> <a name="keyAlgorithm" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.keyAlgorithm"></a>

- *Type:* java.lang.String

Public key algorithm and size, in bits, of the key pair that your CA creates when it issues a certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#key_algorithm AcmpcaCertificateAuthority#key_algorithm}

---

##### `signingAlgorithm`<sup>Required</sup> <a name="signingAlgorithm" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.signingAlgorithm"></a>

- *Type:* java.lang.String

Algorithm your CA uses to sign certificate requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#signing_algorithm AcmpcaCertificateAuthority#signing_algorithm}

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.subject"></a>

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject">AcmpcaCertificateAuthoritySubject</a>

Structure that contains X.500 distinguished name information for your CA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#subject AcmpcaCertificateAuthority#subject}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The type of the certificate authority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#type AcmpcaCertificateAuthority#type}

---

##### `csrExtensions`<sup>Optional</sup> <a name="csrExtensions" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.csrExtensions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensions">AcmpcaCertificateAuthorityCsrExtensions</a>

Structure that contains CSR pass through extension information used by the CreateCertificateAuthority action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#csr_extensions AcmpcaCertificateAuthority#csr_extensions}

---

##### `keyStorageSecurityStandard`<sup>Optional</sup> <a name="keyStorageSecurityStandard" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.keyStorageSecurityStandard"></a>

- *Type:* java.lang.String

KeyStorageSecurityStadard defines a cryptographic key management compliance standard used for handling CA keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#key_storage_security_standard AcmpcaCertificateAuthority#key_storage_security_standard}

---

##### `revocationConfiguration`<sup>Optional</sup> <a name="revocationConfiguration" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.revocationConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfiguration">AcmpcaCertificateAuthorityRevocationConfiguration</a>

Certificate revocation information used by the CreateCertificateAuthority and UpdateCertificateAuthority actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#revocation_configuration AcmpcaCertificateAuthority#revocation_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTags">AcmpcaCertificateAuthorityTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#tags AcmpcaCertificateAuthority#tags}.

---

##### `usageMode`<sup>Optional</sup> <a name="usageMode" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.usageMode"></a>

- *Type:* java.lang.String

Usage mode of the ceritificate authority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#usage_mode AcmpcaCertificateAuthority#usage_mode}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.putCsrExtensions">putCsrExtensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.putRevocationConfiguration">putRevocationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.putSubject">putSubject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetCsrExtensions">resetCsrExtensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetKeyStorageSecurityStandard">resetKeyStorageSecurityStandard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetRevocationConfiguration">resetRevocationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetUsageMode">resetUsageMode</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCsrExtensions` <a name="putCsrExtensions" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.putCsrExtensions"></a>

```java
public void putCsrExtensions(AcmpcaCertificateAuthorityCsrExtensions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.putCsrExtensions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensions">AcmpcaCertificateAuthorityCsrExtensions</a>

---

##### `putRevocationConfiguration` <a name="putRevocationConfiguration" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.putRevocationConfiguration"></a>

```java
public void putRevocationConfiguration(AcmpcaCertificateAuthorityRevocationConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.putRevocationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfiguration">AcmpcaCertificateAuthorityRevocationConfiguration</a>

---

##### `putSubject` <a name="putSubject" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.putSubject"></a>

```java
public void putSubject(AcmpcaCertificateAuthoritySubject value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.putSubject.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject">AcmpcaCertificateAuthoritySubject</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<AcmpcaCertificateAuthorityTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTags">AcmpcaCertificateAuthorityTags</a>>

---

##### `resetCsrExtensions` <a name="resetCsrExtensions" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetCsrExtensions"></a>

```java
public void resetCsrExtensions()
```

##### `resetKeyStorageSecurityStandard` <a name="resetKeyStorageSecurityStandard" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetKeyStorageSecurityStandard"></a>

```java
public void resetKeyStorageSecurityStandard()
```

##### `resetRevocationConfiguration` <a name="resetRevocationConfiguration" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetRevocationConfiguration"></a>

```java
public void resetRevocationConfiguration()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetTags"></a>

```java
public void resetTags()
```

##### `resetUsageMode` <a name="resetUsageMode" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetUsageMode"></a>

```java
public void resetUsageMode()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AcmpcaCertificateAuthority resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.isConstruct"></a>

```java
import io.cdktn.providers.awscc.acmpca_certificate_authority.AcmpcaCertificateAuthority;

AcmpcaCertificateAuthority.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.acmpca_certificate_authority.AcmpcaCertificateAuthority;

AcmpcaCertificateAuthority.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.acmpca_certificate_authority.AcmpcaCertificateAuthority;

AcmpcaCertificateAuthority.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.acmpca_certificate_authority.AcmpcaCertificateAuthority;

AcmpcaCertificateAuthority.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AcmpcaCertificateAuthority.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a AcmpcaCertificateAuthority resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AcmpcaCertificateAuthority to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AcmpcaCertificateAuthority that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the AcmpcaCertificateAuthority to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.certificateSigningRequest">certificateSigningRequest</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.csrExtensions">csrExtensions</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference">AcmpcaCertificateAuthorityCsrExtensionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.revocationConfiguration">revocationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference">AcmpcaCertificateAuthorityRevocationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.subject">subject</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference">AcmpcaCertificateAuthoritySubjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList">AcmpcaCertificateAuthorityTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.csrExtensionsInput">csrExtensionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensions">AcmpcaCertificateAuthorityCsrExtensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.keyAlgorithmInput">keyAlgorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.keyStorageSecurityStandardInput">keyStorageSecurityStandardInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.revocationConfigurationInput">revocationConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfiguration">AcmpcaCertificateAuthorityRevocationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.signingAlgorithmInput">signingAlgorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.subjectInput">subjectInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject">AcmpcaCertificateAuthoritySubject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTags">AcmpcaCertificateAuthorityTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.usageModeInput">usageModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.keyAlgorithm">keyAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.keyStorageSecurityStandard">keyStorageSecurityStandard</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.signingAlgorithm">signingAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.usageMode">usageMode</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `certificateSigningRequest`<sup>Required</sup> <a name="certificateSigningRequest" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.certificateSigningRequest"></a>

```java
public java.lang.String getCertificateSigningRequest();
```

- *Type:* java.lang.String

---

##### `csrExtensions`<sup>Required</sup> <a name="csrExtensions" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.csrExtensions"></a>

```java
public AcmpcaCertificateAuthorityCsrExtensionsOutputReference getCsrExtensions();
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference">AcmpcaCertificateAuthorityCsrExtensionsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `revocationConfiguration`<sup>Required</sup> <a name="revocationConfiguration" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.revocationConfiguration"></a>

```java
public AcmpcaCertificateAuthorityRevocationConfigurationOutputReference getRevocationConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference">AcmpcaCertificateAuthorityRevocationConfigurationOutputReference</a>

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.subject"></a>

```java
public AcmpcaCertificateAuthoritySubjectOutputReference getSubject();
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference">AcmpcaCertificateAuthoritySubjectOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.tags"></a>

```java
public AcmpcaCertificateAuthorityTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList">AcmpcaCertificateAuthorityTagsList</a>

---

##### `csrExtensionsInput`<sup>Optional</sup> <a name="csrExtensionsInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.csrExtensionsInput"></a>

```java
public IResolvable|AcmpcaCertificateAuthorityCsrExtensions getCsrExtensionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensions">AcmpcaCertificateAuthorityCsrExtensions</a>

---

##### `keyAlgorithmInput`<sup>Optional</sup> <a name="keyAlgorithmInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.keyAlgorithmInput"></a>

```java
public java.lang.String getKeyAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `keyStorageSecurityStandardInput`<sup>Optional</sup> <a name="keyStorageSecurityStandardInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.keyStorageSecurityStandardInput"></a>

```java
public java.lang.String getKeyStorageSecurityStandardInput();
```

- *Type:* java.lang.String

---

##### `revocationConfigurationInput`<sup>Optional</sup> <a name="revocationConfigurationInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.revocationConfigurationInput"></a>

```java
public IResolvable|AcmpcaCertificateAuthorityRevocationConfiguration getRevocationConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfiguration">AcmpcaCertificateAuthorityRevocationConfiguration</a>

---

##### `signingAlgorithmInput`<sup>Optional</sup> <a name="signingAlgorithmInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.signingAlgorithmInput"></a>

```java
public java.lang.String getSigningAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `subjectInput`<sup>Optional</sup> <a name="subjectInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.subjectInput"></a>

```java
public IResolvable|AcmpcaCertificateAuthoritySubject getSubjectInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject">AcmpcaCertificateAuthoritySubject</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.tagsInput"></a>

```java
public IResolvable|java.util.List<AcmpcaCertificateAuthorityTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTags">AcmpcaCertificateAuthorityTags</a>>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `usageModeInput`<sup>Optional</sup> <a name="usageModeInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.usageModeInput"></a>

```java
public java.lang.String getUsageModeInput();
```

- *Type:* java.lang.String

---

##### `keyAlgorithm`<sup>Required</sup> <a name="keyAlgorithm" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.keyAlgorithm"></a>

```java
public java.lang.String getKeyAlgorithm();
```

- *Type:* java.lang.String

---

##### `keyStorageSecurityStandard`<sup>Required</sup> <a name="keyStorageSecurityStandard" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.keyStorageSecurityStandard"></a>

```java
public java.lang.String getKeyStorageSecurityStandard();
```

- *Type:* java.lang.String

---

##### `signingAlgorithm`<sup>Required</sup> <a name="signingAlgorithm" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.signingAlgorithm"></a>

```java
public java.lang.String getSigningAlgorithm();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `usageMode`<sup>Required</sup> <a name="usageMode" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.usageMode"></a>

```java
public java.lang.String getUsageMode();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AcmpcaCertificateAuthorityConfig <a name="AcmpcaCertificateAuthorityConfig" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.acmpca_certificate_authority.AcmpcaCertificateAuthorityConfig;

AcmpcaCertificateAuthorityConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .keyAlgorithm(java.lang.String)
    .signingAlgorithm(java.lang.String)
    .subject(AcmpcaCertificateAuthoritySubject)
    .type(java.lang.String)
//  .csrExtensions(AcmpcaCertificateAuthorityCsrExtensions)
//  .keyStorageSecurityStandard(java.lang.String)
//  .revocationConfiguration(AcmpcaCertificateAuthorityRevocationConfiguration)
//  .tags(IResolvable|java.util.List<AcmpcaCertificateAuthorityTags>)
//  .usageMode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.keyAlgorithm">keyAlgorithm</a></code> | <code>java.lang.String</code> | Public key algorithm and size, in bits, of the key pair that your CA creates when it issues a certificate. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.signingAlgorithm">signingAlgorithm</a></code> | <code>java.lang.String</code> | Algorithm your CA uses to sign certificate requests. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.subject">subject</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject">AcmpcaCertificateAuthoritySubject</a></code> | Structure that contains X.500 distinguished name information for your CA. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.type">type</a></code> | <code>java.lang.String</code> | The type of the certificate authority. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.csrExtensions">csrExtensions</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensions">AcmpcaCertificateAuthorityCsrExtensions</a></code> | Structure that contains CSR pass through extension information used by the CreateCertificateAuthority action. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.keyStorageSecurityStandard">keyStorageSecurityStandard</a></code> | <code>java.lang.String</code> | KeyStorageSecurityStadard defines a cryptographic key management compliance standard used for handling CA keys. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.revocationConfiguration">revocationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfiguration">AcmpcaCertificateAuthorityRevocationConfiguration</a></code> | Certificate revocation information used by the CreateCertificateAuthority and UpdateCertificateAuthority actions. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTags">AcmpcaCertificateAuthorityTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#tags AcmpcaCertificateAuthority#tags}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.usageMode">usageMode</a></code> | <code>java.lang.String</code> | Usage mode of the ceritificate authority. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `keyAlgorithm`<sup>Required</sup> <a name="keyAlgorithm" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.keyAlgorithm"></a>

```java
public java.lang.String getKeyAlgorithm();
```

- *Type:* java.lang.String

Public key algorithm and size, in bits, of the key pair that your CA creates when it issues a certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#key_algorithm AcmpcaCertificateAuthority#key_algorithm}

---

##### `signingAlgorithm`<sup>Required</sup> <a name="signingAlgorithm" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.signingAlgorithm"></a>

```java
public java.lang.String getSigningAlgorithm();
```

- *Type:* java.lang.String

Algorithm your CA uses to sign certificate requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#signing_algorithm AcmpcaCertificateAuthority#signing_algorithm}

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.subject"></a>

```java
public AcmpcaCertificateAuthoritySubject getSubject();
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject">AcmpcaCertificateAuthoritySubject</a>

Structure that contains X.500 distinguished name information for your CA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#subject AcmpcaCertificateAuthority#subject}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of the certificate authority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#type AcmpcaCertificateAuthority#type}

---

##### `csrExtensions`<sup>Optional</sup> <a name="csrExtensions" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.csrExtensions"></a>

```java
public AcmpcaCertificateAuthorityCsrExtensions getCsrExtensions();
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensions">AcmpcaCertificateAuthorityCsrExtensions</a>

Structure that contains CSR pass through extension information used by the CreateCertificateAuthority action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#csr_extensions AcmpcaCertificateAuthority#csr_extensions}

---

##### `keyStorageSecurityStandard`<sup>Optional</sup> <a name="keyStorageSecurityStandard" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.keyStorageSecurityStandard"></a>

```java
public java.lang.String getKeyStorageSecurityStandard();
```

- *Type:* java.lang.String

KeyStorageSecurityStadard defines a cryptographic key management compliance standard used for handling CA keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#key_storage_security_standard AcmpcaCertificateAuthority#key_storage_security_standard}

---

##### `revocationConfiguration`<sup>Optional</sup> <a name="revocationConfiguration" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.revocationConfiguration"></a>

```java
public AcmpcaCertificateAuthorityRevocationConfiguration getRevocationConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfiguration">AcmpcaCertificateAuthorityRevocationConfiguration</a>

Certificate revocation information used by the CreateCertificateAuthority and UpdateCertificateAuthority actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#revocation_configuration AcmpcaCertificateAuthority#revocation_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.tags"></a>

```java
public IResolvable|java.util.List<AcmpcaCertificateAuthorityTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTags">AcmpcaCertificateAuthorityTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#tags AcmpcaCertificateAuthority#tags}.

---

##### `usageMode`<sup>Optional</sup> <a name="usageMode" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.usageMode"></a>

```java
public java.lang.String getUsageMode();
```

- *Type:* java.lang.String

Usage mode of the ceritificate authority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#usage_mode AcmpcaCertificateAuthority#usage_mode}

---

### AcmpcaCertificateAuthorityCsrExtensions <a name="AcmpcaCertificateAuthorityCsrExtensions" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensions.Initializer"></a>

```java
import io.cdktn.providers.awscc.acmpca_certificate_authority.AcmpcaCertificateAuthorityCsrExtensions;

AcmpcaCertificateAuthorityCsrExtensions.builder()
//  .keyUsage(AcmpcaCertificateAuthorityCsrExtensionsKeyUsage)
//  .subjectInformationAccess(IResolvable|java.util.List<AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensions.property.keyUsage">keyUsage</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage">AcmpcaCertificateAuthorityCsrExtensionsKeyUsage</a></code> | Structure that contains X.509 KeyUsage information. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensions.property.subjectInformationAccess">subjectInformationAccess</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess</a>></code> | Array of X.509 AccessDescription. |

---

##### `keyUsage`<sup>Optional</sup> <a name="keyUsage" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensions.property.keyUsage"></a>

```java
public AcmpcaCertificateAuthorityCsrExtensionsKeyUsage getKeyUsage();
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage">AcmpcaCertificateAuthorityCsrExtensionsKeyUsage</a>

Structure that contains X.509 KeyUsage information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#key_usage AcmpcaCertificateAuthority#key_usage}

---

##### `subjectInformationAccess`<sup>Optional</sup> <a name="subjectInformationAccess" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensions.property.subjectInformationAccess"></a>

```java
public IResolvable|java.util.List<AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess> getSubjectInformationAccess();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess</a>>

Array of X.509 AccessDescription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#subject_information_access AcmpcaCertificateAuthority#subject_information_access}

---

### AcmpcaCertificateAuthorityCsrExtensionsKeyUsage <a name="AcmpcaCertificateAuthorityCsrExtensionsKeyUsage" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage.Initializer"></a>

```java
import io.cdktn.providers.awscc.acmpca_certificate_authority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage;

AcmpcaCertificateAuthorityCsrExtensionsKeyUsage.builder()
//  .crlSign(java.lang.Boolean|IResolvable)
//  .dataEncipherment(java.lang.Boolean|IResolvable)
//  .decipherOnly(java.lang.Boolean|IResolvable)
//  .digitalSignature(java.lang.Boolean|IResolvable)
//  .encipherOnly(java.lang.Boolean|IResolvable)
//  .keyAgreement(java.lang.Boolean|IResolvable)
//  .keyCertSign(java.lang.Boolean|IResolvable)
//  .keyEncipherment(java.lang.Boolean|IResolvable)
//  .nonRepudiation(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage.property.crlSign">crlSign</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#crl_sign AcmpcaCertificateAuthority#crl_sign}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage.property.dataEncipherment">dataEncipherment</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#data_encipherment AcmpcaCertificateAuthority#data_encipherment}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage.property.decipherOnly">decipherOnly</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#decipher_only AcmpcaCertificateAuthority#decipher_only}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage.property.digitalSignature">digitalSignature</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#digital_signature AcmpcaCertificateAuthority#digital_signature}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage.property.encipherOnly">encipherOnly</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#encipher_only AcmpcaCertificateAuthority#encipher_only}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage.property.keyAgreement">keyAgreement</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#key_agreement AcmpcaCertificateAuthority#key_agreement}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage.property.keyCertSign">keyCertSign</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#key_cert_sign AcmpcaCertificateAuthority#key_cert_sign}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage.property.keyEncipherment">keyEncipherment</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#key_encipherment AcmpcaCertificateAuthority#key_encipherment}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage.property.nonRepudiation">nonRepudiation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#non_repudiation AcmpcaCertificateAuthority#non_repudiation}. |

---

##### `crlSign`<sup>Optional</sup> <a name="crlSign" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage.property.crlSign"></a>

```java
public java.lang.Boolean|IResolvable getCrlSign();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#crl_sign AcmpcaCertificateAuthority#crl_sign}.

---

##### `dataEncipherment`<sup>Optional</sup> <a name="dataEncipherment" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage.property.dataEncipherment"></a>

```java
public java.lang.Boolean|IResolvable getDataEncipherment();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#data_encipherment AcmpcaCertificateAuthority#data_encipherment}.

---

##### `decipherOnly`<sup>Optional</sup> <a name="decipherOnly" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage.property.decipherOnly"></a>

```java
public java.lang.Boolean|IResolvable getDecipherOnly();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#decipher_only AcmpcaCertificateAuthority#decipher_only}.

---

##### `digitalSignature`<sup>Optional</sup> <a name="digitalSignature" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage.property.digitalSignature"></a>

```java
public java.lang.Boolean|IResolvable getDigitalSignature();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#digital_signature AcmpcaCertificateAuthority#digital_signature}.

---

##### `encipherOnly`<sup>Optional</sup> <a name="encipherOnly" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage.property.encipherOnly"></a>

```java
public java.lang.Boolean|IResolvable getEncipherOnly();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#encipher_only AcmpcaCertificateAuthority#encipher_only}.

---

##### `keyAgreement`<sup>Optional</sup> <a name="keyAgreement" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage.property.keyAgreement"></a>

```java
public java.lang.Boolean|IResolvable getKeyAgreement();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#key_agreement AcmpcaCertificateAuthority#key_agreement}.

---

##### `keyCertSign`<sup>Optional</sup> <a name="keyCertSign" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage.property.keyCertSign"></a>

```java
public java.lang.Boolean|IResolvable getKeyCertSign();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#key_cert_sign AcmpcaCertificateAuthority#key_cert_sign}.

---

##### `keyEncipherment`<sup>Optional</sup> <a name="keyEncipherment" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage.property.keyEncipherment"></a>

```java
public java.lang.Boolean|IResolvable getKeyEncipherment();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#key_encipherment AcmpcaCertificateAuthority#key_encipherment}.

---

##### `nonRepudiation`<sup>Optional</sup> <a name="nonRepudiation" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage.property.nonRepudiation"></a>

```java
public java.lang.Boolean|IResolvable getNonRepudiation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#non_repudiation AcmpcaCertificateAuthority#non_repudiation}.

---

### AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess <a name="AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess.Initializer"></a>

```java
import io.cdktn.providers.awscc.acmpca_certificate_authority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess;

AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess.builder()
//  .accessLocation(AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation)
//  .accessMethod(AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess.property.accessLocation">accessLocation</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation</a></code> | Structure that contains X.509 GeneralName information. Assign one and ONLY one field. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess.property.accessMethod">accessMethod</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod</a></code> | Structure that contains X.509 AccessMethod information. Assign one and ONLY one field. |

---

##### `accessLocation`<sup>Optional</sup> <a name="accessLocation" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess.property.accessLocation"></a>

```java
public AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation getAccessLocation();
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation</a>

Structure that contains X.509 GeneralName information. Assign one and ONLY one field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#access_location AcmpcaCertificateAuthority#access_location}

---

##### `accessMethod`<sup>Optional</sup> <a name="accessMethod" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess.property.accessMethod"></a>

```java
public AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod getAccessMethod();
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod</a>

Structure that contains X.509 AccessMethod information. Assign one and ONLY one field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#access_method AcmpcaCertificateAuthority#access_method}

---

### AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation <a name="AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation.Initializer"></a>

```java
import io.cdktn.providers.awscc.acmpca_certificate_authority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation;

AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation.builder()
//  .directoryName(AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName)
//  .dnsName(java.lang.String)
//  .ediPartyName(AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName)
//  .ipAddress(java.lang.String)
//  .otherName(AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName)
//  .registeredId(java.lang.String)
//  .rfc822Name(java.lang.String)
//  .uniformResourceIdentifier(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation.property.directoryName">directoryName</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName</a></code> | Structure that contains X.500 distinguished name information for your CA. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation.property.dnsName">dnsName</a></code> | <code>java.lang.String</code> | String that contains X.509 DnsName information. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation.property.ediPartyName">ediPartyName</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName</a></code> | Structure that contains X.509 EdiPartyName information. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | String that contains X.509 IpAddress information. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation.property.otherName">otherName</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName</a></code> | Structure that contains X.509 OtherName information. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation.property.registeredId">registeredId</a></code> | <code>java.lang.String</code> | String that contains X.509 ObjectIdentifier information. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation.property.rfc822Name">rfc822Name</a></code> | <code>java.lang.String</code> | String that contains X.509 Rfc822Name information. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation.property.uniformResourceIdentifier">uniformResourceIdentifier</a></code> | <code>java.lang.String</code> | String that contains X.509 UniformResourceIdentifier information. |

---

##### `directoryName`<sup>Optional</sup> <a name="directoryName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation.property.directoryName"></a>

```java
public AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName getDirectoryName();
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName</a>

Structure that contains X.500 distinguished name information for your CA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#directory_name AcmpcaCertificateAuthority#directory_name}

---

##### `dnsName`<sup>Optional</sup> <a name="dnsName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation.property.dnsName"></a>

```java
public java.lang.String getDnsName();
```

- *Type:* java.lang.String

String that contains X.509 DnsName information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#dns_name AcmpcaCertificateAuthority#dns_name}

---

##### `ediPartyName`<sup>Optional</sup> <a name="ediPartyName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation.property.ediPartyName"></a>

```java
public AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName getEdiPartyName();
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName</a>

Structure that contains X.509 EdiPartyName information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#edi_party_name AcmpcaCertificateAuthority#edi_party_name}

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

String that contains X.509 IpAddress information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#ip_address AcmpcaCertificateAuthority#ip_address}

---

##### `otherName`<sup>Optional</sup> <a name="otherName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation.property.otherName"></a>

```java
public AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName getOtherName();
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName</a>

Structure that contains X.509 OtherName information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#other_name AcmpcaCertificateAuthority#other_name}

---

##### `registeredId`<sup>Optional</sup> <a name="registeredId" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation.property.registeredId"></a>

```java
public java.lang.String getRegisteredId();
```

- *Type:* java.lang.String

String that contains X.509 ObjectIdentifier information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#registered_id AcmpcaCertificateAuthority#registered_id}

---

##### `rfc822Name`<sup>Optional</sup> <a name="rfc822Name" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation.property.rfc822Name"></a>

```java
public java.lang.String getRfc822Name();
```

- *Type:* java.lang.String

String that contains X.509 Rfc822Name information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#rfc_822_name AcmpcaCertificateAuthority#rfc_822_name}

---

##### `uniformResourceIdentifier`<sup>Optional</sup> <a name="uniformResourceIdentifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation.property.uniformResourceIdentifier"></a>

```java
public java.lang.String getUniformResourceIdentifier();
```

- *Type:* java.lang.String

String that contains X.509 UniformResourceIdentifier information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#uniform_resource_identifier AcmpcaCertificateAuthority#uniform_resource_identifier}

---

### AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName <a name="AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.Initializer"></a>

```java
import io.cdktn.providers.awscc.acmpca_certificate_authority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName;

AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.builder()
//  .commonName(java.lang.String)
//  .country(java.lang.String)
//  .customAttributes(IResolvable|java.util.List<AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes>)
//  .distinguishedNameQualifier(java.lang.String)
//  .generationQualifier(java.lang.String)
//  .givenName(java.lang.String)
//  .initials(java.lang.String)
//  .locality(java.lang.String)
//  .organization(java.lang.String)
//  .organizationalUnit(java.lang.String)
//  .pseudonym(java.lang.String)
//  .serialNumber(java.lang.String)
//  .state(java.lang.String)
//  .surname(java.lang.String)
//  .title(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.commonName">commonName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#common_name AcmpcaCertificateAuthority#common_name}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.country">country</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#country AcmpcaCertificateAuthority#country}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.customAttributes">customAttributes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes</a>></code> | Array of X.500 attribute type and value. CustomAttributes cannot be used along with pre-defined attributes. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.distinguishedNameQualifier">distinguishedNameQualifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#distinguished_name_qualifier AcmpcaCertificateAuthority#distinguished_name_qualifier}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.generationQualifier">generationQualifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#generation_qualifier AcmpcaCertificateAuthority#generation_qualifier}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.givenName">givenName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#given_name AcmpcaCertificateAuthority#given_name}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.initials">initials</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#initials AcmpcaCertificateAuthority#initials}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.locality">locality</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#locality AcmpcaCertificateAuthority#locality}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.organization">organization</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#organization AcmpcaCertificateAuthority#organization}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.organizationalUnit">organizationalUnit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#organizational_unit AcmpcaCertificateAuthority#organizational_unit}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.pseudonym">pseudonym</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#pseudonym AcmpcaCertificateAuthority#pseudonym}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.serialNumber">serialNumber</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#serial_number AcmpcaCertificateAuthority#serial_number}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#state AcmpcaCertificateAuthority#state}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.surname">surname</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#surname AcmpcaCertificateAuthority#surname}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.title">title</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#title AcmpcaCertificateAuthority#title}. |

---

##### `commonName`<sup>Optional</sup> <a name="commonName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.commonName"></a>

```java
public java.lang.String getCommonName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#common_name AcmpcaCertificateAuthority#common_name}.

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.country"></a>

```java
public java.lang.String getCountry();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#country AcmpcaCertificateAuthority#country}.

---

##### `customAttributes`<sup>Optional</sup> <a name="customAttributes" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.customAttributes"></a>

```java
public IResolvable|java.util.List<AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes> getCustomAttributes();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes</a>>

Array of X.500 attribute type and value. CustomAttributes cannot be used along with pre-defined attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#custom_attributes AcmpcaCertificateAuthority#custom_attributes}

---

##### `distinguishedNameQualifier`<sup>Optional</sup> <a name="distinguishedNameQualifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.distinguishedNameQualifier"></a>

```java
public java.lang.String getDistinguishedNameQualifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#distinguished_name_qualifier AcmpcaCertificateAuthority#distinguished_name_qualifier}.

---

##### `generationQualifier`<sup>Optional</sup> <a name="generationQualifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.generationQualifier"></a>

```java
public java.lang.String getGenerationQualifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#generation_qualifier AcmpcaCertificateAuthority#generation_qualifier}.

---

##### `givenName`<sup>Optional</sup> <a name="givenName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.givenName"></a>

```java
public java.lang.String getGivenName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#given_name AcmpcaCertificateAuthority#given_name}.

---

##### `initials`<sup>Optional</sup> <a name="initials" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.initials"></a>

```java
public java.lang.String getInitials();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#initials AcmpcaCertificateAuthority#initials}.

---

##### `locality`<sup>Optional</sup> <a name="locality" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.locality"></a>

```java
public java.lang.String getLocality();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#locality AcmpcaCertificateAuthority#locality}.

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#organization AcmpcaCertificateAuthority#organization}.

---

##### `organizationalUnit`<sup>Optional</sup> <a name="organizationalUnit" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.organizationalUnit"></a>

```java
public java.lang.String getOrganizationalUnit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#organizational_unit AcmpcaCertificateAuthority#organizational_unit}.

---

##### `pseudonym`<sup>Optional</sup> <a name="pseudonym" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.pseudonym"></a>

```java
public java.lang.String getPseudonym();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#pseudonym AcmpcaCertificateAuthority#pseudonym}.

---

##### `serialNumber`<sup>Optional</sup> <a name="serialNumber" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.serialNumber"></a>

```java
public java.lang.String getSerialNumber();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#serial_number AcmpcaCertificateAuthority#serial_number}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#state AcmpcaCertificateAuthority#state}.

---

##### `surname`<sup>Optional</sup> <a name="surname" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.surname"></a>

```java
public java.lang.String getSurname();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#surname AcmpcaCertificateAuthority#surname}.

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#title AcmpcaCertificateAuthority#title}.

---

### AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes <a name="AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes.Initializer"></a>

```java
import io.cdktn.providers.awscc.acmpca_certificate_authority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes;

AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes.builder()
//  .objectIdentifier(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes.property.objectIdentifier">objectIdentifier</a></code> | <code>java.lang.String</code> | String that contains X.509 ObjectIdentifier information. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#value AcmpcaCertificateAuthority#value}. |

---

##### `objectIdentifier`<sup>Optional</sup> <a name="objectIdentifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes.property.objectIdentifier"></a>

```java
public java.lang.String getObjectIdentifier();
```

- *Type:* java.lang.String

String that contains X.509 ObjectIdentifier information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#object_identifier AcmpcaCertificateAuthority#object_identifier}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#value AcmpcaCertificateAuthority#value}.

---

### AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName <a name="AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName.Initializer"></a>

```java
import io.cdktn.providers.awscc.acmpca_certificate_authority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName;

AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName.builder()
//  .nameAssigner(java.lang.String)
//  .partyName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName.property.nameAssigner">nameAssigner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#name_assigner AcmpcaCertificateAuthority#name_assigner}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName.property.partyName">partyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#party_name AcmpcaCertificateAuthority#party_name}. |

---

##### `nameAssigner`<sup>Optional</sup> <a name="nameAssigner" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName.property.nameAssigner"></a>

```java
public java.lang.String getNameAssigner();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#name_assigner AcmpcaCertificateAuthority#name_assigner}.

---

##### `partyName`<sup>Optional</sup> <a name="partyName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName.property.partyName"></a>

```java
public java.lang.String getPartyName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#party_name AcmpcaCertificateAuthority#party_name}.

---

### AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName <a name="AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName.Initializer"></a>

```java
import io.cdktn.providers.awscc.acmpca_certificate_authority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName;

AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName.builder()
//  .typeId(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName.property.typeId">typeId</a></code> | <code>java.lang.String</code> | String that contains X.509 ObjectIdentifier information. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#value AcmpcaCertificateAuthority#value}. |

---

##### `typeId`<sup>Optional</sup> <a name="typeId" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName.property.typeId"></a>

```java
public java.lang.String getTypeId();
```

- *Type:* java.lang.String

String that contains X.509 ObjectIdentifier information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#type_id AcmpcaCertificateAuthority#type_id}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#value AcmpcaCertificateAuthority#value}.

---

### AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod <a name="AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod.Initializer"></a>

```java
import io.cdktn.providers.awscc.acmpca_certificate_authority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod;

AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod.builder()
//  .accessMethodType(java.lang.String)
//  .customObjectIdentifier(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod.property.accessMethodType">accessMethodType</a></code> | <code>java.lang.String</code> | Pre-defined enum string for X.509 AccessMethod ObjectIdentifiers. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod.property.customObjectIdentifier">customObjectIdentifier</a></code> | <code>java.lang.String</code> | String that contains X.509 ObjectIdentifier information. |

---

##### `accessMethodType`<sup>Optional</sup> <a name="accessMethodType" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod.property.accessMethodType"></a>

```java
public java.lang.String getAccessMethodType();
```

- *Type:* java.lang.String

Pre-defined enum string for X.509 AccessMethod ObjectIdentifiers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#access_method_type AcmpcaCertificateAuthority#access_method_type}

---

##### `customObjectIdentifier`<sup>Optional</sup> <a name="customObjectIdentifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod.property.customObjectIdentifier"></a>

```java
public java.lang.String getCustomObjectIdentifier();
```

- *Type:* java.lang.String

String that contains X.509 ObjectIdentifier information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#custom_object_identifier AcmpcaCertificateAuthority#custom_object_identifier}

---

### AcmpcaCertificateAuthorityRevocationConfiguration <a name="AcmpcaCertificateAuthorityRevocationConfiguration" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.acmpca_certificate_authority.AcmpcaCertificateAuthorityRevocationConfiguration;

AcmpcaCertificateAuthorityRevocationConfiguration.builder()
//  .crlConfiguration(AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration)
//  .ocspConfiguration(AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfiguration.property.crlConfiguration">crlConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration</a></code> | Your certificate authority can create and maintain a certificate revocation list (CRL). |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfiguration.property.ocspConfiguration">ocspConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration</a></code> | Helps to configure online certificate status protocol (OCSP) responder for your certificate authority. |

---

##### `crlConfiguration`<sup>Optional</sup> <a name="crlConfiguration" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfiguration.property.crlConfiguration"></a>

```java
public AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration getCrlConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration</a>

Your certificate authority can create and maintain a certificate revocation list (CRL).

A CRL contains information about certificates that have been revoked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#crl_configuration AcmpcaCertificateAuthority#crl_configuration}

---

##### `ocspConfiguration`<sup>Optional</sup> <a name="ocspConfiguration" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfiguration.property.ocspConfiguration"></a>

```java
public AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration getOcspConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration</a>

Helps to configure online certificate status protocol (OCSP) responder for your certificate authority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#ocsp_configuration AcmpcaCertificateAuthority#ocsp_configuration}

---

### AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration <a name="AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.acmpca_certificate_authority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration;

AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.builder()
//  .crlDistributionPointExtensionConfiguration(AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration)
//  .crlType(java.lang.String)
//  .customCname(java.lang.String)
//  .customPath(java.lang.String)
//  .enabled(java.lang.Boolean|IResolvable)
//  .expirationInDays(java.lang.Number)
//  .s3BucketName(java.lang.String)
//  .s3ObjectAcl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.property.crlDistributionPointExtensionConfiguration">crlDistributionPointExtensionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration</a></code> | Configures the default behavior of the CRL Distribution Point extension for certificates issued by your certificate authority. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.property.crlType">crlType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#crl_type AcmpcaCertificateAuthority#crl_type}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.property.customCname">customCname</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#custom_cname AcmpcaCertificateAuthority#custom_cname}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.property.customPath">customPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#custom_path AcmpcaCertificateAuthority#custom_path}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#enabled AcmpcaCertificateAuthority#enabled}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.property.expirationInDays">expirationInDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#expiration_in_days AcmpcaCertificateAuthority#expiration_in_days}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.property.s3BucketName">s3BucketName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#s3_bucket_name AcmpcaCertificateAuthority#s3_bucket_name}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.property.s3ObjectAcl">s3ObjectAcl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#s3_object_acl AcmpcaCertificateAuthority#s3_object_acl}. |

---

##### `crlDistributionPointExtensionConfiguration`<sup>Optional</sup> <a name="crlDistributionPointExtensionConfiguration" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.property.crlDistributionPointExtensionConfiguration"></a>

```java
public AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration getCrlDistributionPointExtensionConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration</a>

Configures the default behavior of the CRL Distribution Point extension for certificates issued by your certificate authority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#crl_distribution_point_extension_configuration AcmpcaCertificateAuthority#crl_distribution_point_extension_configuration}

---

##### `crlType`<sup>Optional</sup> <a name="crlType" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.property.crlType"></a>

```java
public java.lang.String getCrlType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#crl_type AcmpcaCertificateAuthority#crl_type}.

---

##### `customCname`<sup>Optional</sup> <a name="customCname" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.property.customCname"></a>

```java
public java.lang.String getCustomCname();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#custom_cname AcmpcaCertificateAuthority#custom_cname}.

---

##### `customPath`<sup>Optional</sup> <a name="customPath" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.property.customPath"></a>

```java
public java.lang.String getCustomPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#custom_path AcmpcaCertificateAuthority#custom_path}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#enabled AcmpcaCertificateAuthority#enabled}.

---

##### `expirationInDays`<sup>Optional</sup> <a name="expirationInDays" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.property.expirationInDays"></a>

```java
public java.lang.Number getExpirationInDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#expiration_in_days AcmpcaCertificateAuthority#expiration_in_days}.

---

##### `s3BucketName`<sup>Optional</sup> <a name="s3BucketName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.property.s3BucketName"></a>

```java
public java.lang.String getS3BucketName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#s3_bucket_name AcmpcaCertificateAuthority#s3_bucket_name}.

---

##### `s3ObjectAcl`<sup>Optional</sup> <a name="s3ObjectAcl" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.property.s3ObjectAcl"></a>

```java
public java.lang.String getS3ObjectAcl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#s3_object_acl AcmpcaCertificateAuthority#s3_object_acl}.

---

### AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration <a name="AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.acmpca_certificate_authority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration;

AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration.builder()
//  .omitExtension(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration.property.omitExtension">omitExtension</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#omit_extension AcmpcaCertificateAuthority#omit_extension}. |

---

##### `omitExtension`<sup>Optional</sup> <a name="omitExtension" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration.property.omitExtension"></a>

```java
public java.lang.Boolean|IResolvable getOmitExtension();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#omit_extension AcmpcaCertificateAuthority#omit_extension}.

---

### AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration <a name="AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.acmpca_certificate_authority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration;

AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration.builder()
//  .enabled(java.lang.Boolean|IResolvable)
//  .ocspCustomCname(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#enabled AcmpcaCertificateAuthority#enabled}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration.property.ocspCustomCname">ocspCustomCname</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#ocsp_custom_cname AcmpcaCertificateAuthority#ocsp_custom_cname}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#enabled AcmpcaCertificateAuthority#enabled}.

---

##### `ocspCustomCname`<sup>Optional</sup> <a name="ocspCustomCname" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration.property.ocspCustomCname"></a>

```java
public java.lang.String getOcspCustomCname();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#ocsp_custom_cname AcmpcaCertificateAuthority#ocsp_custom_cname}.

---

### AcmpcaCertificateAuthoritySubject <a name="AcmpcaCertificateAuthoritySubject" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.Initializer"></a>

```java
import io.cdktn.providers.awscc.acmpca_certificate_authority.AcmpcaCertificateAuthoritySubject;

AcmpcaCertificateAuthoritySubject.builder()
//  .commonName(java.lang.String)
//  .country(java.lang.String)
//  .customAttributes(IResolvable|java.util.List<AcmpcaCertificateAuthoritySubjectCustomAttributes>)
//  .distinguishedNameQualifier(java.lang.String)
//  .generationQualifier(java.lang.String)
//  .givenName(java.lang.String)
//  .initials(java.lang.String)
//  .locality(java.lang.String)
//  .organization(java.lang.String)
//  .organizationalUnit(java.lang.String)
//  .pseudonym(java.lang.String)
//  .serialNumber(java.lang.String)
//  .state(java.lang.String)
//  .surname(java.lang.String)
//  .title(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.commonName">commonName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#common_name AcmpcaCertificateAuthority#common_name}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.country">country</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#country AcmpcaCertificateAuthority#country}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.customAttributes">customAttributes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributes">AcmpcaCertificateAuthoritySubjectCustomAttributes</a>></code> | Array of X.500 attribute type and value. CustomAttributes cannot be used along with pre-defined attributes. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.distinguishedNameQualifier">distinguishedNameQualifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#distinguished_name_qualifier AcmpcaCertificateAuthority#distinguished_name_qualifier}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.generationQualifier">generationQualifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#generation_qualifier AcmpcaCertificateAuthority#generation_qualifier}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.givenName">givenName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#given_name AcmpcaCertificateAuthority#given_name}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.initials">initials</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#initials AcmpcaCertificateAuthority#initials}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.locality">locality</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#locality AcmpcaCertificateAuthority#locality}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.organization">organization</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#organization AcmpcaCertificateAuthority#organization}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.organizationalUnit">organizationalUnit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#organizational_unit AcmpcaCertificateAuthority#organizational_unit}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.pseudonym">pseudonym</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#pseudonym AcmpcaCertificateAuthority#pseudonym}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.serialNumber">serialNumber</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#serial_number AcmpcaCertificateAuthority#serial_number}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#state AcmpcaCertificateAuthority#state}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.surname">surname</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#surname AcmpcaCertificateAuthority#surname}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.title">title</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#title AcmpcaCertificateAuthority#title}. |

---

##### `commonName`<sup>Optional</sup> <a name="commonName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.commonName"></a>

```java
public java.lang.String getCommonName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#common_name AcmpcaCertificateAuthority#common_name}.

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.country"></a>

```java
public java.lang.String getCountry();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#country AcmpcaCertificateAuthority#country}.

---

##### `customAttributes`<sup>Optional</sup> <a name="customAttributes" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.customAttributes"></a>

```java
public IResolvable|java.util.List<AcmpcaCertificateAuthoritySubjectCustomAttributes> getCustomAttributes();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributes">AcmpcaCertificateAuthoritySubjectCustomAttributes</a>>

Array of X.500 attribute type and value. CustomAttributes cannot be used along with pre-defined attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#custom_attributes AcmpcaCertificateAuthority#custom_attributes}

---

##### `distinguishedNameQualifier`<sup>Optional</sup> <a name="distinguishedNameQualifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.distinguishedNameQualifier"></a>

```java
public java.lang.String getDistinguishedNameQualifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#distinguished_name_qualifier AcmpcaCertificateAuthority#distinguished_name_qualifier}.

---

##### `generationQualifier`<sup>Optional</sup> <a name="generationQualifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.generationQualifier"></a>

```java
public java.lang.String getGenerationQualifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#generation_qualifier AcmpcaCertificateAuthority#generation_qualifier}.

---

##### `givenName`<sup>Optional</sup> <a name="givenName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.givenName"></a>

```java
public java.lang.String getGivenName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#given_name AcmpcaCertificateAuthority#given_name}.

---

##### `initials`<sup>Optional</sup> <a name="initials" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.initials"></a>

```java
public java.lang.String getInitials();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#initials AcmpcaCertificateAuthority#initials}.

---

##### `locality`<sup>Optional</sup> <a name="locality" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.locality"></a>

```java
public java.lang.String getLocality();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#locality AcmpcaCertificateAuthority#locality}.

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#organization AcmpcaCertificateAuthority#organization}.

---

##### `organizationalUnit`<sup>Optional</sup> <a name="organizationalUnit" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.organizationalUnit"></a>

```java
public java.lang.String getOrganizationalUnit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#organizational_unit AcmpcaCertificateAuthority#organizational_unit}.

---

##### `pseudonym`<sup>Optional</sup> <a name="pseudonym" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.pseudonym"></a>

```java
public java.lang.String getPseudonym();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#pseudonym AcmpcaCertificateAuthority#pseudonym}.

---

##### `serialNumber`<sup>Optional</sup> <a name="serialNumber" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.serialNumber"></a>

```java
public java.lang.String getSerialNumber();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#serial_number AcmpcaCertificateAuthority#serial_number}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#state AcmpcaCertificateAuthority#state}.

---

##### `surname`<sup>Optional</sup> <a name="surname" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.surname"></a>

```java
public java.lang.String getSurname();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#surname AcmpcaCertificateAuthority#surname}.

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#title AcmpcaCertificateAuthority#title}.

---

### AcmpcaCertificateAuthoritySubjectCustomAttributes <a name="AcmpcaCertificateAuthoritySubjectCustomAttributes" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributes.Initializer"></a>

```java
import io.cdktn.providers.awscc.acmpca_certificate_authority.AcmpcaCertificateAuthoritySubjectCustomAttributes;

AcmpcaCertificateAuthoritySubjectCustomAttributes.builder()
//  .objectIdentifier(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributes.property.objectIdentifier">objectIdentifier</a></code> | <code>java.lang.String</code> | String that contains X.509 ObjectIdentifier information. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributes.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#value AcmpcaCertificateAuthority#value}. |

---

##### `objectIdentifier`<sup>Optional</sup> <a name="objectIdentifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributes.property.objectIdentifier"></a>

```java
public java.lang.String getObjectIdentifier();
```

- *Type:* java.lang.String

String that contains X.509 ObjectIdentifier information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#object_identifier AcmpcaCertificateAuthority#object_identifier}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributes.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#value AcmpcaCertificateAuthority#value}.

---

### AcmpcaCertificateAuthorityTags <a name="AcmpcaCertificateAuthorityTags" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.acmpca_certificate_authority.AcmpcaCertificateAuthorityTags;

AcmpcaCertificateAuthorityTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#key AcmpcaCertificateAuthority#key}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#value AcmpcaCertificateAuthority#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#key AcmpcaCertificateAuthority#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_certificate_authority#value AcmpcaCertificateAuthority#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference <a name="AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.acmpca_certificate_authority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference;

new AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.resetCrlSign">resetCrlSign</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.resetDataEncipherment">resetDataEncipherment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.resetDecipherOnly">resetDecipherOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.resetDigitalSignature">resetDigitalSignature</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.resetEncipherOnly">resetEncipherOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.resetKeyAgreement">resetKeyAgreement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.resetKeyCertSign">resetKeyCertSign</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.resetKeyEncipherment">resetKeyEncipherment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.resetNonRepudiation">resetNonRepudiation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCrlSign` <a name="resetCrlSign" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.resetCrlSign"></a>

```java
public void resetCrlSign()
```

##### `resetDataEncipherment` <a name="resetDataEncipherment" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.resetDataEncipherment"></a>

```java
public void resetDataEncipherment()
```

##### `resetDecipherOnly` <a name="resetDecipherOnly" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.resetDecipherOnly"></a>

```java
public void resetDecipherOnly()
```

##### `resetDigitalSignature` <a name="resetDigitalSignature" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.resetDigitalSignature"></a>

```java
public void resetDigitalSignature()
```

##### `resetEncipherOnly` <a name="resetEncipherOnly" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.resetEncipherOnly"></a>

```java
public void resetEncipherOnly()
```

##### `resetKeyAgreement` <a name="resetKeyAgreement" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.resetKeyAgreement"></a>

```java
public void resetKeyAgreement()
```

##### `resetKeyCertSign` <a name="resetKeyCertSign" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.resetKeyCertSign"></a>

```java
public void resetKeyCertSign()
```

##### `resetKeyEncipherment` <a name="resetKeyEncipherment" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.resetKeyEncipherment"></a>

```java
public void resetKeyEncipherment()
```

##### `resetNonRepudiation` <a name="resetNonRepudiation" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.resetNonRepudiation"></a>

```java
public void resetNonRepudiation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.crlSignInput">crlSignInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.dataEnciphermentInput">dataEnciphermentInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.decipherOnlyInput">decipherOnlyInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.digitalSignatureInput">digitalSignatureInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.encipherOnlyInput">encipherOnlyInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.keyAgreementInput">keyAgreementInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.keyCertSignInput">keyCertSignInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.keyEnciphermentInput">keyEnciphermentInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.nonRepudiationInput">nonRepudiationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.crlSign">crlSign</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.dataEncipherment">dataEncipherment</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.decipherOnly">decipherOnly</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.digitalSignature">digitalSignature</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.encipherOnly">encipherOnly</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.keyAgreement">keyAgreement</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.keyCertSign">keyCertSign</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.keyEncipherment">keyEncipherment</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.nonRepudiation">nonRepudiation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage">AcmpcaCertificateAuthorityCsrExtensionsKeyUsage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `crlSignInput`<sup>Optional</sup> <a name="crlSignInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.crlSignInput"></a>

```java
public java.lang.Boolean|IResolvable getCrlSignInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `dataEnciphermentInput`<sup>Optional</sup> <a name="dataEnciphermentInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.dataEnciphermentInput"></a>

```java
public java.lang.Boolean|IResolvable getDataEnciphermentInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `decipherOnlyInput`<sup>Optional</sup> <a name="decipherOnlyInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.decipherOnlyInput"></a>

```java
public java.lang.Boolean|IResolvable getDecipherOnlyInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `digitalSignatureInput`<sup>Optional</sup> <a name="digitalSignatureInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.digitalSignatureInput"></a>

```java
public java.lang.Boolean|IResolvable getDigitalSignatureInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `encipherOnlyInput`<sup>Optional</sup> <a name="encipherOnlyInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.encipherOnlyInput"></a>

```java
public java.lang.Boolean|IResolvable getEncipherOnlyInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `keyAgreementInput`<sup>Optional</sup> <a name="keyAgreementInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.keyAgreementInput"></a>

```java
public java.lang.Boolean|IResolvable getKeyAgreementInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `keyCertSignInput`<sup>Optional</sup> <a name="keyCertSignInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.keyCertSignInput"></a>

```java
public java.lang.Boolean|IResolvable getKeyCertSignInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `keyEnciphermentInput`<sup>Optional</sup> <a name="keyEnciphermentInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.keyEnciphermentInput"></a>

```java
public java.lang.Boolean|IResolvable getKeyEnciphermentInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `nonRepudiationInput`<sup>Optional</sup> <a name="nonRepudiationInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.nonRepudiationInput"></a>

```java
public java.lang.Boolean|IResolvable getNonRepudiationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `crlSign`<sup>Required</sup> <a name="crlSign" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.crlSign"></a>

```java
public java.lang.Boolean|IResolvable getCrlSign();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `dataEncipherment`<sup>Required</sup> <a name="dataEncipherment" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.dataEncipherment"></a>

```java
public java.lang.Boolean|IResolvable getDataEncipherment();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `decipherOnly`<sup>Required</sup> <a name="decipherOnly" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.decipherOnly"></a>

```java
public java.lang.Boolean|IResolvable getDecipherOnly();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `digitalSignature`<sup>Required</sup> <a name="digitalSignature" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.digitalSignature"></a>

```java
public java.lang.Boolean|IResolvable getDigitalSignature();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `encipherOnly`<sup>Required</sup> <a name="encipherOnly" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.encipherOnly"></a>

```java
public java.lang.Boolean|IResolvable getEncipherOnly();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `keyAgreement`<sup>Required</sup> <a name="keyAgreement" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.keyAgreement"></a>

```java
public java.lang.Boolean|IResolvable getKeyAgreement();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `keyCertSign`<sup>Required</sup> <a name="keyCertSign" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.keyCertSign"></a>

```java
public java.lang.Boolean|IResolvable getKeyCertSign();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `keyEncipherment`<sup>Required</sup> <a name="keyEncipherment" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.keyEncipherment"></a>

```java
public java.lang.Boolean|IResolvable getKeyEncipherment();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `nonRepudiation`<sup>Required</sup> <a name="nonRepudiation" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.nonRepudiation"></a>

```java
public java.lang.Boolean|IResolvable getNonRepudiation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.internalValue"></a>

```java
public IResolvable|AcmpcaCertificateAuthorityCsrExtensionsKeyUsage getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage">AcmpcaCertificateAuthorityCsrExtensionsKeyUsage</a>

---


### AcmpcaCertificateAuthorityCsrExtensionsOutputReference <a name="AcmpcaCertificateAuthorityCsrExtensionsOutputReference" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.acmpca_certificate_authority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference;

new AcmpcaCertificateAuthorityCsrExtensionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.putKeyUsage">putKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.putSubjectInformationAccess">putSubjectInformationAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.resetKeyUsage">resetKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.resetSubjectInformationAccess">resetSubjectInformationAccess</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putKeyUsage` <a name="putKeyUsage" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.putKeyUsage"></a>

```java
public void putKeyUsage(AcmpcaCertificateAuthorityCsrExtensionsKeyUsage value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.putKeyUsage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage">AcmpcaCertificateAuthorityCsrExtensionsKeyUsage</a>

---

##### `putSubjectInformationAccess` <a name="putSubjectInformationAccess" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.putSubjectInformationAccess"></a>

```java
public void putSubjectInformationAccess(IResolvable|java.util.List<AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.putSubjectInformationAccess.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess</a>>

---

##### `resetKeyUsage` <a name="resetKeyUsage" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.resetKeyUsage"></a>

```java
public void resetKeyUsage()
```

##### `resetSubjectInformationAccess` <a name="resetSubjectInformationAccess" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.resetSubjectInformationAccess"></a>

```java
public void resetSubjectInformationAccess()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.property.keyUsage">keyUsage</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference">AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.property.subjectInformationAccess">subjectInformationAccess</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.property.keyUsageInput">keyUsageInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage">AcmpcaCertificateAuthorityCsrExtensionsKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.property.subjectInformationAccessInput">subjectInformationAccessInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensions">AcmpcaCertificateAuthorityCsrExtensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyUsage`<sup>Required</sup> <a name="keyUsage" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.property.keyUsage"></a>

```java
public AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference getKeyUsage();
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference">AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference</a>

---

##### `subjectInformationAccess`<sup>Required</sup> <a name="subjectInformationAccess" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.property.subjectInformationAccess"></a>

```java
public AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList getSubjectInformationAccess();
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList</a>

---

##### `keyUsageInput`<sup>Optional</sup> <a name="keyUsageInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.property.keyUsageInput"></a>

```java
public IResolvable|AcmpcaCertificateAuthorityCsrExtensionsKeyUsage getKeyUsageInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage">AcmpcaCertificateAuthorityCsrExtensionsKeyUsage</a>

---

##### `subjectInformationAccessInput`<sup>Optional</sup> <a name="subjectInformationAccessInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.property.subjectInformationAccessInput"></a>

```java
public IResolvable|java.util.List<AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess> getSubjectInformationAccessInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.property.internalValue"></a>

```java
public IResolvable|AcmpcaCertificateAuthorityCsrExtensions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensions">AcmpcaCertificateAuthorityCsrExtensions</a>

---


### AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList <a name="AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.acmpca_certificate_authority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList;

new AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.get"></a>

```java
public AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes</a>>

---


### AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference <a name="AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.acmpca_certificate_authority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference;

new AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.resetObjectIdentifier">resetObjectIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetObjectIdentifier` <a name="resetObjectIdentifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.resetObjectIdentifier"></a>

```java
public void resetObjectIdentifier()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.property.objectIdentifierInput">objectIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.property.objectIdentifier">objectIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `objectIdentifierInput`<sup>Optional</sup> <a name="objectIdentifierInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.property.objectIdentifierInput"></a>

```java
public java.lang.String getObjectIdentifierInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `objectIdentifier`<sup>Required</sup> <a name="objectIdentifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.property.objectIdentifier"></a>

```java
public java.lang.String getObjectIdentifier();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.property.internalValue"></a>

```java
public IResolvable|AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes</a>

---


### AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference <a name="AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.acmpca_certificate_authority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference;

new AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.putCustomAttributes">putCustomAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetCommonName">resetCommonName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetCountry">resetCountry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetCustomAttributes">resetCustomAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetDistinguishedNameQualifier">resetDistinguishedNameQualifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetGenerationQualifier">resetGenerationQualifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetGivenName">resetGivenName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetInitials">resetInitials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetLocality">resetLocality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetOrganization">resetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetOrganizationalUnit">resetOrganizationalUnit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetPseudonym">resetPseudonym</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetSerialNumber">resetSerialNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetSurname">resetSurname</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomAttributes` <a name="putCustomAttributes" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.putCustomAttributes"></a>

```java
public void putCustomAttributes(IResolvable|java.util.List<AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.putCustomAttributes.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes</a>>

---

##### `resetCommonName` <a name="resetCommonName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetCommonName"></a>

```java
public void resetCommonName()
```

##### `resetCountry` <a name="resetCountry" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetCountry"></a>

```java
public void resetCountry()
```

##### `resetCustomAttributes` <a name="resetCustomAttributes" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetCustomAttributes"></a>

```java
public void resetCustomAttributes()
```

##### `resetDistinguishedNameQualifier` <a name="resetDistinguishedNameQualifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetDistinguishedNameQualifier"></a>

```java
public void resetDistinguishedNameQualifier()
```

##### `resetGenerationQualifier` <a name="resetGenerationQualifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetGenerationQualifier"></a>

```java
public void resetGenerationQualifier()
```

##### `resetGivenName` <a name="resetGivenName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetGivenName"></a>

```java
public void resetGivenName()
```

##### `resetInitials` <a name="resetInitials" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetInitials"></a>

```java
public void resetInitials()
```

##### `resetLocality` <a name="resetLocality" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetLocality"></a>

```java
public void resetLocality()
```

##### `resetOrganization` <a name="resetOrganization" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetOrganization"></a>

```java
public void resetOrganization()
```

##### `resetOrganizationalUnit` <a name="resetOrganizationalUnit" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetOrganizationalUnit"></a>

```java
public void resetOrganizationalUnit()
```

##### `resetPseudonym` <a name="resetPseudonym" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetPseudonym"></a>

```java
public void resetPseudonym()
```

##### `resetSerialNumber` <a name="resetSerialNumber" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetSerialNumber"></a>

```java
public void resetSerialNumber()
```

##### `resetState` <a name="resetState" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetState"></a>

```java
public void resetState()
```

##### `resetSurname` <a name="resetSurname" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetSurname"></a>

```java
public void resetSurname()
```

##### `resetTitle` <a name="resetTitle" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetTitle"></a>

```java
public void resetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.customAttributes">customAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.commonNameInput">commonNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.countryInput">countryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.customAttributesInput">customAttributesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.distinguishedNameQualifierInput">distinguishedNameQualifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.generationQualifierInput">generationQualifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.givenNameInput">givenNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.initialsInput">initialsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.localityInput">localityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.organizationalUnitInput">organizationalUnitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.organizationInput">organizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.pseudonymInput">pseudonymInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.serialNumberInput">serialNumberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.surnameInput">surnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.commonName">commonName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.country">country</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.distinguishedNameQualifier">distinguishedNameQualifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.generationQualifier">generationQualifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.givenName">givenName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.initials">initials</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.locality">locality</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.organization">organization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.organizationalUnit">organizationalUnit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.pseudonym">pseudonym</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.serialNumber">serialNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.surname">surname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customAttributes`<sup>Required</sup> <a name="customAttributes" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.customAttributes"></a>

```java
public AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList getCustomAttributes();
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList</a>

---

##### `commonNameInput`<sup>Optional</sup> <a name="commonNameInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.commonNameInput"></a>

```java
public java.lang.String getCommonNameInput();
```

- *Type:* java.lang.String

---

##### `countryInput`<sup>Optional</sup> <a name="countryInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.countryInput"></a>

```java
public java.lang.String getCountryInput();
```

- *Type:* java.lang.String

---

##### `customAttributesInput`<sup>Optional</sup> <a name="customAttributesInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.customAttributesInput"></a>

```java
public IResolvable|java.util.List<AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes> getCustomAttributesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes</a>>

---

##### `distinguishedNameQualifierInput`<sup>Optional</sup> <a name="distinguishedNameQualifierInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.distinguishedNameQualifierInput"></a>

```java
public java.lang.String getDistinguishedNameQualifierInput();
```

- *Type:* java.lang.String

---

##### `generationQualifierInput`<sup>Optional</sup> <a name="generationQualifierInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.generationQualifierInput"></a>

```java
public java.lang.String getGenerationQualifierInput();
```

- *Type:* java.lang.String

---

##### `givenNameInput`<sup>Optional</sup> <a name="givenNameInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.givenNameInput"></a>

```java
public java.lang.String getGivenNameInput();
```

- *Type:* java.lang.String

---

##### `initialsInput`<sup>Optional</sup> <a name="initialsInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.initialsInput"></a>

```java
public java.lang.String getInitialsInput();
```

- *Type:* java.lang.String

---

##### `localityInput`<sup>Optional</sup> <a name="localityInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.localityInput"></a>

```java
public java.lang.String getLocalityInput();
```

- *Type:* java.lang.String

---

##### `organizationalUnitInput`<sup>Optional</sup> <a name="organizationalUnitInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.organizationalUnitInput"></a>

```java
public java.lang.String getOrganizationalUnitInput();
```

- *Type:* java.lang.String

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.organizationInput"></a>

```java
public java.lang.String getOrganizationInput();
```

- *Type:* java.lang.String

---

##### `pseudonymInput`<sup>Optional</sup> <a name="pseudonymInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.pseudonymInput"></a>

```java
public java.lang.String getPseudonymInput();
```

- *Type:* java.lang.String

---

##### `serialNumberInput`<sup>Optional</sup> <a name="serialNumberInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.serialNumberInput"></a>

```java
public java.lang.String getSerialNumberInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `surnameInput`<sup>Optional</sup> <a name="surnameInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.surnameInput"></a>

```java
public java.lang.String getSurnameInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `commonName`<sup>Required</sup> <a name="commonName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.commonName"></a>

```java
public java.lang.String getCommonName();
```

- *Type:* java.lang.String

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.country"></a>

```java
public java.lang.String getCountry();
```

- *Type:* java.lang.String

---

##### `distinguishedNameQualifier`<sup>Required</sup> <a name="distinguishedNameQualifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.distinguishedNameQualifier"></a>

```java
public java.lang.String getDistinguishedNameQualifier();
```

- *Type:* java.lang.String

---

##### `generationQualifier`<sup>Required</sup> <a name="generationQualifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.generationQualifier"></a>

```java
public java.lang.String getGenerationQualifier();
```

- *Type:* java.lang.String

---

##### `givenName`<sup>Required</sup> <a name="givenName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.givenName"></a>

```java
public java.lang.String getGivenName();
```

- *Type:* java.lang.String

---

##### `initials`<sup>Required</sup> <a name="initials" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.initials"></a>

```java
public java.lang.String getInitials();
```

- *Type:* java.lang.String

---

##### `locality`<sup>Required</sup> <a name="locality" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.locality"></a>

```java
public java.lang.String getLocality();
```

- *Type:* java.lang.String

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

---

##### `organizationalUnit`<sup>Required</sup> <a name="organizationalUnit" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.organizationalUnit"></a>

```java
public java.lang.String getOrganizationalUnit();
```

- *Type:* java.lang.String

---

##### `pseudonym`<sup>Required</sup> <a name="pseudonym" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.pseudonym"></a>

```java
public java.lang.String getPseudonym();
```

- *Type:* java.lang.String

---

##### `serialNumber`<sup>Required</sup> <a name="serialNumber" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.serialNumber"></a>

```java
public java.lang.String getSerialNumber();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `surname`<sup>Required</sup> <a name="surname" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.surname"></a>

```java
public java.lang.String getSurname();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.internalValue"></a>

```java
public IResolvable|AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName</a>

---


### AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference <a name="AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.acmpca_certificate_authority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference;

new AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.resetNameAssigner">resetNameAssigner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.resetPartyName">resetPartyName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNameAssigner` <a name="resetNameAssigner" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.resetNameAssigner"></a>

```java
public void resetNameAssigner()
```

##### `resetPartyName` <a name="resetPartyName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.resetPartyName"></a>

```java
public void resetPartyName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.property.nameAssignerInput">nameAssignerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.property.partyNameInput">partyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.property.nameAssigner">nameAssigner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.property.partyName">partyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameAssignerInput`<sup>Optional</sup> <a name="nameAssignerInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.property.nameAssignerInput"></a>

```java
public java.lang.String getNameAssignerInput();
```

- *Type:* java.lang.String

---

##### `partyNameInput`<sup>Optional</sup> <a name="partyNameInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.property.partyNameInput"></a>

```java
public java.lang.String getPartyNameInput();
```

- *Type:* java.lang.String

---

##### `nameAssigner`<sup>Required</sup> <a name="nameAssigner" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.property.nameAssigner"></a>

```java
public java.lang.String getNameAssigner();
```

- *Type:* java.lang.String

---

##### `partyName`<sup>Required</sup> <a name="partyName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.property.partyName"></a>

```java
public java.lang.String getPartyName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.property.internalValue"></a>

```java
public IResolvable|AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName</a>

---


### AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference <a name="AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.acmpca_certificate_authority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference;

new AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.resetTypeId">resetTypeId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTypeId` <a name="resetTypeId" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.resetTypeId"></a>

```java
public void resetTypeId()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.property.typeIdInput">typeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.property.typeId">typeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeIdInput`<sup>Optional</sup> <a name="typeIdInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.property.typeIdInput"></a>

```java
public java.lang.String getTypeIdInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `typeId`<sup>Required</sup> <a name="typeId" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.property.typeId"></a>

```java
public java.lang.String getTypeId();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.property.internalValue"></a>

```java
public IResolvable|AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName</a>

---


### AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference <a name="AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.acmpca_certificate_authority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference;

new AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.putDirectoryName">putDirectoryName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.putEdiPartyName">putEdiPartyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.putOtherName">putOtherName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.resetDirectoryName">resetDirectoryName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.resetDnsName">resetDnsName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.resetEdiPartyName">resetEdiPartyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.resetIpAddress">resetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.resetOtherName">resetOtherName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.resetRegisteredId">resetRegisteredId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.resetRfc822Name">resetRfc822Name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.resetUniformResourceIdentifier">resetUniformResourceIdentifier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDirectoryName` <a name="putDirectoryName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.putDirectoryName"></a>

```java
public void putDirectoryName(AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.putDirectoryName.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName</a>

---

##### `putEdiPartyName` <a name="putEdiPartyName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.putEdiPartyName"></a>

```java
public void putEdiPartyName(AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.putEdiPartyName.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName</a>

---

##### `putOtherName` <a name="putOtherName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.putOtherName"></a>

```java
public void putOtherName(AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.putOtherName.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName</a>

---

##### `resetDirectoryName` <a name="resetDirectoryName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.resetDirectoryName"></a>

```java
public void resetDirectoryName()
```

##### `resetDnsName` <a name="resetDnsName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.resetDnsName"></a>

```java
public void resetDnsName()
```

##### `resetEdiPartyName` <a name="resetEdiPartyName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.resetEdiPartyName"></a>

```java
public void resetEdiPartyName()
```

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.resetIpAddress"></a>

```java
public void resetIpAddress()
```

##### `resetOtherName` <a name="resetOtherName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.resetOtherName"></a>

```java
public void resetOtherName()
```

##### `resetRegisteredId` <a name="resetRegisteredId" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.resetRegisteredId"></a>

```java
public void resetRegisteredId()
```

##### `resetRfc822Name` <a name="resetRfc822Name" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.resetRfc822Name"></a>

```java
public void resetRfc822Name()
```

##### `resetUniformResourceIdentifier` <a name="resetUniformResourceIdentifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.resetUniformResourceIdentifier"></a>

```java
public void resetUniformResourceIdentifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.directoryName">directoryName</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.ediPartyName">ediPartyName</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.otherName">otherName</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.directoryNameInput">directoryNameInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.dnsNameInput">dnsNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.ediPartyNameInput">ediPartyNameInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.otherNameInput">otherNameInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.registeredIdInput">registeredIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.rfc822NameInput">rfc822NameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.uniformResourceIdentifierInput">uniformResourceIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.dnsName">dnsName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.registeredId">registeredId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.rfc822Name">rfc822Name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.uniformResourceIdentifier">uniformResourceIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `directoryName`<sup>Required</sup> <a name="directoryName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.directoryName"></a>

```java
public AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference getDirectoryName();
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference</a>

---

##### `ediPartyName`<sup>Required</sup> <a name="ediPartyName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.ediPartyName"></a>

```java
public AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference getEdiPartyName();
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference</a>

---

##### `otherName`<sup>Required</sup> <a name="otherName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.otherName"></a>

```java
public AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference getOtherName();
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference</a>

---

##### `directoryNameInput`<sup>Optional</sup> <a name="directoryNameInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.directoryNameInput"></a>

```java
public IResolvable|AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName getDirectoryNameInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName</a>

---

##### `dnsNameInput`<sup>Optional</sup> <a name="dnsNameInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.dnsNameInput"></a>

```java
public java.lang.String getDnsNameInput();
```

- *Type:* java.lang.String

---

##### `ediPartyNameInput`<sup>Optional</sup> <a name="ediPartyNameInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.ediPartyNameInput"></a>

```java
public IResolvable|AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName getEdiPartyNameInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName</a>

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.ipAddressInput"></a>

```java
public java.lang.String getIpAddressInput();
```

- *Type:* java.lang.String

---

##### `otherNameInput`<sup>Optional</sup> <a name="otherNameInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.otherNameInput"></a>

```java
public IResolvable|AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName getOtherNameInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName</a>

---

##### `registeredIdInput`<sup>Optional</sup> <a name="registeredIdInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.registeredIdInput"></a>

```java
public java.lang.String getRegisteredIdInput();
```

- *Type:* java.lang.String

---

##### `rfc822NameInput`<sup>Optional</sup> <a name="rfc822NameInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.rfc822NameInput"></a>

```java
public java.lang.String getRfc822NameInput();
```

- *Type:* java.lang.String

---

##### `uniformResourceIdentifierInput`<sup>Optional</sup> <a name="uniformResourceIdentifierInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.uniformResourceIdentifierInput"></a>

```java
public java.lang.String getUniformResourceIdentifierInput();
```

- *Type:* java.lang.String

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.dnsName"></a>

```java
public java.lang.String getDnsName();
```

- *Type:* java.lang.String

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `registeredId`<sup>Required</sup> <a name="registeredId" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.registeredId"></a>

```java
public java.lang.String getRegisteredId();
```

- *Type:* java.lang.String

---

##### `rfc822Name`<sup>Required</sup> <a name="rfc822Name" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.rfc822Name"></a>

```java
public java.lang.String getRfc822Name();
```

- *Type:* java.lang.String

---

##### `uniformResourceIdentifier`<sup>Required</sup> <a name="uniformResourceIdentifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.uniformResourceIdentifier"></a>

```java
public java.lang.String getUniformResourceIdentifier();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.internalValue"></a>

```java
public IResolvable|AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation</a>

---


### AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference <a name="AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.acmpca_certificate_authority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference;

new AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.resetAccessMethodType">resetAccessMethodType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.resetCustomObjectIdentifier">resetCustomObjectIdentifier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessMethodType` <a name="resetAccessMethodType" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.resetAccessMethodType"></a>

```java
public void resetAccessMethodType()
```

##### `resetCustomObjectIdentifier` <a name="resetCustomObjectIdentifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.resetCustomObjectIdentifier"></a>

```java
public void resetCustomObjectIdentifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.property.accessMethodTypeInput">accessMethodTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.property.customObjectIdentifierInput">customObjectIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.property.accessMethodType">accessMethodType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.property.customObjectIdentifier">customObjectIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessMethodTypeInput`<sup>Optional</sup> <a name="accessMethodTypeInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.property.accessMethodTypeInput"></a>

```java
public java.lang.String getAccessMethodTypeInput();
```

- *Type:* java.lang.String

---

##### `customObjectIdentifierInput`<sup>Optional</sup> <a name="customObjectIdentifierInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.property.customObjectIdentifierInput"></a>

```java
public java.lang.String getCustomObjectIdentifierInput();
```

- *Type:* java.lang.String

---

##### `accessMethodType`<sup>Required</sup> <a name="accessMethodType" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.property.accessMethodType"></a>

```java
public java.lang.String getAccessMethodType();
```

- *Type:* java.lang.String

---

##### `customObjectIdentifier`<sup>Required</sup> <a name="customObjectIdentifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.property.customObjectIdentifier"></a>

```java
public java.lang.String getCustomObjectIdentifier();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.property.internalValue"></a>

```java
public IResolvable|AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod</a>

---


### AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList <a name="AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.Initializer"></a>

```java
import io.cdktn.providers.awscc.acmpca_certificate_authority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList;

new AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.get"></a>

```java
public AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess</a>>

---


### AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference <a name="AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.acmpca_certificate_authority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference;

new AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.putAccessLocation">putAccessLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.putAccessMethod">putAccessMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.resetAccessLocation">resetAccessLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.resetAccessMethod">resetAccessMethod</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAccessLocation` <a name="putAccessLocation" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.putAccessLocation"></a>

```java
public void putAccessLocation(AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.putAccessLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation</a>

---

##### `putAccessMethod` <a name="putAccessMethod" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.putAccessMethod"></a>

```java
public void putAccessMethod(AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.putAccessMethod.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod</a>

---

##### `resetAccessLocation` <a name="resetAccessLocation" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.resetAccessLocation"></a>

```java
public void resetAccessLocation()
```

##### `resetAccessMethod` <a name="resetAccessMethod" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.resetAccessMethod"></a>

```java
public void resetAccessMethod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.property.accessLocation">accessLocation</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.property.accessMethod">accessMethod</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.property.accessLocationInput">accessLocationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.property.accessMethodInput">accessMethodInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessLocation`<sup>Required</sup> <a name="accessLocation" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.property.accessLocation"></a>

```java
public AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference getAccessLocation();
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference</a>

---

##### `accessMethod`<sup>Required</sup> <a name="accessMethod" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.property.accessMethod"></a>

```java
public AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference getAccessMethod();
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference</a>

---

##### `accessLocationInput`<sup>Optional</sup> <a name="accessLocationInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.property.accessLocationInput"></a>

```java
public IResolvable|AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation getAccessLocationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation</a>

---

##### `accessMethodInput`<sup>Optional</sup> <a name="accessMethodInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.property.accessMethodInput"></a>

```java
public IResolvable|AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod getAccessMethodInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.property.internalValue"></a>

```java
public IResolvable|AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess</a>

---


### AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference <a name="AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.acmpca_certificate_authority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference;

new AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.resetOmitExtension">resetOmitExtension</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOmitExtension` <a name="resetOmitExtension" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.resetOmitExtension"></a>

```java
public void resetOmitExtension()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.property.omitExtensionInput">omitExtensionInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.property.omitExtension">omitExtension</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `omitExtensionInput`<sup>Optional</sup> <a name="omitExtensionInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.property.omitExtensionInput"></a>

```java
public java.lang.Boolean|IResolvable getOmitExtensionInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `omitExtension`<sup>Required</sup> <a name="omitExtension" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.property.omitExtension"></a>

```java
public java.lang.Boolean|IResolvable getOmitExtension();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration</a>

---


### AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference <a name="AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.acmpca_certificate_authority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference;

new AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.putCrlDistributionPointExtensionConfiguration">putCrlDistributionPointExtensionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resetCrlDistributionPointExtensionConfiguration">resetCrlDistributionPointExtensionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resetCrlType">resetCrlType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resetCustomCname">resetCustomCname</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resetCustomPath">resetCustomPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resetExpirationInDays">resetExpirationInDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resetS3BucketName">resetS3BucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resetS3ObjectAcl">resetS3ObjectAcl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCrlDistributionPointExtensionConfiguration` <a name="putCrlDistributionPointExtensionConfiguration" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.putCrlDistributionPointExtensionConfiguration"></a>

```java
public void putCrlDistributionPointExtensionConfiguration(AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.putCrlDistributionPointExtensionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration</a>

---

##### `resetCrlDistributionPointExtensionConfiguration` <a name="resetCrlDistributionPointExtensionConfiguration" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resetCrlDistributionPointExtensionConfiguration"></a>

```java
public void resetCrlDistributionPointExtensionConfiguration()
```

##### `resetCrlType` <a name="resetCrlType" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resetCrlType"></a>

```java
public void resetCrlType()
```

##### `resetCustomCname` <a name="resetCustomCname" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resetCustomCname"></a>

```java
public void resetCustomCname()
```

##### `resetCustomPath` <a name="resetCustomPath" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resetCustomPath"></a>

```java
public void resetCustomPath()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetExpirationInDays` <a name="resetExpirationInDays" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resetExpirationInDays"></a>

```java
public void resetExpirationInDays()
```

##### `resetS3BucketName` <a name="resetS3BucketName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resetS3BucketName"></a>

```java
public void resetS3BucketName()
```

##### `resetS3ObjectAcl` <a name="resetS3ObjectAcl" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resetS3ObjectAcl"></a>

```java
public void resetS3ObjectAcl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.crlDistributionPointExtensionConfiguration">crlDistributionPointExtensionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference">AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.crlDistributionPointExtensionConfigurationInput">crlDistributionPointExtensionConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.crlTypeInput">crlTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.customCnameInput">customCnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.customPathInput">customPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.expirationInDaysInput">expirationInDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.s3BucketNameInput">s3BucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.s3ObjectAclInput">s3ObjectAclInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.crlType">crlType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.customCname">customCname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.customPath">customPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.expirationInDays">expirationInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.s3BucketName">s3BucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.s3ObjectAcl">s3ObjectAcl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `crlDistributionPointExtensionConfiguration`<sup>Required</sup> <a name="crlDistributionPointExtensionConfiguration" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.crlDistributionPointExtensionConfiguration"></a>

```java
public AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference getCrlDistributionPointExtensionConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference">AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference</a>

---

##### `crlDistributionPointExtensionConfigurationInput`<sup>Optional</sup> <a name="crlDistributionPointExtensionConfigurationInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.crlDistributionPointExtensionConfigurationInput"></a>

```java
public IResolvable|AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration getCrlDistributionPointExtensionConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration</a>

---

##### `crlTypeInput`<sup>Optional</sup> <a name="crlTypeInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.crlTypeInput"></a>

```java
public java.lang.String getCrlTypeInput();
```

- *Type:* java.lang.String

---

##### `customCnameInput`<sup>Optional</sup> <a name="customCnameInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.customCnameInput"></a>

```java
public java.lang.String getCustomCnameInput();
```

- *Type:* java.lang.String

---

##### `customPathInput`<sup>Optional</sup> <a name="customPathInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.customPathInput"></a>

```java
public java.lang.String getCustomPathInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `expirationInDaysInput`<sup>Optional</sup> <a name="expirationInDaysInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.expirationInDaysInput"></a>

```java
public java.lang.Number getExpirationInDaysInput();
```

- *Type:* java.lang.Number

---

##### `s3BucketNameInput`<sup>Optional</sup> <a name="s3BucketNameInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.s3BucketNameInput"></a>

```java
public java.lang.String getS3BucketNameInput();
```

- *Type:* java.lang.String

---

##### `s3ObjectAclInput`<sup>Optional</sup> <a name="s3ObjectAclInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.s3ObjectAclInput"></a>

```java
public java.lang.String getS3ObjectAclInput();
```

- *Type:* java.lang.String

---

##### `crlType`<sup>Required</sup> <a name="crlType" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.crlType"></a>

```java
public java.lang.String getCrlType();
```

- *Type:* java.lang.String

---

##### `customCname`<sup>Required</sup> <a name="customCname" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.customCname"></a>

```java
public java.lang.String getCustomCname();
```

- *Type:* java.lang.String

---

##### `customPath`<sup>Required</sup> <a name="customPath" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.customPath"></a>

```java
public java.lang.String getCustomPath();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `expirationInDays`<sup>Required</sup> <a name="expirationInDays" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.expirationInDays"></a>

```java
public java.lang.Number getExpirationInDays();
```

- *Type:* java.lang.Number

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.s3BucketName"></a>

```java
public java.lang.String getS3BucketName();
```

- *Type:* java.lang.String

---

##### `s3ObjectAcl`<sup>Required</sup> <a name="s3ObjectAcl" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.s3ObjectAcl"></a>

```java
public java.lang.String getS3ObjectAcl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration</a>

---


### AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference <a name="AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.acmpca_certificate_authority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference;

new AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.resetOcspCustomCname">resetOcspCustomCname</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetOcspCustomCname` <a name="resetOcspCustomCname" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.resetOcspCustomCname"></a>

```java
public void resetOcspCustomCname()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.ocspCustomCnameInput">ocspCustomCnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.ocspCustomCname">ocspCustomCname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `ocspCustomCnameInput`<sup>Optional</sup> <a name="ocspCustomCnameInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.ocspCustomCnameInput"></a>

```java
public java.lang.String getOcspCustomCnameInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `ocspCustomCname`<sup>Required</sup> <a name="ocspCustomCname" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.ocspCustomCname"></a>

```java
public java.lang.String getOcspCustomCname();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration</a>

---


### AcmpcaCertificateAuthorityRevocationConfigurationOutputReference <a name="AcmpcaCertificateAuthorityRevocationConfigurationOutputReference" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.acmpca_certificate_authority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference;

new AcmpcaCertificateAuthorityRevocationConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.putCrlConfiguration">putCrlConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.putOcspConfiguration">putOcspConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.resetCrlConfiguration">resetCrlConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.resetOcspConfiguration">resetOcspConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCrlConfiguration` <a name="putCrlConfiguration" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.putCrlConfiguration"></a>

```java
public void putCrlConfiguration(AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.putCrlConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration</a>

---

##### `putOcspConfiguration` <a name="putOcspConfiguration" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.putOcspConfiguration"></a>

```java
public void putOcspConfiguration(AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.putOcspConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration</a>

---

##### `resetCrlConfiguration` <a name="resetCrlConfiguration" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.resetCrlConfiguration"></a>

```java
public void resetCrlConfiguration()
```

##### `resetOcspConfiguration` <a name="resetOcspConfiguration" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.resetOcspConfiguration"></a>

```java
public void resetOcspConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.crlConfiguration">crlConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference">AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.ocspConfiguration">ocspConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference">AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.crlConfigurationInput">crlConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.ocspConfigurationInput">ocspConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfiguration">AcmpcaCertificateAuthorityRevocationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `crlConfiguration`<sup>Required</sup> <a name="crlConfiguration" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.crlConfiguration"></a>

```java
public AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference getCrlConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference">AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference</a>

---

##### `ocspConfiguration`<sup>Required</sup> <a name="ocspConfiguration" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.ocspConfiguration"></a>

```java
public AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference getOcspConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference">AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference</a>

---

##### `crlConfigurationInput`<sup>Optional</sup> <a name="crlConfigurationInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.crlConfigurationInput"></a>

```java
public IResolvable|AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration getCrlConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration</a>

---

##### `ocspConfigurationInput`<sup>Optional</sup> <a name="ocspConfigurationInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.ocspConfigurationInput"></a>

```java
public IResolvable|AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration getOcspConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|AcmpcaCertificateAuthorityRevocationConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfiguration">AcmpcaCertificateAuthorityRevocationConfiguration</a>

---


### AcmpcaCertificateAuthoritySubjectCustomAttributesList <a name="AcmpcaCertificateAuthoritySubjectCustomAttributesList" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.acmpca_certificate_authority.AcmpcaCertificateAuthoritySubjectCustomAttributesList;

new AcmpcaCertificateAuthoritySubjectCustomAttributesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.get"></a>

```java
public AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributes">AcmpcaCertificateAuthoritySubjectCustomAttributes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AcmpcaCertificateAuthoritySubjectCustomAttributes> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributes">AcmpcaCertificateAuthoritySubjectCustomAttributes</a>>

---


### AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference <a name="AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.acmpca_certificate_authority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference;

new AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.resetObjectIdentifier">resetObjectIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetObjectIdentifier` <a name="resetObjectIdentifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.resetObjectIdentifier"></a>

```java
public void resetObjectIdentifier()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.property.objectIdentifierInput">objectIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.property.objectIdentifier">objectIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributes">AcmpcaCertificateAuthoritySubjectCustomAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `objectIdentifierInput`<sup>Optional</sup> <a name="objectIdentifierInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.property.objectIdentifierInput"></a>

```java
public java.lang.String getObjectIdentifierInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `objectIdentifier`<sup>Required</sup> <a name="objectIdentifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.property.objectIdentifier"></a>

```java
public java.lang.String getObjectIdentifier();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.property.internalValue"></a>

```java
public IResolvable|AcmpcaCertificateAuthoritySubjectCustomAttributes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributes">AcmpcaCertificateAuthoritySubjectCustomAttributes</a>

---


### AcmpcaCertificateAuthoritySubjectOutputReference <a name="AcmpcaCertificateAuthoritySubjectOutputReference" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.acmpca_certificate_authority.AcmpcaCertificateAuthoritySubjectOutputReference;

new AcmpcaCertificateAuthoritySubjectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.putCustomAttributes">putCustomAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetCommonName">resetCommonName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetCountry">resetCountry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetCustomAttributes">resetCustomAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetDistinguishedNameQualifier">resetDistinguishedNameQualifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetGenerationQualifier">resetGenerationQualifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetGivenName">resetGivenName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetInitials">resetInitials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetLocality">resetLocality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetOrganization">resetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetOrganizationalUnit">resetOrganizationalUnit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetPseudonym">resetPseudonym</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetSerialNumber">resetSerialNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetSurname">resetSurname</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomAttributes` <a name="putCustomAttributes" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.putCustomAttributes"></a>

```java
public void putCustomAttributes(IResolvable|java.util.List<AcmpcaCertificateAuthoritySubjectCustomAttributes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.putCustomAttributes.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributes">AcmpcaCertificateAuthoritySubjectCustomAttributes</a>>

---

##### `resetCommonName` <a name="resetCommonName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetCommonName"></a>

```java
public void resetCommonName()
```

##### `resetCountry` <a name="resetCountry" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetCountry"></a>

```java
public void resetCountry()
```

##### `resetCustomAttributes` <a name="resetCustomAttributes" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetCustomAttributes"></a>

```java
public void resetCustomAttributes()
```

##### `resetDistinguishedNameQualifier` <a name="resetDistinguishedNameQualifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetDistinguishedNameQualifier"></a>

```java
public void resetDistinguishedNameQualifier()
```

##### `resetGenerationQualifier` <a name="resetGenerationQualifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetGenerationQualifier"></a>

```java
public void resetGenerationQualifier()
```

##### `resetGivenName` <a name="resetGivenName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetGivenName"></a>

```java
public void resetGivenName()
```

##### `resetInitials` <a name="resetInitials" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetInitials"></a>

```java
public void resetInitials()
```

##### `resetLocality` <a name="resetLocality" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetLocality"></a>

```java
public void resetLocality()
```

##### `resetOrganization` <a name="resetOrganization" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetOrganization"></a>

```java
public void resetOrganization()
```

##### `resetOrganizationalUnit` <a name="resetOrganizationalUnit" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetOrganizationalUnit"></a>

```java
public void resetOrganizationalUnit()
```

##### `resetPseudonym` <a name="resetPseudonym" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetPseudonym"></a>

```java
public void resetPseudonym()
```

##### `resetSerialNumber` <a name="resetSerialNumber" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetSerialNumber"></a>

```java
public void resetSerialNumber()
```

##### `resetState` <a name="resetState" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetState"></a>

```java
public void resetState()
```

##### `resetSurname` <a name="resetSurname" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetSurname"></a>

```java
public void resetSurname()
```

##### `resetTitle` <a name="resetTitle" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetTitle"></a>

```java
public void resetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.customAttributes">customAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList">AcmpcaCertificateAuthoritySubjectCustomAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.commonNameInput">commonNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.countryInput">countryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.customAttributesInput">customAttributesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributes">AcmpcaCertificateAuthoritySubjectCustomAttributes</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.distinguishedNameQualifierInput">distinguishedNameQualifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.generationQualifierInput">generationQualifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.givenNameInput">givenNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.initialsInput">initialsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.localityInput">localityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.organizationalUnitInput">organizationalUnitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.organizationInput">organizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.pseudonymInput">pseudonymInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.serialNumberInput">serialNumberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.surnameInput">surnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.commonName">commonName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.country">country</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.distinguishedNameQualifier">distinguishedNameQualifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.generationQualifier">generationQualifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.givenName">givenName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.initials">initials</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.locality">locality</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.organization">organization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.organizationalUnit">organizationalUnit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.pseudonym">pseudonym</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.serialNumber">serialNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.surname">surname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject">AcmpcaCertificateAuthoritySubject</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customAttributes`<sup>Required</sup> <a name="customAttributes" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.customAttributes"></a>

```java
public AcmpcaCertificateAuthoritySubjectCustomAttributesList getCustomAttributes();
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList">AcmpcaCertificateAuthoritySubjectCustomAttributesList</a>

---

##### `commonNameInput`<sup>Optional</sup> <a name="commonNameInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.commonNameInput"></a>

```java
public java.lang.String getCommonNameInput();
```

- *Type:* java.lang.String

---

##### `countryInput`<sup>Optional</sup> <a name="countryInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.countryInput"></a>

```java
public java.lang.String getCountryInput();
```

- *Type:* java.lang.String

---

##### `customAttributesInput`<sup>Optional</sup> <a name="customAttributesInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.customAttributesInput"></a>

```java
public IResolvable|java.util.List<AcmpcaCertificateAuthoritySubjectCustomAttributes> getCustomAttributesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributes">AcmpcaCertificateAuthoritySubjectCustomAttributes</a>>

---

##### `distinguishedNameQualifierInput`<sup>Optional</sup> <a name="distinguishedNameQualifierInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.distinguishedNameQualifierInput"></a>

```java
public java.lang.String getDistinguishedNameQualifierInput();
```

- *Type:* java.lang.String

---

##### `generationQualifierInput`<sup>Optional</sup> <a name="generationQualifierInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.generationQualifierInput"></a>

```java
public java.lang.String getGenerationQualifierInput();
```

- *Type:* java.lang.String

---

##### `givenNameInput`<sup>Optional</sup> <a name="givenNameInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.givenNameInput"></a>

```java
public java.lang.String getGivenNameInput();
```

- *Type:* java.lang.String

---

##### `initialsInput`<sup>Optional</sup> <a name="initialsInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.initialsInput"></a>

```java
public java.lang.String getInitialsInput();
```

- *Type:* java.lang.String

---

##### `localityInput`<sup>Optional</sup> <a name="localityInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.localityInput"></a>

```java
public java.lang.String getLocalityInput();
```

- *Type:* java.lang.String

---

##### `organizationalUnitInput`<sup>Optional</sup> <a name="organizationalUnitInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.organizationalUnitInput"></a>

```java
public java.lang.String getOrganizationalUnitInput();
```

- *Type:* java.lang.String

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.organizationInput"></a>

```java
public java.lang.String getOrganizationInput();
```

- *Type:* java.lang.String

---

##### `pseudonymInput`<sup>Optional</sup> <a name="pseudonymInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.pseudonymInput"></a>

```java
public java.lang.String getPseudonymInput();
```

- *Type:* java.lang.String

---

##### `serialNumberInput`<sup>Optional</sup> <a name="serialNumberInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.serialNumberInput"></a>

```java
public java.lang.String getSerialNumberInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `surnameInput`<sup>Optional</sup> <a name="surnameInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.surnameInput"></a>

```java
public java.lang.String getSurnameInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `commonName`<sup>Required</sup> <a name="commonName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.commonName"></a>

```java
public java.lang.String getCommonName();
```

- *Type:* java.lang.String

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.country"></a>

```java
public java.lang.String getCountry();
```

- *Type:* java.lang.String

---

##### `distinguishedNameQualifier`<sup>Required</sup> <a name="distinguishedNameQualifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.distinguishedNameQualifier"></a>

```java
public java.lang.String getDistinguishedNameQualifier();
```

- *Type:* java.lang.String

---

##### `generationQualifier`<sup>Required</sup> <a name="generationQualifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.generationQualifier"></a>

```java
public java.lang.String getGenerationQualifier();
```

- *Type:* java.lang.String

---

##### `givenName`<sup>Required</sup> <a name="givenName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.givenName"></a>

```java
public java.lang.String getGivenName();
```

- *Type:* java.lang.String

---

##### `initials`<sup>Required</sup> <a name="initials" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.initials"></a>

```java
public java.lang.String getInitials();
```

- *Type:* java.lang.String

---

##### `locality`<sup>Required</sup> <a name="locality" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.locality"></a>

```java
public java.lang.String getLocality();
```

- *Type:* java.lang.String

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

---

##### `organizationalUnit`<sup>Required</sup> <a name="organizationalUnit" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.organizationalUnit"></a>

```java
public java.lang.String getOrganizationalUnit();
```

- *Type:* java.lang.String

---

##### `pseudonym`<sup>Required</sup> <a name="pseudonym" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.pseudonym"></a>

```java
public java.lang.String getPseudonym();
```

- *Type:* java.lang.String

---

##### `serialNumber`<sup>Required</sup> <a name="serialNumber" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.serialNumber"></a>

```java
public java.lang.String getSerialNumber();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `surname`<sup>Required</sup> <a name="surname" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.surname"></a>

```java
public java.lang.String getSurname();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.internalValue"></a>

```java
public IResolvable|AcmpcaCertificateAuthoritySubject getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject">AcmpcaCertificateAuthoritySubject</a>

---


### AcmpcaCertificateAuthorityTagsList <a name="AcmpcaCertificateAuthorityTagsList" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.acmpca_certificate_authority.AcmpcaCertificateAuthorityTagsList;

new AcmpcaCertificateAuthorityTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.get"></a>

```java
public AcmpcaCertificateAuthorityTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTags">AcmpcaCertificateAuthorityTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AcmpcaCertificateAuthorityTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTags">AcmpcaCertificateAuthorityTags</a>>

---


### AcmpcaCertificateAuthorityTagsOutputReference <a name="AcmpcaCertificateAuthorityTagsOutputReference" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.acmpca_certificate_authority.AcmpcaCertificateAuthorityTagsOutputReference;

new AcmpcaCertificateAuthorityTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTags">AcmpcaCertificateAuthorityTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|AcmpcaCertificateAuthorityTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTags">AcmpcaCertificateAuthorityTags</a>

---



