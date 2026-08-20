# `lightsailLoadBalancerTlsCertificate` Submodule <a name="`lightsailLoadBalancerTlsCertificate` Submodule" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LightsailLoadBalancerTlsCertificate <a name="LightsailLoadBalancerTlsCertificate" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_load_balancer_tls_certificate awscc_lightsail_load_balancer_tls_certificate}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer"></a>

```java
import io.cdktn.providers.awscc.lightsail_load_balancer_tls_certificate.LightsailLoadBalancerTlsCertificate;

LightsailLoadBalancerTlsCertificate.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .certificateDomainName(java.lang.String)
    .certificateName(java.lang.String)
    .loadBalancerName(java.lang.String)
//  .certificateAlternativeNames(java.util.List<java.lang.String>)
//  .httpsRedirectionEnabled(java.lang.Boolean|IResolvable)
//  .isAttached(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.certificateDomainName">certificateDomainName</a></code> | <code>java.lang.String</code> | The domain name (e.g., example.com ) for your SSL/TLS certificate. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.certificateName">certificateName</a></code> | <code>java.lang.String</code> | The SSL/TLS certificate name. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.loadBalancerName">loadBalancerName</a></code> | <code>java.lang.String</code> | The name of your load balancer. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.certificateAlternativeNames">certificateAlternativeNames</a></code> | <code>java.util.List<java.lang.String></code> | An array of strings listing alternative domains and subdomains for your SSL/TLS certificate. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.httpsRedirectionEnabled">httpsRedirectionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A Boolean value that indicates whether HTTPS redirection is enabled for the load balancer. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.isAttached">isAttached</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When true, the SSL/TLS certificate is attached to the Lightsail load balancer. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `certificateDomainName`<sup>Required</sup> <a name="certificateDomainName" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.certificateDomainName"></a>

- *Type:* java.lang.String

The domain name (e.g., example.com ) for your SSL/TLS certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_load_balancer_tls_certificate#certificate_domain_name LightsailLoadBalancerTlsCertificate#certificate_domain_name}

---

##### `certificateName`<sup>Required</sup> <a name="certificateName" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.certificateName"></a>

- *Type:* java.lang.String

The SSL/TLS certificate name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_load_balancer_tls_certificate#certificate_name LightsailLoadBalancerTlsCertificate#certificate_name}

---

##### `loadBalancerName`<sup>Required</sup> <a name="loadBalancerName" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.loadBalancerName"></a>

- *Type:* java.lang.String

The name of your load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_load_balancer_tls_certificate#load_balancer_name LightsailLoadBalancerTlsCertificate#load_balancer_name}

---

##### `certificateAlternativeNames`<sup>Optional</sup> <a name="certificateAlternativeNames" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.certificateAlternativeNames"></a>

- *Type:* java.util.List<java.lang.String>

An array of strings listing alternative domains and subdomains for your SSL/TLS certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_load_balancer_tls_certificate#certificate_alternative_names LightsailLoadBalancerTlsCertificate#certificate_alternative_names}

---

##### `httpsRedirectionEnabled`<sup>Optional</sup> <a name="httpsRedirectionEnabled" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.httpsRedirectionEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A Boolean value that indicates whether HTTPS redirection is enabled for the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_load_balancer_tls_certificate#https_redirection_enabled LightsailLoadBalancerTlsCertificate#https_redirection_enabled}

---

##### `isAttached`<sup>Optional</sup> <a name="isAttached" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.isAttached"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When true, the SSL/TLS certificate is attached to the Lightsail load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_load_balancer_tls_certificate#is_attached LightsailLoadBalancerTlsCertificate#is_attached}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.resetCertificateAlternativeNames">resetCertificateAlternativeNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.resetHttpsRedirectionEnabled">resetHttpsRedirectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.resetIsAttached">resetIsAttached</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCertificateAlternativeNames` <a name="resetCertificateAlternativeNames" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.resetCertificateAlternativeNames"></a>

```java
public void resetCertificateAlternativeNames()
```

##### `resetHttpsRedirectionEnabled` <a name="resetHttpsRedirectionEnabled" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.resetHttpsRedirectionEnabled"></a>

