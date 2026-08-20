# `certificatemanagerAcmeExternalAccountBinding` Submodule <a name="`certificatemanagerAcmeExternalAccountBinding` Submodule" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CertificatemanagerAcmeExternalAccountBinding <a name="CertificatemanagerAcmeExternalAccountBinding" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_acme_external_account_binding awscc_certificatemanager_acme_external_account_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.Initializer"></a>

```java
import io.cdktn.providers.awscc.certificatemanager_acme_external_account_binding.CertificatemanagerAcmeExternalAccountBinding;

CertificatemanagerAcmeExternalAccountBinding.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .acmeEndpointArn(java.lang.String)
    .roleArn(java.lang.String)
//  .expiration(CertificatemanagerAcmeExternalAccountBindingExpiration)
//  .tags(IResolvable|java.util.List<CertificatemanagerAcmeExternalAccountBindingTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.acmeEndpointArn">acmeEndpointArn</a></code> | <code>java.lang.String</code> | The ARN of the ACME endpoint this binding is associated with. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.roleArn">roleArn</a></code> | <code>java.lang.String</code> | The IAM role ARN for cross-account access. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.expiration">expiration</a></code> | <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpiration">CertificatemanagerAcmeExternalAccountBindingExpiration</a></code> | The expiration configuration for the external account binding. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTags">CertificatemanagerAcmeExternalAccountBindingTags</a>></code> | Tags associated with the external account binding. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `acmeEndpointArn`<sup>Required</sup> <a name="acmeEndpointArn" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.acmeEndpointArn"></a>

- *Type:* java.lang.String

The ARN of the ACME endpoint this binding is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_acme_external_account_binding#acme_endpoint_arn CertificatemanagerAcmeExternalAccountBinding#acme_endpoint_arn}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.roleArn"></a>

- *Type:* java.lang.String

The IAM role ARN for cross-account access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_acme_external_account_binding#role_arn CertificatemanagerAcmeExternalAccountBinding#role_arn}

---

##### `expiration`<sup>Optional</sup> <a name="expiration" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.expiration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpiration">CertificatemanagerAcmeExternalAccountBindingExpiration</a>

The expiration configuration for the external account binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_acme_external_account_binding#expiration CertificatemanagerAcmeExternalAccountBinding#expiration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTags">CertificatemanagerAcmeExternalAccountBindingTags</a>>

Tags associated with the external account binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_acme_external_account_binding#tags CertificatemanagerAcmeExternalAccountBinding#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.putExpiration">putExpiration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.resetExpiration">resetExpiration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putExpiration` <a name="putExpiration" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.putExpiration"></a>

```java
public void putExpiration(CertificatemanagerAcmeExternalAccountBindingExpiration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.putExpiration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpiration">CertificatemanagerAcmeExternalAccountBindingExpiration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<CertificatemanagerAcmeExternalAccountBindingTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTags">CertificatemanagerAcmeExternalAccountBindingTags</a>>

---

##### `resetExpiration` <a name="resetExpiration" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.resetExpiration"></a>

```java
public void resetExpiration()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CertificatemanagerAcmeExternalAccountBinding resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.isConstruct"></a>

```java
import io.cdktn.providers.awscc.certificatemanager_acme_external_account_binding.CertificatemanagerAcmeExternalAccountBinding;

CertificatemanagerAcmeExternalAccountBinding.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.certificatemanager_acme_external_account_binding.CertificatemanagerAcmeExternalAccountBinding;

CertificatemanagerAcmeExternalAccountBinding.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.certificatemanager_acme_external_account_binding.CertificatemanagerAcmeExternalAccountBinding;

CertificatemanagerAcmeExternalAccountBinding.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.certificatemanager_acme_external_account_binding.CertificatemanagerAcmeExternalAccountBinding;

CertificatemanagerAcmeExternalAccountBinding.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CertificatemanagerAcmeExternalAccountBinding.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CertificatemanagerAcmeExternalAccountBinding resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CertificatemanagerAcmeExternalAccountBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CertificatemanagerAcmeExternalAccountBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_acme_external_account_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CertificatemanagerAcmeExternalAccountBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.acmeExternalAccountBindingArn">acmeExternalAccountBindingArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.expiration">expiration</a></code> | <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference">CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList">CertificatemanagerAcmeExternalAccountBindingTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.acmeEndpointArnInput">acmeEndpointArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.expirationInput">expirationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpiration">CertificatemanagerAcmeExternalAccountBindingExpiration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTags">CertificatemanagerAcmeExternalAccountBindingTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.acmeEndpointArn">acmeEndpointArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `acmeExternalAccountBindingArn`<sup>Required</sup> <a name="acmeExternalAccountBindingArn" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.acmeExternalAccountBindingArn"></a>

```java
public java.lang.String getAcmeExternalAccountBindingArn();
```

- *Type:* java.lang.String

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.expiration"></a>

```java
public CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference getExpiration();
```

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference">CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.tags"></a>

```java
public CertificatemanagerAcmeExternalAccountBindingTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList">CertificatemanagerAcmeExternalAccountBindingTagsList</a>

---

##### `acmeEndpointArnInput`<sup>Optional</sup> <a name="acmeEndpointArnInput" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.acmeEndpointArnInput"></a>

```java
public java.lang.String getAcmeEndpointArnInput();
```

- *Type:* java.lang.String

---

##### `expirationInput`<sup>Optional</sup> <a name="expirationInput" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.expirationInput"></a>

