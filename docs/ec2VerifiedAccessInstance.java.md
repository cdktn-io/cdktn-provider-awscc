# `ec2VerifiedAccessInstance` Submodule <a name="`ec2VerifiedAccessInstance` Submodule" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2VerifiedAccessInstance <a name="Ec2VerifiedAccessInstance" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_instance awscc_ec2_verified_access_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_verified_access_instance.Ec2VerifiedAccessInstance;

Ec2VerifiedAccessInstance.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .cidrEndpointsCustomSubDomain(java.lang.String)
//  .description(java.lang.String)
//  .fipsEnabled(java.lang.Boolean|IResolvable)
//  .loggingConfigurations(Ec2VerifiedAccessInstanceLoggingConfigurations)
//  .tags(IResolvable|java.util.List<Ec2VerifiedAccessInstanceTags>)
//  .verifiedAccessTrustProviderIds(java.util.List<java.lang.String>)
//  .verifiedAccessTrustProviders(IResolvable|java.util.List<Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.cidrEndpointsCustomSubDomain">cidrEndpointsCustomSubDomain</a></code> | <code>java.lang.String</code> | Introduce CidrEndpointsCustomSubDomain property to represent the domain (say, ava.my-company.com). |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description for the AWS Verified Access instance. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.fipsEnabled">fipsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether FIPS is enabled. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.loggingConfigurations">loggingConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations">Ec2VerifiedAccessInstanceLoggingConfigurations</a></code> | The configuration options for AWS Verified Access instances. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTags">Ec2VerifiedAccessInstanceTags</a>></code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.verifiedAccessTrustProviderIds">verifiedAccessTrustProviderIds</a></code> | <code>java.util.List<java.lang.String></code> | The IDs of the AWS Verified Access trust providers. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.verifiedAccessTrustProviders">verifiedAccessTrustProviders</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders">Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders</a>></code> | AWS Verified Access trust providers. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cidrEndpointsCustomSubDomain`<sup>Optional</sup> <a name="cidrEndpointsCustomSubDomain" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.cidrEndpointsCustomSubDomain"></a>

- *Type:* java.lang.String

Introduce CidrEndpointsCustomSubDomain property to represent the domain (say, ava.my-company.com).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_instance#cidr_endpoints_custom_sub_domain Ec2VerifiedAccessInstance#cidr_endpoints_custom_sub_domain}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description for the AWS Verified Access instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_instance#description Ec2VerifiedAccessInstance#description}

---

##### `fipsEnabled`<sup>Optional</sup> <a name="fipsEnabled" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.fipsEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether FIPS is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_instance#fips_enabled Ec2VerifiedAccessInstance#fips_enabled}

---

##### `loggingConfigurations`<sup>Optional</sup> <a name="loggingConfigurations" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.loggingConfigurations"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations">Ec2VerifiedAccessInstanceLoggingConfigurations</a>

The configuration options for AWS Verified Access instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_instance#logging_configurations Ec2VerifiedAccessInstance#logging_configurations}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTags">Ec2VerifiedAccessInstanceTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_instance#tags Ec2VerifiedAccessInstance#tags}

---

##### `verifiedAccessTrustProviderIds`<sup>Optional</sup> <a name="verifiedAccessTrustProviderIds" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.verifiedAccessTrustProviderIds"></a>

- *Type:* java.util.List<java.lang.String>

The IDs of the AWS Verified Access trust providers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_instance#verified_access_trust_provider_ids Ec2VerifiedAccessInstance#verified_access_trust_provider_ids}

---

##### `verifiedAccessTrustProviders`<sup>Optional</sup> <a name="verifiedAccessTrustProviders" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.verifiedAccessTrustProviders"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders">Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders</a>>

AWS Verified Access trust providers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_instance#verified_access_trust_providers Ec2VerifiedAccessInstance#verified_access_trust_providers}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.putLoggingConfigurations">putLoggingConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.putVerifiedAccessTrustProviders">putVerifiedAccessTrustProviders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.resetCidrEndpointsCustomSubDomain">resetCidrEndpointsCustomSubDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.resetFipsEnabled">resetFipsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.resetLoggingConfigurations">resetLoggingConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.resetVerifiedAccessTrustProviderIds">resetVerifiedAccessTrustProviderIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.resetVerifiedAccessTrustProviders">resetVerifiedAccessTrustProviders</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLoggingConfigurations` <a name="putLoggingConfigurations" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.putLoggingConfigurations"></a>