```java
public void resetHttpsRedirectionEnabled()
```

##### `resetIsAttached` <a name="resetIsAttached" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.resetIsAttached"></a>

```java
public void resetIsAttached()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LightsailLoadBalancerTlsCertificate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.isConstruct"></a>

```java
import io.cdktn.providers.awscc.lightsail_load_balancer_tls_certificate.LightsailLoadBalancerTlsCertificate;

LightsailLoadBalancerTlsCertificate.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.lightsail_load_balancer_tls_certificate.LightsailLoadBalancerTlsCertificate;

LightsailLoadBalancerTlsCertificate.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.lightsail_load_balancer_tls_certificate.LightsailLoadBalancerTlsCertificate;

LightsailLoadBalancerTlsCertificate.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.lightsail_load_balancer_tls_certificate.LightsailLoadBalancerTlsCertificate;

LightsailLoadBalancerTlsCertificate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LightsailLoadBalancerTlsCertificate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a LightsailLoadBalancerTlsCertificate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LightsailLoadBalancerTlsCertificate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LightsailLoadBalancerTlsCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_load_balancer_tls_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the LightsailLoadBalancerTlsCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.loadBalancerTlsCertificateArn">loadBalancerTlsCertificateArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.certificateAlternativeNamesInput">certificateAlternativeNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.certificateDomainNameInput">certificateDomainNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.certificateNameInput">certificateNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.httpsRedirectionEnabledInput">httpsRedirectionEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.isAttachedInput">isAttachedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.loadBalancerNameInput">loadBalancerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.certificateAlternativeNames">certificateAlternativeNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.certificateDomainName">certificateDomainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.certificateName">certificateName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.httpsRedirectionEnabled">httpsRedirectionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.isAttached">isAttached</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.loadBalancerName">loadBalancerName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `loadBalancerTlsCertificateArn`<sup>Required</sup> <a name="loadBalancerTlsCertificateArn" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.loadBalancerTlsCertificateArn"></a>

```java
public java.lang.String getLoadBalancerTlsCertificateArn();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `certificateAlternativeNamesInput`<sup>Optional</sup> <a name="certificateAlternativeNamesInput" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.certificateAlternativeNamesInput"></a>

```java
public java.util.List<java.lang.String> getCertificateAlternativeNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `certificateDomainNameInput`<sup>Optional</sup> <a name="certificateDomainNameInput" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.certificateDomainNameInput"></a>

```java
public java.lang.String getCertificateDomainNameInput();
```

- *Type:* java.lang.String

---

##### `certificateNameInput`<sup>Optional</sup> <a name="certificateNameInput" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.certificateNameInput"></a>

```java
public java.lang.String getCertificateNameInput();
```

- *Type:* java.lang.String

---

##### `httpsRedirectionEnabledInput`<sup>Optional</sup> <a name="httpsRedirectionEnabledInput" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.httpsRedirectionEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getHttpsRedirectionEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isAttachedInput`<sup>Optional</sup> <a name="isAttachedInput" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.isAttachedInput"></a>

```java
public java.lang.Boolean|IResolvable getIsAttachedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `loadBalancerNameInput`<sup>Optional</sup> <a name="loadBalancerNameInput" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.loadBalancerNameInput"></a>

```java
public java.lang.String getLoadBalancerNameInput();
```

- *Type:* java.lang.String

---

##### `certificateAlternativeNames`<sup>Required</sup> <a name="certificateAlternativeNames" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.certificateAlternativeNames"></a>

```java
public java.util.List<java.lang.String> getCertificateAlternativeNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `certificateDomainName`<sup>Required</sup> <a name="certificateDomainName" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.certificateDomainName"></a>

```java
public java.lang.String getCertificateDomainName();
```

- *Type:* java.lang.String

---

##### `certificateName`<sup>Required</sup> <a name="certificateName" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.certificateName"></a>

```java
public java.lang.String getCertificateName();
```

- *Type:* java.lang.String

---

