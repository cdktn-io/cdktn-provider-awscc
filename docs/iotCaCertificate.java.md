# `iotCaCertificate` Submodule <a name="`iotCaCertificate` Submodule" id="@cdktn/provider-awscc.iotCaCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotCaCertificate <a name="IotCaCertificate" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate awscc_iot_ca_certificate}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_ca_certificate.IotCaCertificate;

IotCaCertificate.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .caCertificatePem(java.lang.String)
    .status(java.lang.String)
//  .autoRegistrationStatus(java.lang.String)
//  .certificateMode(java.lang.String)
//  .registrationConfig(IotCaCertificateRegistrationConfig)
//  .removeAutoRegistration(java.lang.Boolean|IResolvable)
//  .tags(IResolvable|java.util.List<IotCaCertificateTags>)
//  .verificationCertificatePem(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.caCertificatePem">caCertificatePem</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#ca_certificate_pem IotCaCertificate#ca_certificate_pem}. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#status IotCaCertificate#status}. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.autoRegistrationStatus">autoRegistrationStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#auto_registration_status IotCaCertificate#auto_registration_status}. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.certificateMode">certificateMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#certificate_mode IotCaCertificate#certificate_mode}. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.registrationConfig">registrationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfig">IotCaCertificateRegistrationConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#registration_config IotCaCertificate#registration_config}. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.removeAutoRegistration">removeAutoRegistration</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#remove_auto_registration IotCaCertificate#remove_auto_registration}. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTags">IotCaCertificateTags</a>></code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.verificationCertificatePem">verificationCertificatePem</a></code> | <code>java.lang.String</code> | The private key verification certificate. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `caCertificatePem`<sup>Required</sup> <a name="caCertificatePem" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.caCertificatePem"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#ca_certificate_pem IotCaCertificate#ca_certificate_pem}.

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#status IotCaCertificate#status}.

---

##### `autoRegistrationStatus`<sup>Optional</sup> <a name="autoRegistrationStatus" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.autoRegistrationStatus"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#auto_registration_status IotCaCertificate#auto_registration_status}.

---

##### `certificateMode`<sup>Optional</sup> <a name="certificateMode" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.certificateMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#certificate_mode IotCaCertificate#certificate_mode}.

---

##### `registrationConfig`<sup>Optional</sup> <a name="registrationConfig" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.registrationConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfig">IotCaCertificateRegistrationConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#registration_config IotCaCertificate#registration_config}.

---

##### `removeAutoRegistration`<sup>Optional</sup> <a name="removeAutoRegistration" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.removeAutoRegistration"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#remove_auto_registration IotCaCertificate#remove_auto_registration}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTags">IotCaCertificateTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#tags IotCaCertificate#tags}

---

##### `verificationCertificatePem`<sup>Optional</sup> <a name="verificationCertificatePem" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.verificationCertificatePem"></a>

- *Type:* java.lang.String

The private key verification certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#verification_certificate_pem IotCaCertificate#verification_certificate_pem}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.putRegistrationConfig">putRegistrationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.resetAutoRegistrationStatus">resetAutoRegistrationStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.resetCertificateMode">resetCertificateMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.resetRegistrationConfig">resetRegistrationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.resetRemoveAutoRegistration">resetRemoveAutoRegistration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.resetVerificationCertificatePem">resetVerificationCertificatePem</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRegistrationConfig` <a name="putRegistrationConfig" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.putRegistrationConfig"></a>

```java
public void putRegistrationConfig(IotCaCertificateRegistrationConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.putRegistrationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfig">IotCaCertificateRegistrationConfig</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<IotCaCertificateTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTags">IotCaCertificateTags</a>>

---

##### `resetAutoRegistrationStatus` <a name="resetAutoRegistrationStatus" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.resetAutoRegistrationStatus"></a>

```java
public void resetAutoRegistrationStatus()
```

##### `resetCertificateMode` <a name="resetCertificateMode" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.resetCertificateMode"></a>

```java
public void resetCertificateMode()
```

##### `resetRegistrationConfig` <a name="resetRegistrationConfig" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.resetRegistrationConfig"></a>

```java
public void resetRegistrationConfig()
```

##### `resetRemoveAutoRegistration` <a name="resetRemoveAutoRegistration" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.resetRemoveAutoRegistration"></a>

```java
public void resetRemoveAutoRegistration()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.resetTags"></a>