```java
public IResolvable|CertificatemanagerAcmeExternalAccountBindingExpiration getExpirationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpiration">CertificatemanagerAcmeExternalAccountBindingExpiration</a>

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.tagsInput"></a>

```java
public IResolvable|java.util.List<CertificatemanagerAcmeExternalAccountBindingTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTags">CertificatemanagerAcmeExternalAccountBindingTags</a>>

---

##### `acmeEndpointArn`<sup>Required</sup> <a name="acmeEndpointArn" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.acmeEndpointArn"></a>

```java
public java.lang.String getAcmeEndpointArn();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CertificatemanagerAcmeExternalAccountBindingConfig <a name="CertificatemanagerAcmeExternalAccountBindingConfig" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.certificatemanager_acme_external_account_binding.CertificatemanagerAcmeExternalAccountBindingConfig;

CertificatemanagerAcmeExternalAccountBindingConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .acmeEndpointArn(java.lang.String)
    .roleArn(java.lang.String)
//  .expiration(CertificatemanagerAcmeExternalAccountBindingExpiration)
//  .tags(IResolvable|java.util.List<CertificatemanagerAcmeExternalAccountBindingTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.acmeEndpointArn">acmeEndpointArn</a></code> | <code>java.lang.String</code> | The ARN of the ACME endpoint this binding is associated with. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | The IAM role ARN for cross-account access. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.expiration">expiration</a></code> | <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpiration">CertificatemanagerAcmeExternalAccountBindingExpiration</a></code> | The expiration configuration for the external account binding. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTags">CertificatemanagerAcmeExternalAccountBindingTags</a>></code> | Tags associated with the external account binding. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `acmeEndpointArn`<sup>Required</sup> <a name="acmeEndpointArn" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.acmeEndpointArn"></a>

```java
public java.lang.String getAcmeEndpointArn();
```

- *Type:* java.lang.String

The ARN of the ACME endpoint this binding is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_acme_external_account_binding#acme_endpoint_arn CertificatemanagerAcmeExternalAccountBinding#acme_endpoint_arn}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

The IAM role ARN for cross-account access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_acme_external_account_binding#role_arn CertificatemanagerAcmeExternalAccountBinding#role_arn}

---

##### `expiration`<sup>Optional</sup> <a name="expiration" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.expiration"></a>

```java
public CertificatemanagerAcmeExternalAccountBindingExpiration getExpiration();
```

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpiration">CertificatemanagerAcmeExternalAccountBindingExpiration</a>

The expiration configuration for the external account binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_acme_external_account_binding#expiration CertificatemanagerAcmeExternalAccountBinding#expiration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.tags"></a>

```java
public IResolvable|java.util.List<CertificatemanagerAcmeExternalAccountBindingTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTags">CertificatemanagerAcmeExternalAccountBindingTags</a>>

Tags associated with the external account binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_acme_external_account_binding#tags CertificatemanagerAcmeExternalAccountBinding#tags}

---

### CertificatemanagerAcmeExternalAccountBindingExpiration <a name="CertificatemanagerAcmeExternalAccountBindingExpiration" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpiration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpiration.Initializer"></a>

```java
import io.cdktn.providers.awscc.certificatemanager_acme_external_account_binding.CertificatemanagerAcmeExternalAccountBindingExpiration;

CertificatemanagerAcmeExternalAccountBindingExpiration.builder()
//  .type(java.lang.String)
//  .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpiration.property.type">type</a></code> | <code>java.lang.String</code> | The time unit for the expiration value. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpiration.property.value">value</a></code> | <code>java.lang.Number</code> | The expiration value. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpiration.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The time unit for the expiration value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_acme_external_account_binding#type CertificatemanagerAcmeExternalAccountBinding#type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpiration.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

The expiration value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_acme_external_account_binding#value CertificatemanagerAcmeExternalAccountBinding#value}

---

### CertificatemanagerAcmeExternalAccountBindingTags <a name="CertificatemanagerAcmeExternalAccountBindingTags" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.certificatemanager_acme_external_account_binding.CertificatemanagerAcmeExternalAccountBindingTags;

CertificatemanagerAcmeExternalAccountBindingTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_acme_external_account_binding#key CertificatemanagerAcmeExternalAccountBinding#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_acme_external_account_binding#value CertificatemanagerAcmeExternalAccountBinding#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference <a name="CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.certificatemanager_acme_external_account_binding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference;

new CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.resetType"></a>

```java
public void resetType()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpiration">CertificatemanagerAcmeExternalAccountBindingExpiration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.internalValue"></a>

```java
public IResolvable|CertificatemanagerAcmeExternalAccountBindingExpiration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpiration">CertificatemanagerAcmeExternalAccountBindingExpiration</a>

---


### CertificatemanagerAcmeExternalAccountBindingTagsList <a name="CertificatemanagerAcmeExternalAccountBindingTagsList" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.certificatemanager_acme_external_account_binding.CertificatemanagerAcmeExternalAccountBindingTagsList;

new CertificatemanagerAcmeExternalAccountBindingTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.get"></a>

```java
public CertificatemanagerAcmeExternalAccountBindingTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTags">CertificatemanagerAcmeExternalAccountBindingTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CertificatemanagerAcmeExternalAccountBindingTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTags">CertificatemanagerAcmeExternalAccountBindingTags</a>>

---


### CertificatemanagerAcmeExternalAccountBindingTagsOutputReference <a name="CertificatemanagerAcmeExternalAccountBindingTagsOutputReference" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.certificatemanager_acme_external_account_binding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference;

new CertificatemanagerAcmeExternalAccountBindingTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTags">CertificatemanagerAcmeExternalAccountBindingTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|CertificatemanagerAcmeExternalAccountBindingTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTags">CertificatemanagerAcmeExternalAccountBindingTags</a>

---