##### `httpsRedirectionEnabled`<sup>Required</sup> <a name="httpsRedirectionEnabled" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.httpsRedirectionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getHttpsRedirectionEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isAttached`<sup>Required</sup> <a name="isAttached" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.isAttached"></a>

```java
public java.lang.Boolean|IResolvable getIsAttached();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `loadBalancerName`<sup>Required</sup> <a name="loadBalancerName" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.loadBalancerName"></a>

```java
public java.lang.String getLoadBalancerName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LightsailLoadBalancerTlsCertificateConfig <a name="LightsailLoadBalancerTlsCertificateConfig" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.lightsail_load_balancer_tls_certificate.LightsailLoadBalancerTlsCertificateConfig;

LightsailLoadBalancerTlsCertificateConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .certificateDomainName(java.lang.String)
    .certificateName(java.lang.String)
    .loadBalancerName(java.lang.String)
//  .certificateAlternativeNames(java.util.List<java.lang.String>)
//  .httpsRedirectionEnabled(java.lang.Boolean|IResolvable)
//  .isAttached(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.certificateDomainName">certificateDomainName</a></code> | <code>java.lang.String</code> | The domain name (e.g., example.com ) for your SSL/TLS certificate. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.certificateName">certificateName</a></code> | <code>java.lang.String</code> | The SSL/TLS certificate name. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.loadBalancerName">loadBalancerName</a></code> | <code>java.lang.String</code> | The name of your load balancer. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.certificateAlternativeNames">certificateAlternativeNames</a></code> | <code>java.util.List<java.lang.String></code> | An array of strings listing alternative domains and subdomains for your SSL/TLS certificate. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.httpsRedirectionEnabled">httpsRedirectionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A Boolean value that indicates whether HTTPS redirection is enabled for the load balancer. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.isAttached">isAttached</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When true, the SSL/TLS certificate is attached to the Lightsail load balancer. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `certificateDomainName`<sup>Required</sup> <a name="certificateDomainName" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.certificateDomainName"></a>

```java
public java.lang.String getCertificateDomainName();
```

- *Type:* java.lang.String

The domain name (e.g., example.com ) for your SSL/TLS certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_load_balancer_tls_certificate#certificate_domain_name LightsailLoadBalancerTlsCertificate#certificate_domain_name}

---

##### `certificateName`<sup>Required</sup> <a name="certificateName" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.certificateName"></a>

```java
public java.lang.String getCertificateName();
```

- *Type:* java.lang.String

The SSL/TLS certificate name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_load_balancer_tls_certificate#certificate_name LightsailLoadBalancerTlsCertificate#certificate_name}

---

##### `loadBalancerName`<sup>Required</sup> <a name="loadBalancerName" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.loadBalancerName"></a>

```java
public java.lang.String getLoadBalancerName();
```

- *Type:* java.lang.String

The name of your load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_load_balancer_tls_certificate#load_balancer_name LightsailLoadBalancerTlsCertificate#load_balancer_name}

---

##### `certificateAlternativeNames`<sup>Optional</sup> <a name="certificateAlternativeNames" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.certificateAlternativeNames"></a>

```java
public java.util.List<java.lang.String> getCertificateAlternativeNames();
```

- *Type:* java.util.List<java.lang.String>

An array of strings listing alternative domains and subdomains for your SSL/TLS certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_load_balancer_tls_certificate#certificate_alternative_names LightsailLoadBalancerTlsCertificate#certificate_alternative_names}

---

##### `httpsRedirectionEnabled`<sup>Optional</sup> <a name="httpsRedirectionEnabled" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.httpsRedirectionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getHttpsRedirectionEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A Boolean value that indicates whether HTTPS redirection is enabled for the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_load_balancer_tls_certificate#https_redirection_enabled LightsailLoadBalancerTlsCertificate#https_redirection_enabled}

---

##### `isAttached`<sup>Optional</sup> <a name="isAttached" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.isAttached"></a>

```java
public java.lang.Boolean|IResolvable getIsAttached();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When true, the SSL/TLS certificate is attached to the Lightsail load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_load_balancer_tls_certificate#is_attached LightsailLoadBalancerTlsCertificate#is_attached}

---