```java
public void resetTags()
```

##### `resetVerificationCertificatePem` <a name="resetVerificationCertificatePem" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.resetVerificationCertificatePem"></a>

```java
public void resetVerificationCertificatePem()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IotCaCertificate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.isConstruct"></a>

```java
import io.cdktn.providers.awscc.iot_ca_certificate.IotCaCertificate;

IotCaCertificate.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.iot_ca_certificate.IotCaCertificate;

IotCaCertificate.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.iot_ca_certificate.IotCaCertificate;

IotCaCertificate.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.iot_ca_certificate.IotCaCertificate;

IotCaCertificate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IotCaCertificate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a IotCaCertificate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IotCaCertificate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IotCaCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the IotCaCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.caCertificateId">caCertificateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.registrationConfig">registrationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference">IotCaCertificateRegistrationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList">IotCaCertificateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.autoRegistrationStatusInput">autoRegistrationStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.caCertificatePemInput">caCertificatePemInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.certificateModeInput">certificateModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.registrationConfigInput">registrationConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfig">IotCaCertificateRegistrationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.removeAutoRegistrationInput">removeAutoRegistrationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTags">IotCaCertificateTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.verificationCertificatePemInput">verificationCertificatePemInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.autoRegistrationStatus">autoRegistrationStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.caCertificatePem">caCertificatePem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.certificateMode">certificateMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.removeAutoRegistration">removeAutoRegistration</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.verificationCertificatePem">verificationCertificatePem</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `caCertificateId`<sup>Required</sup> <a name="caCertificateId" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.caCertificateId"></a>

```java
public java.lang.String getCaCertificateId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `registrationConfig`<sup>Required</sup> <a name="registrationConfig" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.registrationConfig"></a>

```java
public IotCaCertificateRegistrationConfigOutputReference getRegistrationConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference">IotCaCertificateRegistrationConfigOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.tags"></a>

```java
public IotCaCertificateTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList">IotCaCertificateTagsList</a>

---

##### `autoRegistrationStatusInput`<sup>Optional</sup> <a name="autoRegistrationStatusInput" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.autoRegistrationStatusInput"></a>

```java
public java.lang.String getAutoRegistrationStatusInput();
```

- *Type:* java.lang.String

---

##### `caCertificatePemInput`<sup>Optional</sup> <a name="caCertificatePemInput" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.caCertificatePemInput"></a>

```java
public java.lang.String getCaCertificatePemInput();
```

- *Type:* java.lang.String

---

##### `certificateModeInput`<sup>Optional</sup> <a name="certificateModeInput" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.certificateModeInput"></a>

```java
public java.lang.String getCertificateModeInput();
```

- *Type:* java.lang.String

---

##### `registrationConfigInput`<sup>Optional</sup> <a name="registrationConfigInput" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.registrationConfigInput"></a>

```java
public IResolvable|IotCaCertificateRegistrationConfig getRegistrationConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfig">IotCaCertificateRegistrationConfig</a>

---

##### `removeAutoRegistrationInput`<sup>Optional</sup> <a name="removeAutoRegistrationInput" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.removeAutoRegistrationInput"></a>

```java
public java.lang.Boolean|IResolvable getRemoveAutoRegistrationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.tagsInput"></a>

```java
public IResolvable|java.util.List<IotCaCertificateTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTags">IotCaCertificateTags</a>>

---

##### `verificationCertificatePemInput`<sup>Optional</sup> <a name="verificationCertificatePemInput" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.verificationCertificatePemInput"></a>