```java
public void putLoggingConfigurations(Ec2VerifiedAccessInstanceLoggingConfigurations value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.putLoggingConfigurations.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations">Ec2VerifiedAccessInstanceLoggingConfigurations</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<Ec2VerifiedAccessInstanceTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTags">Ec2VerifiedAccessInstanceTags</a>>

---

##### `putVerifiedAccessTrustProviders` <a name="putVerifiedAccessTrustProviders" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.putVerifiedAccessTrustProviders"></a>

```java
public void putVerifiedAccessTrustProviders(IResolvable|java.util.List<Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.putVerifiedAccessTrustProviders.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders">Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders</a>>

---

##### `resetCidrEndpointsCustomSubDomain` <a name="resetCidrEndpointsCustomSubDomain" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.resetCidrEndpointsCustomSubDomain"></a>

```java
public void resetCidrEndpointsCustomSubDomain()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetFipsEnabled` <a name="resetFipsEnabled" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.resetFipsEnabled"></a>

```java
public void resetFipsEnabled()
```

##### `resetLoggingConfigurations` <a name="resetLoggingConfigurations" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.resetLoggingConfigurations"></a>

```java
public void resetLoggingConfigurations()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.resetTags"></a>

```java
public void resetTags()
```

##### `resetVerifiedAccessTrustProviderIds` <a name="resetVerifiedAccessTrustProviderIds" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.resetVerifiedAccessTrustProviderIds"></a>

```java
public void resetVerifiedAccessTrustProviderIds()
```

##### `resetVerifiedAccessTrustProviders` <a name="resetVerifiedAccessTrustProviders" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.resetVerifiedAccessTrustProviders"></a>

```java
public void resetVerifiedAccessTrustProviders()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2VerifiedAccessInstance resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.isConstruct"></a>

```java
import io.cdktn.providers.awscc.ec2_verified_access_instance.Ec2VerifiedAccessInstance;

Ec2VerifiedAccessInstance.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.ec2_verified_access_instance.Ec2VerifiedAccessInstance;

Ec2VerifiedAccessInstance.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.ec2_verified_access_instance.Ec2VerifiedAccessInstance;

Ec2VerifiedAccessInstance.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.ec2_verified_access_instance.Ec2VerifiedAccessInstance;

Ec2VerifiedAccessInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Ec2VerifiedAccessInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Ec2VerifiedAccessInstance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Ec2VerifiedAccessInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Ec2VerifiedAccessInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Ec2VerifiedAccessInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.cidrEndpointsCustomSubDomainNameServers">cidrEndpointsCustomSubDomainNameServers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.creationTime">creationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.loggingConfigurations">loggingConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference">Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList">Ec2VerifiedAccessInstanceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.verifiedAccessInstanceId">verifiedAccessInstanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.verifiedAccessTrustProviders">verifiedAccessTrustProviders</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList">Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.cidrEndpointsCustomSubDomainInput">cidrEndpointsCustomSubDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.fipsEnabledInput">fipsEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.loggingConfigurationsInput">loggingConfigurationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations">Ec2VerifiedAccessInstanceLoggingConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTags">Ec2VerifiedAccessInstanceTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.verifiedAccessTrustProviderIdsInput">verifiedAccessTrustProviderIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.verifiedAccessTrustProvidersInput">verifiedAccessTrustProvidersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders">Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.cidrEndpointsCustomSubDomain">cidrEndpointsCustomSubDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.fipsEnabled">fipsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.verifiedAccessTrustProviderIds">verifiedAccessTrustProviderIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cidrEndpointsCustomSubDomainNameServers`<sup>Required</sup> <a name="cidrEndpointsCustomSubDomainNameServers" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.cidrEndpointsCustomSubDomainNameServers"></a>

```java
public java.util.List<java.lang.String> getCidrEndpointsCustomSubDomainNameServers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.creationTime"></a>

```java
public java.lang.String getCreationTime();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.lastUpdatedTime"></a>

```java
public java.lang.String getLastUpdatedTime();
```

- *Type:* java.lang.String

---

##### `loggingConfigurations`<sup>Required</sup> <a name="loggingConfigurations" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.loggingConfigurations"></a>

```java
public Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference getLoggingConfigurations();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference">Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.tags"></a>

```java
public Ec2VerifiedAccessInstanceTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList">Ec2VerifiedAccessInstanceTagsList</a>

---

##### `verifiedAccessInstanceId`<sup>Required</sup> <a name="verifiedAccessInstanceId" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.verifiedAccessInstanceId"></a>

```java
public java.lang.String getVerifiedAccessInstanceId();
```

- *Type:* java.lang.String

---

##### `verifiedAccessTrustProviders`<sup>Required</sup> <a name="verifiedAccessTrustProviders" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.verifiedAccessTrustProviders"></a>

```java
public Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList getVerifiedAccessTrustProviders();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList">Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList</a>

---

##### `cidrEndpointsCustomSubDomainInput`<sup>Optional</sup> <a name="cidrEndpointsCustomSubDomainInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.cidrEndpointsCustomSubDomainInput"></a>

```java
public java.lang.String getCidrEndpointsCustomSubDomainInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `fipsEnabledInput`<sup>Optional</sup> <a name="fipsEnabledInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.fipsEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getFipsEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `loggingConfigurationsInput`<sup>Optional</sup> <a name="loggingConfigurationsInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.loggingConfigurationsInput"></a>

```java
public IResolvable|Ec2VerifiedAccessInstanceLoggingConfigurations getLoggingConfigurationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations">Ec2VerifiedAccessInstanceLoggingConfigurations</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.tagsInput"></a>

```java
public IResolvable|java.util.List<Ec2VerifiedAccessInstanceTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTags">Ec2VerifiedAccessInstanceTags</a>>

---

##### `verifiedAccessTrustProviderIdsInput`<sup>Optional</sup> <a name="verifiedAccessTrustProviderIdsInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.verifiedAccessTrustProviderIdsInput"></a>

```java
public java.util.List<java.lang.String> getVerifiedAccessTrustProviderIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `verifiedAccessTrustProvidersInput`<sup>Optional</sup> <a name="verifiedAccessTrustProvidersInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.verifiedAccessTrustProvidersInput"></a>

```java
public IResolvable|java.util.List<Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders> getVerifiedAccessTrustProvidersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders">Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders</a>>

---

##### `cidrEndpointsCustomSubDomain`<sup>Required</sup> <a name="cidrEndpointsCustomSubDomain" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.cidrEndpointsCustomSubDomain"></a>

```java
public java.lang.String getCidrEndpointsCustomSubDomain();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `fipsEnabled`<sup>Required</sup> <a name="fipsEnabled" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.fipsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getFipsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `verifiedAccessTrustProviderIds`<sup>Required</sup> <a name="verifiedAccessTrustProviderIds" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.verifiedAccessTrustProviderIds"></a>

```java
public java.util.List<java.lang.String> getVerifiedAccessTrustProviderIds();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2VerifiedAccessInstanceConfig <a name="Ec2VerifiedAccessInstanceConfig" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_verified_access_instance.Ec2VerifiedAccessInstanceConfig;

Ec2VerifiedAccessInstanceConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .cidrEndpointsCustomSubDomain(java.lang.String)
//  .description(java.lang.String)
//  .fipsEnabled(java.lang.Boolean|IResolvable)
//  .loggingConfigurations(Ec2VerifiedAccessInstanceLoggingConfigurations)
//  .tags(IResolvable|java.util.List<Ec2VerifiedAccessInstanceTags>)
//  .verifiedAccessTrustProviderIds(java.util.List<java.lang.String>)
//  .verifiedAccessTrustProviders(IResolvable|java.util.List<Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.cidrEndpointsCustomSubDomain">cidrEndpointsCustomSubDomain</a></code> | <code>java.lang.String</code> | Introduce CidrEndpointsCustomSubDomain property to represent the domain (say, ava.my-company.com). |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description for the AWS Verified Access instance. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.fipsEnabled">fipsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether FIPS is enabled. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.loggingConfigurations">loggingConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations">Ec2VerifiedAccessInstanceLoggingConfigurations</a></code> | The configuration options for AWS Verified Access instances. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTags">Ec2VerifiedAccessInstanceTags</a>></code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.verifiedAccessTrustProviderIds">verifiedAccessTrustProviderIds</a></code> | <code>java.util.List<java.lang.String></code> | The IDs of the AWS Verified Access trust providers. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.verifiedAccessTrustProviders">verifiedAccessTrustProviders</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders">Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders</a>></code> | AWS Verified Access trust providers. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cidrEndpointsCustomSubDomain`<sup>Optional</sup> <a name="cidrEndpointsCustomSubDomain" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.cidrEndpointsCustomSubDomain"></a>

```java
public java.lang.String getCidrEndpointsCustomSubDomain();
```

- *Type:* java.lang.String

Introduce CidrEndpointsCustomSubDomain property to represent the domain (say, ava.my-company.com).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_instance#cidr_endpoints_custom_sub_domain Ec2VerifiedAccessInstance#cidr_endpoints_custom_sub_domain}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description for the AWS Verified Access instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_instance#description Ec2VerifiedAccessInstance#description}

---

##### `fipsEnabled`<sup>Optional</sup> <a name="fipsEnabled" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.fipsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getFipsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether FIPS is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_instance#fips_enabled Ec2VerifiedAccessInstance#fips_enabled}

---

##### `loggingConfigurations`<sup>Optional</sup> <a name="loggingConfigurations" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.loggingConfigurations"></a>

```java
public Ec2VerifiedAccessInstanceLoggingConfigurations getLoggingConfigurations();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations">Ec2VerifiedAccessInstanceLoggingConfigurations</a>

The configuration options for AWS Verified Access instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_instance#logging_configurations Ec2VerifiedAccessInstance#logging_configurations}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.tags"></a>

```java
public IResolvable|java.util.List<Ec2VerifiedAccessInstanceTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTags">Ec2VerifiedAccessInstanceTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_instance#tags Ec2VerifiedAccessInstance#tags}

---

##### `verifiedAccessTrustProviderIds`<sup>Optional</sup> <a name="verifiedAccessTrustProviderIds" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.verifiedAccessTrustProviderIds"></a>

```java
public java.util.List<java.lang.String> getVerifiedAccessTrustProviderIds();
```

- *Type:* java.util.List<java.lang.String>

The IDs of the AWS Verified Access trust providers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_instance#verified_access_trust_provider_ids Ec2VerifiedAccessInstance#verified_access_trust_provider_ids}

---

##### `verifiedAccessTrustProviders`<sup>Optional</sup> <a name="verifiedAccessTrustProviders" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.verifiedAccessTrustProviders"></a>

```java
public IResolvable|java.util.List<Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders> getVerifiedAccessTrustProviders();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders">Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders</a>>

AWS Verified Access trust providers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_instance#verified_access_trust_providers Ec2VerifiedAccessInstance#verified_access_trust_providers}

---

### Ec2VerifiedAccessInstanceLoggingConfigurations <a name="Ec2VerifiedAccessInstanceLoggingConfigurations" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_verified_access_instance.Ec2VerifiedAccessInstanceLoggingConfigurations;

Ec2VerifiedAccessInstanceLoggingConfigurations.builder()
//  .cloudwatchLogs(Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs)
//  .includeTrustContext(java.lang.Boolean|IResolvable)
//  .kinesisDataFirehose(Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose)
//  .logVersion(java.lang.String)
//  .s3(Ec2VerifiedAccessInstanceLoggingConfigurationsS3)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations.property.cloudwatchLogs">cloudwatchLogs</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs">Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs</a></code> | Sends Verified Access logs to CloudWatch Logs. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations.property.includeTrustContext">includeTrustContext</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Include claims from trust providers in Verified Access logs. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations.property.kinesisDataFirehose">kinesisDataFirehose</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose">Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose</a></code> | Sends Verified Access logs to Kinesis. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations.property.logVersion">logVersion</a></code> | <code>java.lang.String</code> | Select log version for Verified Access logs. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3">Ec2VerifiedAccessInstanceLoggingConfigurationsS3</a></code> | Sends Verified Access logs to Amazon S3. |

---

##### `cloudwatchLogs`<sup>Optional</sup> <a name="cloudwatchLogs" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations.property.cloudwatchLogs"></a>

```java
public Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs getCloudwatchLogs();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs">Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs</a>

Sends Verified Access logs to CloudWatch Logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_instance#cloudwatch_logs Ec2VerifiedAccessInstance#cloudwatch_logs}

---

##### `includeTrustContext`<sup>Optional</sup> <a name="includeTrustContext" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations.property.includeTrustContext"></a>

```java
public java.lang.Boolean|IResolvable getIncludeTrustContext();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Include claims from trust providers in Verified Access logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_instance#include_trust_context Ec2VerifiedAccessInstance#include_trust_context}

---

##### `kinesisDataFirehose`<sup>Optional</sup> <a name="kinesisDataFirehose" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations.property.kinesisDataFirehose"></a>

```java
public Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose getKinesisDataFirehose();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose">Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose</a>

Sends Verified Access logs to Kinesis.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_instance#kinesis_data_firehose Ec2VerifiedAccessInstance#kinesis_data_firehose}

---

##### `logVersion`<sup>Optional</sup> <a name="logVersion" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations.property.logVersion"></a>

```java
public java.lang.String getLogVersion();
```

- *Type:* java.lang.String

Select log version for Verified Access logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_instance#log_version Ec2VerifiedAccessInstance#log_version}

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations.property.s3"></a>

```java
public Ec2VerifiedAccessInstanceLoggingConfigurationsS3 getS3();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3">Ec2VerifiedAccessInstanceLoggingConfigurationsS3</a>

Sends Verified Access logs to Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_instance#s3 Ec2VerifiedAccessInstance#s3}

---

### Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs <a name="Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_verified_access_instance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs;

Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs.builder()
//  .enabled(java.lang.Boolean|IResolvable)
//  .logGroup(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether logging is enabled. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs.property.logGroup">logGroup</a></code> | <code>java.lang.String</code> | The ID of the CloudWatch Logs log group. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether logging is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_instance#enabled Ec2VerifiedAccessInstance#enabled}

---

##### `logGroup`<sup>Optional</sup> <a name="logGroup" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs.property.logGroup"></a>

```java
public java.lang.String getLogGroup();
```

- *Type:* java.lang.String

The ID of the CloudWatch Logs log group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_instance#log_group Ec2VerifiedAccessInstance#log_group}

---

### Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose <a name="Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_verified_access_instance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose;

Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose.builder()
//  .deliveryStream(java.lang.String)
//  .enabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose.property.deliveryStream">deliveryStream</a></code> | <code>java.lang.String</code> | The ID of the delivery stream. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether logging is enabled. |

---

##### `deliveryStream`<sup>Optional</sup> <a name="deliveryStream" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose.property.deliveryStream"></a>

```java
public java.lang.String getDeliveryStream();
```

- *Type:* java.lang.String

The ID of the delivery stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_instance#delivery_stream Ec2VerifiedAccessInstance#delivery_stream}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether logging is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_instance#enabled Ec2VerifiedAccessInstance#enabled}

---

### Ec2VerifiedAccessInstanceLoggingConfigurationsS3 <a name="Ec2VerifiedAccessInstanceLoggingConfigurationsS3" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_verified_access_instance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3;

Ec2VerifiedAccessInstanceLoggingConfigurationsS3.builder()
//  .bucketName(java.lang.String)
//  .bucketOwner(java.lang.String)
//  .enabled(java.lang.Boolean|IResolvable)
//  .prefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | The bucket name. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3.property.bucketOwner">bucketOwner</a></code> | <code>java.lang.String</code> | The ID of the AWS account that owns the Amazon S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether logging is enabled. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3.property.prefix">prefix</a></code> | <code>java.lang.String</code> | The bucket prefix. |

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

The bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_instance#bucket_name Ec2VerifiedAccessInstance#bucket_name}

---

##### `bucketOwner`<sup>Optional</sup> <a name="bucketOwner" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3.property.bucketOwner"></a>

```java
public java.lang.String getBucketOwner();
```

- *Type:* java.lang.String

The ID of the AWS account that owns the Amazon S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_instance#bucket_owner Ec2VerifiedAccessInstance#bucket_owner}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether logging is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_instance#enabled Ec2VerifiedAccessInstance#enabled}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

The bucket prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_instance#prefix Ec2VerifiedAccessInstance#prefix}

---

### Ec2VerifiedAccessInstanceTags <a name="Ec2VerifiedAccessInstanceTags" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_verified_access_instance.Ec2VerifiedAccessInstanceTags;

Ec2VerifiedAccessInstanceTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_instance#key Ec2VerifiedAccessInstance#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_instance#value Ec2VerifiedAccessInstance#value}

---

### Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders <a name="Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_verified_access_instance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders;

Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders.builder()
//  .description(java.lang.String)
//  .deviceTrustProviderType(java.lang.String)
//  .trustProviderType(java.lang.String)
//  .userTrustProviderType(java.lang.String)
//  .verifiedAccessTrustProviderId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders.property.description">description</a></code> | <code>java.lang.String</code> | The description of trust provider. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders.property.deviceTrustProviderType">deviceTrustProviderType</a></code> | <code>java.lang.String</code> | The type of device-based trust provider. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders.property.trustProviderType">trustProviderType</a></code> | <code>java.lang.String</code> | The type of trust provider (user- or device-based). |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders.property.userTrustProviderType">userTrustProviderType</a></code> | <code>java.lang.String</code> | The type of user-based trust provider. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders.property.verifiedAccessTrustProviderId">verifiedAccessTrustProviderId</a></code> | <code>java.lang.String</code> | The ID of the trust provider. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of trust provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_instance#description Ec2VerifiedAccessInstance#description}

---

##### `deviceTrustProviderType`<sup>Optional</sup> <a name="deviceTrustProviderType" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders.property.deviceTrustProviderType"></a>

```java
public java.lang.String getDeviceTrustProviderType();
```

- *Type:* java.lang.String

The type of device-based trust provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_instance#device_trust_provider_type Ec2VerifiedAccessInstance#device_trust_provider_type}

---

##### `trustProviderType`<sup>Optional</sup> <a name="trustProviderType" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders.property.trustProviderType"></a>

```java
public java.lang.String getTrustProviderType();
```

- *Type:* java.lang.String

The type of trust provider (user- or device-based).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_instance#trust_provider_type Ec2VerifiedAccessInstance#trust_provider_type}

---

##### `userTrustProviderType`<sup>Optional</sup> <a name="userTrustProviderType" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders.property.userTrustProviderType"></a>

```java
public java.lang.String getUserTrustProviderType();
```

- *Type:* java.lang.String

The type of user-based trust provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_instance#user_trust_provider_type Ec2VerifiedAccessInstance#user_trust_provider_type}

---

##### `verifiedAccessTrustProviderId`<sup>Optional</sup> <a name="verifiedAccessTrustProviderId" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders.property.verifiedAccessTrustProviderId"></a>

```java
public java.lang.String getVerifiedAccessTrustProviderId();
```

- *Type:* java.lang.String

The ID of the trust provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_instance#verified_access_trust_provider_id Ec2VerifiedAccessInstance#verified_access_trust_provider_id}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference <a name="Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_verified_access_instance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference;

new Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.resetLogGroup">resetLogGroup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetLogGroup` <a name="resetLogGroup" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.resetLogGroup"></a>

```java
public void resetLogGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.logGroupInput">logGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.logGroup">logGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs">Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `logGroupInput`<sup>Optional</sup> <a name="logGroupInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.logGroupInput"></a>

```java
public java.lang.String getLogGroupInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.logGroup"></a>

```java
public java.lang.String getLogGroup();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs">Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs</a>

---


### Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference <a name="Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_verified_access_instance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference;

new Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.resetDeliveryStream">resetDeliveryStream</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeliveryStream` <a name="resetDeliveryStream" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.resetDeliveryStream"></a>

```java
public void resetDeliveryStream()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.deliveryStreamInput">deliveryStreamInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.deliveryStream">deliveryStream</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose">Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deliveryStreamInput`<sup>Optional</sup> <a name="deliveryStreamInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.deliveryStreamInput"></a>

```java
public java.lang.String getDeliveryStreamInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `deliveryStream`<sup>Required</sup> <a name="deliveryStream" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.deliveryStream"></a>

```java
public java.lang.String getDeliveryStream();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose">Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose</a>

---


### Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference <a name="Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_verified_access_instance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference;

new Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.putCloudwatchLogs">putCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.putKinesisDataFirehose">putKinesisDataFirehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.putS3">putS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.resetCloudwatchLogs">resetCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.resetIncludeTrustContext">resetIncludeTrustContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.resetKinesisDataFirehose">resetKinesisDataFirehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.resetLogVersion">resetLogVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.resetS3">resetS3</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudwatchLogs` <a name="putCloudwatchLogs" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.putCloudwatchLogs"></a>

```java
public void putCloudwatchLogs(Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.putCloudwatchLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs">Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs</a>

---

##### `putKinesisDataFirehose` <a name="putKinesisDataFirehose" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.putKinesisDataFirehose"></a>

```java
public void putKinesisDataFirehose(Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.putKinesisDataFirehose.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose">Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose</a>

---

##### `putS3` <a name="putS3" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.putS3"></a>

```java
public void putS3(Ec2VerifiedAccessInstanceLoggingConfigurationsS3 value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3">Ec2VerifiedAccessInstanceLoggingConfigurationsS3</a>

---

##### `resetCloudwatchLogs` <a name="resetCloudwatchLogs" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.resetCloudwatchLogs"></a>

```java
public void resetCloudwatchLogs()
```

##### `resetIncludeTrustContext` <a name="resetIncludeTrustContext" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.resetIncludeTrustContext"></a>

```java
public void resetIncludeTrustContext()
```

##### `resetKinesisDataFirehose` <a name="resetKinesisDataFirehose" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.resetKinesisDataFirehose"></a>

```java
public void resetKinesisDataFirehose()
```

##### `resetLogVersion` <a name="resetLogVersion" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.resetLogVersion"></a>

```java
public void resetLogVersion()
```

##### `resetS3` <a name="resetS3" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.resetS3"></a>

```java
public void resetS3()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.cloudwatchLogs">cloudwatchLogs</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference">Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.kinesisDataFirehose">kinesisDataFirehose</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference">Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference">Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.cloudwatchLogsInput">cloudwatchLogsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs">Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.includeTrustContextInput">includeTrustContextInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.kinesisDataFirehoseInput">kinesisDataFirehoseInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose">Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.logVersionInput">logVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.s3Input">s3Input</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3">Ec2VerifiedAccessInstanceLoggingConfigurationsS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.includeTrustContext">includeTrustContext</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.logVersion">logVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations">Ec2VerifiedAccessInstanceLoggingConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudwatchLogs`<sup>Required</sup> <a name="cloudwatchLogs" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.cloudwatchLogs"></a>

```java
public Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference getCloudwatchLogs();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference">Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference</a>

---

##### `kinesisDataFirehose`<sup>Required</sup> <a name="kinesisDataFirehose" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.kinesisDataFirehose"></a>

```java
public Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference getKinesisDataFirehose();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference">Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference</a>

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.s3"></a>

```java
public Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference getS3();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference">Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference</a>

---

##### `cloudwatchLogsInput`<sup>Optional</sup> <a name="cloudwatchLogsInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.cloudwatchLogsInput"></a>

```java
public IResolvable|Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs getCloudwatchLogsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs">Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs</a>

---

##### `includeTrustContextInput`<sup>Optional</sup> <a name="includeTrustContextInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.includeTrustContextInput"></a>

```java
public java.lang.Boolean|IResolvable getIncludeTrustContextInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `kinesisDataFirehoseInput`<sup>Optional</sup> <a name="kinesisDataFirehoseInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.kinesisDataFirehoseInput"></a>

```java
public IResolvable|Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose getKinesisDataFirehoseInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose">Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose</a>

---

##### `logVersionInput`<sup>Optional</sup> <a name="logVersionInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.logVersionInput"></a>

```java
public java.lang.String getLogVersionInput();
```

- *Type:* java.lang.String

---

##### `s3Input`<sup>Optional</sup> <a name="s3Input" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.s3Input"></a>

```java
public IResolvable|Ec2VerifiedAccessInstanceLoggingConfigurationsS3 getS3Input();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3">Ec2VerifiedAccessInstanceLoggingConfigurationsS3</a>

---

##### `includeTrustContext`<sup>Required</sup> <a name="includeTrustContext" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.includeTrustContext"></a>

```java
public java.lang.Boolean|IResolvable getIncludeTrustContext();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `logVersion`<sup>Required</sup> <a name="logVersion" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.logVersion"></a>

```java
public java.lang.String getLogVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2VerifiedAccessInstanceLoggingConfigurations getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations">Ec2VerifiedAccessInstanceLoggingConfigurations</a>

---


### Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference <a name="Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_verified_access_instance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference;

new Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.resetBucketName">resetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.resetBucketOwner">resetBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucketName` <a name="resetBucketName" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.resetBucketName"></a>

```java
public void resetBucketName()
```

##### `resetBucketOwner` <a name="resetBucketOwner" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.resetBucketOwner"></a>

```java
public void resetBucketOwner()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.resetPrefix"></a>

```java
public void resetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.bucketOwnerInput">bucketOwnerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.bucketOwner">bucketOwner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3">Ec2VerifiedAccessInstanceLoggingConfigurationsS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.bucketNameInput"></a>

```java
public java.lang.String getBucketNameInput();
```

- *Type:* java.lang.String

---

##### `bucketOwnerInput`<sup>Optional</sup> <a name="bucketOwnerInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.bucketOwnerInput"></a>

```java
public java.lang.String getBucketOwnerInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

---

##### `bucketOwner`<sup>Required</sup> <a name="bucketOwner" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.bucketOwner"></a>

```java
public java.lang.String getBucketOwner();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2VerifiedAccessInstanceLoggingConfigurationsS3 getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3">Ec2VerifiedAccessInstanceLoggingConfigurationsS3</a>

---


### Ec2VerifiedAccessInstanceTagsList <a name="Ec2VerifiedAccessInstanceTagsList" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_verified_access_instance.Ec2VerifiedAccessInstanceTagsList;

new Ec2VerifiedAccessInstanceTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.get"></a>

```java
public Ec2VerifiedAccessInstanceTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTags">Ec2VerifiedAccessInstanceTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Ec2VerifiedAccessInstanceTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTags">Ec2VerifiedAccessInstanceTags</a>>

---


### Ec2VerifiedAccessInstanceTagsOutputReference <a name="Ec2VerifiedAccessInstanceTagsOutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_verified_access_instance.Ec2VerifiedAccessInstanceTagsOutputReference;

new Ec2VerifiedAccessInstanceTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTags">Ec2VerifiedAccessInstanceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2VerifiedAccessInstanceTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTags">Ec2VerifiedAccessInstanceTags</a>

---


### Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList <a name="Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_verified_access_instance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList;

new Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.get"></a>

```java
public Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders">Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders">Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders</a>>

---


### Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference <a name="Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_verified_access_instance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference;

new Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.resetDeviceTrustProviderType">resetDeviceTrustProviderType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.resetTrustProviderType">resetTrustProviderType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.resetUserTrustProviderType">resetUserTrustProviderType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.resetVerifiedAccessTrustProviderId">resetVerifiedAccessTrustProviderId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDeviceTrustProviderType` <a name="resetDeviceTrustProviderType" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.resetDeviceTrustProviderType"></a>

```java
public void resetDeviceTrustProviderType()
```

##### `resetTrustProviderType` <a name="resetTrustProviderType" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.resetTrustProviderType"></a>

```java
public void resetTrustProviderType()
```

##### `resetUserTrustProviderType` <a name="resetUserTrustProviderType" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.resetUserTrustProviderType"></a>

```java
public void resetUserTrustProviderType()
```

##### `resetVerifiedAccessTrustProviderId` <a name="resetVerifiedAccessTrustProviderId" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.resetVerifiedAccessTrustProviderId"></a>

```java
public void resetVerifiedAccessTrustProviderId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.deviceTrustProviderTypeInput">deviceTrustProviderTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.trustProviderTypeInput">trustProviderTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.userTrustProviderTypeInput">userTrustProviderTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.verifiedAccessTrustProviderIdInput">verifiedAccessTrustProviderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.deviceTrustProviderType">deviceTrustProviderType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.trustProviderType">trustProviderType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.userTrustProviderType">userTrustProviderType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.verifiedAccessTrustProviderId">verifiedAccessTrustProviderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders">Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `deviceTrustProviderTypeInput`<sup>Optional</sup> <a name="deviceTrustProviderTypeInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.deviceTrustProviderTypeInput"></a>

```java
public java.lang.String getDeviceTrustProviderTypeInput();
```

- *Type:* java.lang.String

---

##### `trustProviderTypeInput`<sup>Optional</sup> <a name="trustProviderTypeInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.trustProviderTypeInput"></a>

```java
public java.lang.String getTrustProviderTypeInput();
```

- *Type:* java.lang.String

---

##### `userTrustProviderTypeInput`<sup>Optional</sup> <a name="userTrustProviderTypeInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.userTrustProviderTypeInput"></a>

```java
public java.lang.String getUserTrustProviderTypeInput();
```

- *Type:* java.lang.String

---

##### `verifiedAccessTrustProviderIdInput`<sup>Optional</sup> <a name="verifiedAccessTrustProviderIdInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.verifiedAccessTrustProviderIdInput"></a>

```java
public java.lang.String getVerifiedAccessTrustProviderIdInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `deviceTrustProviderType`<sup>Required</sup> <a name="deviceTrustProviderType" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.deviceTrustProviderType"></a>

```java
public java.lang.String getDeviceTrustProviderType();
```

- *Type:* java.lang.String

---

##### `trustProviderType`<sup>Required</sup> <a name="trustProviderType" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.trustProviderType"></a>

```java
public java.lang.String getTrustProviderType();
```

- *Type:* java.lang.String

---

##### `userTrustProviderType`<sup>Required</sup> <a name="userTrustProviderType" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.userTrustProviderType"></a>

```java
public java.lang.String getUserTrustProviderType();
```

- *Type:* java.lang.String

---

##### `verifiedAccessTrustProviderId`<sup>Required</sup> <a name="verifiedAccessTrustProviderId" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.verifiedAccessTrustProviderId"></a>

```java
public java.lang.String getVerifiedAccessTrustProviderId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders">Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders</a>

---