```java
public java.lang.String getVerificationCertificatePemInput();
```

- *Type:* java.lang.String

---

##### `autoRegistrationStatus`<sup>Required</sup> <a name="autoRegistrationStatus" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.autoRegistrationStatus"></a>

```java
public java.lang.String getAutoRegistrationStatus();
```

- *Type:* java.lang.String

---

##### `caCertificatePem`<sup>Required</sup> <a name="caCertificatePem" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.caCertificatePem"></a>

```java
public java.lang.String getCaCertificatePem();
```

- *Type:* java.lang.String

---

##### `certificateMode`<sup>Required</sup> <a name="certificateMode" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.certificateMode"></a>

```java
public java.lang.String getCertificateMode();
```

- *Type:* java.lang.String

---

##### `removeAutoRegistration`<sup>Required</sup> <a name="removeAutoRegistration" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.removeAutoRegistration"></a>

```java
public java.lang.Boolean|IResolvable getRemoveAutoRegistration();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `verificationCertificatePem`<sup>Required</sup> <a name="verificationCertificatePem" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.verificationCertificatePem"></a>

```java
public java.lang.String getVerificationCertificatePem();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IotCaCertificateConfig <a name="IotCaCertificateConfig" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_ca_certificate.IotCaCertificateConfig;

IotCaCertificateConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .caCertificatePem(java.lang.String)
    .status(java.lang.String)
//  .autoRegistrationStatus(java.lang.String)
//  .certificateMode(java.lang.String)
//  .registrationConfig(IotCaCertificateRegistrationConfig)
//  .removeAutoRegistration(java.lang.Boolean|IResolvable)
//  .tags(IResolvable|java.util.List<IotCaCertificateTags>)
//  .verificationCertificatePem(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.caCertificatePem">caCertificatePem</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#ca_certificate_pem IotCaCertificate#ca_certificate_pem}. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#status IotCaCertificate#status}. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.autoRegistrationStatus">autoRegistrationStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#auto_registration_status IotCaCertificate#auto_registration_status}. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.certificateMode">certificateMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#certificate_mode IotCaCertificate#certificate_mode}. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.registrationConfig">registrationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfig">IotCaCertificateRegistrationConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#registration_config IotCaCertificate#registration_config}. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.removeAutoRegistration">removeAutoRegistration</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#remove_auto_registration IotCaCertificate#remove_auto_registration}. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTags">IotCaCertificateTags</a>></code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.verificationCertificatePem">verificationCertificatePem</a></code> | <code>java.lang.String</code> | The private key verification certificate. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `caCertificatePem`<sup>Required</sup> <a name="caCertificatePem" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.caCertificatePem"></a>

```java
public java.lang.String getCaCertificatePem();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#ca_certificate_pem IotCaCertificate#ca_certificate_pem}.

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#status IotCaCertificate#status}.

---

##### `autoRegistrationStatus`<sup>Optional</sup> <a name="autoRegistrationStatus" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.autoRegistrationStatus"></a>

```java
public java.lang.String getAutoRegistrationStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#auto_registration_status IotCaCertificate#auto_registration_status}.

---

##### `certificateMode`<sup>Optional</sup> <a name="certificateMode" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.certificateMode"></a>

```java
public java.lang.String getCertificateMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#certificate_mode IotCaCertificate#certificate_mode}.

---

##### `registrationConfig`<sup>Optional</sup> <a name="registrationConfig" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.registrationConfig"></a>

```java
public IotCaCertificateRegistrationConfig getRegistrationConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfig">IotCaCertificateRegistrationConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#registration_config IotCaCertificate#registration_config}.

---

##### `removeAutoRegistration`<sup>Optional</sup> <a name="removeAutoRegistration" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.removeAutoRegistration"></a>

```java
public java.lang.Boolean|IResolvable getRemoveAutoRegistration();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#remove_auto_registration IotCaCertificate#remove_auto_registration}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.tags"></a>

```java
public IResolvable|java.util.List<IotCaCertificateTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTags">IotCaCertificateTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#tags IotCaCertificate#tags}

---

##### `verificationCertificatePem`<sup>Optional</sup> <a name="verificationCertificatePem" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.verificationCertificatePem"></a>

```java
public java.lang.String getVerificationCertificatePem();
```

- *Type:* java.lang.String

The private key verification certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#verification_certificate_pem IotCaCertificate#verification_certificate_pem}

---

### IotCaCertificateRegistrationConfig <a name="IotCaCertificateRegistrationConfig" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_ca_certificate.IotCaCertificateRegistrationConfig;

IotCaCertificateRegistrationConfig.builder()
//  .roleArn(java.lang.String)
//  .templateBody(java.lang.String)
//  .templateName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#role_arn IotCaCertificate#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfig.property.templateBody">templateBody</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#template_body IotCaCertificate#template_body}. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfig.property.templateName">templateName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#template_name IotCaCertificate#template_name}. |

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#role_arn IotCaCertificate#role_arn}.

---

##### `templateBody`<sup>Optional</sup> <a name="templateBody" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfig.property.templateBody"></a>

```java
public java.lang.String getTemplateBody();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#template_body IotCaCertificate#template_body}.

---

##### `templateName`<sup>Optional</sup> <a name="templateName" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfig.property.templateName"></a>

```java
public java.lang.String getTemplateName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#template_name IotCaCertificate#template_name}.

---

### IotCaCertificateTags <a name="IotCaCertificateTags" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_ca_certificate.IotCaCertificateTags;

IotCaCertificateTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#key IotCaCertificate#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#value IotCaCertificate#value}

---

## Classes <a name="Classes" id="Classes"></a>

### IotCaCertificateRegistrationConfigOutputReference <a name="IotCaCertificateRegistrationConfigOutputReference" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_ca_certificate.IotCaCertificateRegistrationConfigOutputReference;

new IotCaCertificateRegistrationConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.resetTemplateBody">resetTemplateBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.resetTemplateName">resetTemplateName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.resetRoleArn"></a>

```java
public void resetRoleArn()
```

##### `resetTemplateBody` <a name="resetTemplateBody" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.resetTemplateBody"></a>

```java
public void resetTemplateBody()
```

##### `resetTemplateName` <a name="resetTemplateName" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.resetTemplateName"></a>

```java
public void resetTemplateName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.templateBodyInput">templateBodyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.templateNameInput">templateNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.templateBody">templateBody</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.templateName">templateName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfig">IotCaCertificateRegistrationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `templateBodyInput`<sup>Optional</sup> <a name="templateBodyInput" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.templateBodyInput"></a>

```java
public java.lang.String getTemplateBodyInput();
```

- *Type:* java.lang.String

---

##### `templateNameInput`<sup>Optional</sup> <a name="templateNameInput" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.templateNameInput"></a>

```java
public java.lang.String getTemplateNameInput();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `templateBody`<sup>Required</sup> <a name="templateBody" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.templateBody"></a>

```java
public java.lang.String getTemplateBody();
```

- *Type:* java.lang.String

---

##### `templateName`<sup>Required</sup> <a name="templateName" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.templateName"></a>

```java
public java.lang.String getTemplateName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|IotCaCertificateRegistrationConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfig">IotCaCertificateRegistrationConfig</a>

---


### IotCaCertificateTagsList <a name="IotCaCertificateTagsList" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_ca_certificate.IotCaCertificateTagsList;

new IotCaCertificateTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.get"></a>

```java
public IotCaCertificateTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTags">IotCaCertificateTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<IotCaCertificateTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTags">IotCaCertificateTags</a>>

---


### IotCaCertificateTagsOutputReference <a name="IotCaCertificateTagsOutputReference" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_ca_certificate.IotCaCertificateTagsOutputReference;

new IotCaCertificateTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTags">IotCaCertificateTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|IotCaCertificateTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTags">IotCaCertificateTags</a>

---



