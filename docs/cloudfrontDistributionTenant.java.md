# `cloudfrontDistributionTenant` Submodule <a name="`cloudfrontDistributionTenant` Submodule" id="@cdktn/provider-awscc.cloudfrontDistributionTenant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudfrontDistributionTenant <a name="CloudfrontDistributionTenant" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_distribution_tenant awscc_cloudfront_distribution_tenant}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudfront_distribution_tenant.CloudfrontDistributionTenant;

CloudfrontDistributionTenant.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .distributionId(java.lang.String)
    .domains(java.util.List<java.lang.String>)
    .name(java.lang.String)
//  .connectionGroupId(java.lang.String)
//  .customizations(CloudfrontDistributionTenantCustomizations)
//  .enabled(java.lang.Boolean|IResolvable)
//  .managedCertificateRequest(CloudfrontDistributionTenantManagedCertificateRequest)
//  .parameters(IResolvable|java.util.List<CloudfrontDistributionTenantParameters>)
//  .tags(IResolvable|java.util.List<CloudfrontDistributionTenantTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.distributionId">distributionId</a></code> | <code>java.lang.String</code> | The ID of the multi-tenant distribution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.domains">domains</a></code> | <code>java.util.List<java.lang.String></code> | The domains associated with the distribution tenant. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the distribution tenant. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.connectionGroupId">connectionGroupId</a></code> | <code>java.lang.String</code> | The ID of the connection group for the distribution tenant. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.customizations">customizations</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations">CloudfrontDistributionTenantCustomizations</a></code> | Customizations for the distribution tenant. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether the distribution tenant is in an enabled state. If disabled, the distribution tenant won't serve traffic. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.managedCertificateRequest">managedCertificateRequest</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest">CloudfrontDistributionTenantManagedCertificateRequest</a></code> | An object that represents the request for the Amazon CloudFront managed ACM certificate. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.parameters">parameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameters">CloudfrontDistributionTenantParameters</a>></code> | A list of parameter values to add to the resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTags">CloudfrontDistributionTenantTags</a>></code> | A complex type that contains zero or more ``Tag`` elements. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `distributionId`<sup>Required</sup> <a name="distributionId" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.distributionId"></a>

- *Type:* java.lang.String

The ID of the multi-tenant distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_distribution_tenant#distribution_id CloudfrontDistributionTenant#distribution_id}

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.domains"></a>

- *Type:* java.util.List<java.lang.String>

The domains associated with the distribution tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_distribution_tenant#domains CloudfrontDistributionTenant#domains}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the distribution tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_distribution_tenant#name CloudfrontDistributionTenant#name}

---

##### `connectionGroupId`<sup>Optional</sup> <a name="connectionGroupId" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.connectionGroupId"></a>

- *Type:* java.lang.String

The ID of the connection group for the distribution tenant.

If you don't specify a connection group, CloudFront uses the default connection group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_distribution_tenant#connection_group_id CloudfrontDistributionTenant#connection_group_id}

---

##### `customizations`<sup>Optional</sup> <a name="customizations" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.customizations"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations">CloudfrontDistributionTenantCustomizations</a>

Customizations for the distribution tenant.

For each distribution tenant, you can specify the geographic restrictions, and the Amazon Resource Names (ARNs) for the ACM certificate and WAF web ACL. These are specific values that you can override or disable from the multi-tenant distribution that was used to create the distribution tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_distribution_tenant#customizations CloudfrontDistributionTenant#customizations}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether the distribution tenant is in an enabled state. If disabled, the distribution tenant won't serve traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_distribution_tenant#enabled CloudfrontDistributionTenant#enabled}

---

##### `managedCertificateRequest`<sup>Optional</sup> <a name="managedCertificateRequest" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.managedCertificateRequest"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest">CloudfrontDistributionTenantManagedCertificateRequest</a>

An object that represents the request for the Amazon CloudFront managed ACM certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_distribution_tenant#managed_certificate_request CloudfrontDistributionTenant#managed_certificate_request}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.parameters"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameters">CloudfrontDistributionTenantParameters</a>>

A list of parameter values to add to the resource.

A parameter is specified as a key-value pair. A valid parameter value must exist for any parameter that is marked as required in the multi-tenant distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_distribution_tenant#parameters CloudfrontDistributionTenant#parameters}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTags">CloudfrontDistributionTenantTags</a>>

A complex type that contains zero or more ``Tag`` elements.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_distribution_tenant#tags CloudfrontDistributionTenant#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.putCustomizations">putCustomizations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.putManagedCertificateRequest">putManagedCertificateRequest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.putParameters">putParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetConnectionGroupId">resetConnectionGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetCustomizations">resetCustomizations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetManagedCertificateRequest">resetManagedCertificateRequest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomizations` <a name="putCustomizations" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.putCustomizations"></a>

```java
public void putCustomizations(CloudfrontDistributionTenantCustomizations value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.putCustomizations.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations">CloudfrontDistributionTenantCustomizations</a>

---

##### `putManagedCertificateRequest` <a name="putManagedCertificateRequest" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.putManagedCertificateRequest"></a>

```java
public void putManagedCertificateRequest(CloudfrontDistributionTenantManagedCertificateRequest value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.putManagedCertificateRequest.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest">CloudfrontDistributionTenantManagedCertificateRequest</a>

---

##### `putParameters` <a name="putParameters" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.putParameters"></a>

```java
public void putParameters(IResolvable|java.util.List<CloudfrontDistributionTenantParameters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.putParameters.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameters">CloudfrontDistributionTenantParameters</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<CloudfrontDistributionTenantTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTags">CloudfrontDistributionTenantTags</a>>

---

##### `resetConnectionGroupId` <a name="resetConnectionGroupId" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetConnectionGroupId"></a>

```java
public void resetConnectionGroupId()
```

##### `resetCustomizations` <a name="resetCustomizations" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetCustomizations"></a>

```java
public void resetCustomizations()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetManagedCertificateRequest` <a name="resetManagedCertificateRequest" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetManagedCertificateRequest"></a>

```java
public void resetManagedCertificateRequest()
```

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetParameters"></a>

```java
public void resetParameters()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudfrontDistributionTenant resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.isConstruct"></a>

```java
import io.cdktn.providers.awscc.cloudfront_distribution_tenant.CloudfrontDistributionTenant;

CloudfrontDistributionTenant.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.cloudfront_distribution_tenant.CloudfrontDistributionTenant;

CloudfrontDistributionTenant.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.cloudfront_distribution_tenant.CloudfrontDistributionTenant;

CloudfrontDistributionTenant.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.cloudfront_distribution_tenant.CloudfrontDistributionTenant;

CloudfrontDistributionTenant.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CloudfrontDistributionTenant.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CloudfrontDistributionTenant resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CloudfrontDistributionTenant to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CloudfrontDistributionTenant that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_distribution_tenant#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CloudfrontDistributionTenant to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.createdTime">createdTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.customizations">customizations</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference">CloudfrontDistributionTenantCustomizationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.distributionTenantId">distributionTenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.domainResults">domainResults</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsList">CloudfrontDistributionTenantDomainResultsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.eTag">eTag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.lastModifiedTime">lastModifiedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.managedCertificateRequest">managedCertificateRequest</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference">CloudfrontDistributionTenantManagedCertificateRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersList">CloudfrontDistributionTenantParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsList">CloudfrontDistributionTenantTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.connectionGroupIdInput">connectionGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.customizationsInput">customizationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations">CloudfrontDistributionTenantCustomizations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.distributionIdInput">distributionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.domainsInput">domainsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.managedCertificateRequestInput">managedCertificateRequestInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest">CloudfrontDistributionTenantManagedCertificateRequest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.parametersInput">parametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameters">CloudfrontDistributionTenantParameters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTags">CloudfrontDistributionTenantTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.connectionGroupId">connectionGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.distributionId">distributionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.domains">domains</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.createdTime"></a>

```java
public java.lang.String getCreatedTime();
```

- *Type:* java.lang.String

---

##### `customizations`<sup>Required</sup> <a name="customizations" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.customizations"></a>

```java
public CloudfrontDistributionTenantCustomizationsOutputReference getCustomizations();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference">CloudfrontDistributionTenantCustomizationsOutputReference</a>

---

##### `distributionTenantId`<sup>Required</sup> <a name="distributionTenantId" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.distributionTenantId"></a>

```java
public java.lang.String getDistributionTenantId();
```

- *Type:* java.lang.String

---

##### `domainResults`<sup>Required</sup> <a name="domainResults" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.domainResults"></a>

```java
public CloudfrontDistributionTenantDomainResultsList getDomainResults();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsList">CloudfrontDistributionTenantDomainResultsList</a>

---

##### `eTag`<sup>Required</sup> <a name="eTag" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.eTag"></a>

```java
public java.lang.String getETag();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.lastModifiedTime"></a>

```java
public java.lang.String getLastModifiedTime();
```

- *Type:* java.lang.String

---

##### `managedCertificateRequest`<sup>Required</sup> <a name="managedCertificateRequest" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.managedCertificateRequest"></a>

```java
public CloudfrontDistributionTenantManagedCertificateRequestOutputReference getManagedCertificateRequest();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference">CloudfrontDistributionTenantManagedCertificateRequestOutputReference</a>

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.parameters"></a>

```java
public CloudfrontDistributionTenantParametersList getParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersList">CloudfrontDistributionTenantParametersList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.tags"></a>

```java
public CloudfrontDistributionTenantTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsList">CloudfrontDistributionTenantTagsList</a>

---

##### `connectionGroupIdInput`<sup>Optional</sup> <a name="connectionGroupIdInput" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.connectionGroupIdInput"></a>

```java
public java.lang.String getConnectionGroupIdInput();
```

- *Type:* java.lang.String

---

##### `customizationsInput`<sup>Optional</sup> <a name="customizationsInput" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.customizationsInput"></a>

```java
public IResolvable|CloudfrontDistributionTenantCustomizations getCustomizationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations">CloudfrontDistributionTenantCustomizations</a>

---

##### `distributionIdInput`<sup>Optional</sup> <a name="distributionIdInput" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.distributionIdInput"></a>

```java
public java.lang.String getDistributionIdInput();
```

- *Type:* java.lang.String

---

##### `domainsInput`<sup>Optional</sup> <a name="domainsInput" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.domainsInput"></a>

```java
public java.util.List<java.lang.String> getDomainsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `managedCertificateRequestInput`<sup>Optional</sup> <a name="managedCertificateRequestInput" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.managedCertificateRequestInput"></a>

```java
public IResolvable|CloudfrontDistributionTenantManagedCertificateRequest getManagedCertificateRequestInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest">CloudfrontDistributionTenantManagedCertificateRequest</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.parametersInput"></a>

```java
public IResolvable|java.util.List<CloudfrontDistributionTenantParameters> getParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameters">CloudfrontDistributionTenantParameters</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.tagsInput"></a>

```java
public IResolvable|java.util.List<CloudfrontDistributionTenantTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTags">CloudfrontDistributionTenantTags</a>>

---

##### `connectionGroupId`<sup>Required</sup> <a name="connectionGroupId" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.connectionGroupId"></a>

```java
public java.lang.String getConnectionGroupId();
```

- *Type:* java.lang.String

---

##### `distributionId`<sup>Required</sup> <a name="distributionId" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.distributionId"></a>

```java
public java.lang.String getDistributionId();
```

- *Type:* java.lang.String

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.domains"></a>

```java
public java.util.List<java.lang.String> getDomains();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudfrontDistributionTenantConfig <a name="CloudfrontDistributionTenantConfig" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudfront_distribution_tenant.CloudfrontDistributionTenantConfig;

CloudfrontDistributionTenantConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .distributionId(java.lang.String)
    .domains(java.util.List<java.lang.String>)
    .name(java.lang.String)
//  .connectionGroupId(java.lang.String)
//  .customizations(CloudfrontDistributionTenantCustomizations)
//  .enabled(java.lang.Boolean|IResolvable)
//  .managedCertificateRequest(CloudfrontDistributionTenantManagedCertificateRequest)
//  .parameters(IResolvable|java.util.List<CloudfrontDistributionTenantParameters>)
//  .tags(IResolvable|java.util.List<CloudfrontDistributionTenantTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.distributionId">distributionId</a></code> | <code>java.lang.String</code> | The ID of the multi-tenant distribution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.domains">domains</a></code> | <code>java.util.List<java.lang.String></code> | The domains associated with the distribution tenant. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the distribution tenant. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.connectionGroupId">connectionGroupId</a></code> | <code>java.lang.String</code> | The ID of the connection group for the distribution tenant. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.customizations">customizations</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations">CloudfrontDistributionTenantCustomizations</a></code> | Customizations for the distribution tenant. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether the distribution tenant is in an enabled state. If disabled, the distribution tenant won't serve traffic. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.managedCertificateRequest">managedCertificateRequest</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest">CloudfrontDistributionTenantManagedCertificateRequest</a></code> | An object that represents the request for the Amazon CloudFront managed ACM certificate. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.parameters">parameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameters">CloudfrontDistributionTenantParameters</a>></code> | A list of parameter values to add to the resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTags">CloudfrontDistributionTenantTags</a>></code> | A complex type that contains zero or more ``Tag`` elements. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `distributionId`<sup>Required</sup> <a name="distributionId" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.distributionId"></a>

```java
public java.lang.String getDistributionId();
```

- *Type:* java.lang.String

The ID of the multi-tenant distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_distribution_tenant#distribution_id CloudfrontDistributionTenant#distribution_id}

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.domains"></a>

```java
public java.util.List<java.lang.String> getDomains();
```

- *Type:* java.util.List<java.lang.String>

The domains associated with the distribution tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_distribution_tenant#domains CloudfrontDistributionTenant#domains}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the distribution tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_distribution_tenant#name CloudfrontDistributionTenant#name}

---

##### `connectionGroupId`<sup>Optional</sup> <a name="connectionGroupId" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.connectionGroupId"></a>

```java
public java.lang.String getConnectionGroupId();
```

- *Type:* java.lang.String

The ID of the connection group for the distribution tenant.

If you don't specify a connection group, CloudFront uses the default connection group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_distribution_tenant#connection_group_id CloudfrontDistributionTenant#connection_group_id}

---

##### `customizations`<sup>Optional</sup> <a name="customizations" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.customizations"></a>

```java
public CloudfrontDistributionTenantCustomizations getCustomizations();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations">CloudfrontDistributionTenantCustomizations</a>

Customizations for the distribution tenant.

For each distribution tenant, you can specify the geographic restrictions, and the Amazon Resource Names (ARNs) for the ACM certificate and WAF web ACL. These are specific values that you can override or disable from the multi-tenant distribution that was used to create the distribution tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_distribution_tenant#customizations CloudfrontDistributionTenant#customizations}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether the distribution tenant is in an enabled state. If disabled, the distribution tenant won't serve traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_distribution_tenant#enabled CloudfrontDistributionTenant#enabled}

---

##### `managedCertificateRequest`<sup>Optional</sup> <a name="managedCertificateRequest" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.managedCertificateRequest"></a>

```java
public CloudfrontDistributionTenantManagedCertificateRequest getManagedCertificateRequest();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest">CloudfrontDistributionTenantManagedCertificateRequest</a>

An object that represents the request for the Amazon CloudFront managed ACM certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_distribution_tenant#managed_certificate_request CloudfrontDistributionTenant#managed_certificate_request}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.parameters"></a>

```java
public IResolvable|java.util.List<CloudfrontDistributionTenantParameters> getParameters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameters">CloudfrontDistributionTenantParameters</a>>

A list of parameter values to add to the resource.

A parameter is specified as a key-value pair. A valid parameter value must exist for any parameter that is marked as required in the multi-tenant distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_distribution_tenant#parameters CloudfrontDistributionTenant#parameters}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.tags"></a>

```java
public IResolvable|java.util.List<CloudfrontDistributionTenantTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTags">CloudfrontDistributionTenantTags</a>>

A complex type that contains zero or more ``Tag`` elements.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_distribution_tenant#tags CloudfrontDistributionTenant#tags}

---

### CloudfrontDistributionTenantCustomizations <a name="CloudfrontDistributionTenantCustomizations" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudfront_distribution_tenant.CloudfrontDistributionTenantCustomizations;

CloudfrontDistributionTenantCustomizations.builder()
//  .certificate(CloudfrontDistributionTenantCustomizationsCertificate)
//  .geoRestrictions(CloudfrontDistributionTenantCustomizationsGeoRestrictions)
//  .webAcl(CloudfrontDistributionTenantCustomizationsWebAcl)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations.property.certificate">certificate</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificate">CloudfrontDistributionTenantCustomizationsCertificate</a></code> | The ACMlong (ACM) certificate. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations.property.geoRestrictions">geoRestrictions</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictions">CloudfrontDistributionTenantCustomizationsGeoRestrictions</a></code> | The geographic restrictions. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations.property.webAcl">webAcl</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAcl">CloudfrontDistributionTenantCustomizationsWebAcl</a></code> | The WAF web ACL. |

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations.property.certificate"></a>

```java
public CloudfrontDistributionTenantCustomizationsCertificate getCertificate();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificate">CloudfrontDistributionTenantCustomizationsCertificate</a>

The ACMlong (ACM) certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_distribution_tenant#certificate CloudfrontDistributionTenant#certificate}

---

##### `geoRestrictions`<sup>Optional</sup> <a name="geoRestrictions" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations.property.geoRestrictions"></a>

```java
public CloudfrontDistributionTenantCustomizationsGeoRestrictions getGeoRestrictions();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictions">CloudfrontDistributionTenantCustomizationsGeoRestrictions</a>

The geographic restrictions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_distribution_tenant#geo_restrictions CloudfrontDistributionTenant#geo_restrictions}

---

##### `webAcl`<sup>Optional</sup> <a name="webAcl" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations.property.webAcl"></a>

```java
public CloudfrontDistributionTenantCustomizationsWebAcl getWebAcl();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAcl">CloudfrontDistributionTenantCustomizationsWebAcl</a>

The WAF web ACL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_distribution_tenant#web_acl CloudfrontDistributionTenant#web_acl}

---

### CloudfrontDistributionTenantCustomizationsCertificate <a name="CloudfrontDistributionTenantCustomizationsCertificate" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificate.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudfront_distribution_tenant.CloudfrontDistributionTenantCustomizationsCertificate;

CloudfrontDistributionTenantCustomizationsCertificate.builder()
//  .arn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificate.property.arn">arn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the ACM certificate. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificate.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the ACM certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_distribution_tenant#arn CloudfrontDistributionTenant#arn}

---

### CloudfrontDistributionTenantCustomizationsGeoRestrictions <a name="CloudfrontDistributionTenantCustomizationsGeoRestrictions" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictions.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudfront_distribution_tenant.CloudfrontDistributionTenantCustomizationsGeoRestrictions;

CloudfrontDistributionTenantCustomizationsGeoRestrictions.builder()
//  .locations(java.util.List<java.lang.String>)
//  .restrictionType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictions.property.locations">locations</a></code> | <code>java.util.List<java.lang.String></code> | The locations for geographic restrictions. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictions.property.restrictionType">restrictionType</a></code> | <code>java.lang.String</code> | The method that you want to use to restrict distribution of your content by country:   +  ``none``: No geographic restriction is enabled, meaning access to content is not restricted by client geo location. |

---

##### `locations`<sup>Optional</sup> <a name="locations" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictions.property.locations"></a>

```java
public java.util.List<java.lang.String> getLocations();
```

- *Type:* java.util.List<java.lang.String>

The locations for geographic restrictions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_distribution_tenant#locations CloudfrontDistributionTenant#locations}

---

##### `restrictionType`<sup>Optional</sup> <a name="restrictionType" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictions.property.restrictionType"></a>

```java
public java.lang.String getRestrictionType();
```

- *Type:* java.lang.String

The method that you want to use to restrict distribution of your content by country:   +  ``none``: No geographic restriction is enabled, meaning access to content is not restricted by client geo location.

* `blacklist`: The `Location` elements specify the countries in which you don't want CloudFront to distribute your content.
* `whitelist`: The `Location` elements specify the countries in which you want CloudFront to distribute your content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_distribution_tenant#restriction_type CloudfrontDistributionTenant#restriction_type}

---

### CloudfrontDistributionTenantCustomizationsWebAcl <a name="CloudfrontDistributionTenantCustomizationsWebAcl" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAcl"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAcl.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudfront_distribution_tenant.CloudfrontDistributionTenantCustomizationsWebAcl;

CloudfrontDistributionTenantCustomizationsWebAcl.builder()
//  .action(java.lang.String)
//  .arn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAcl.property.action">action</a></code> | <code>java.lang.String</code> | The action for the WAF web ACL customization. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAcl.property.arn">arn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the WAF web ACL. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAcl.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

The action for the WAF web ACL customization.

You can specify `override` to specify a separate WAF web ACL for the distribution tenant. If you specify `disable`, the distribution tenant won't have WAF web ACL protections and won't inherit from the multi-tenant distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_distribution_tenant#action CloudfrontDistributionTenant#action}

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAcl.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the WAF web ACL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_distribution_tenant#arn CloudfrontDistributionTenant#arn}

---

### CloudfrontDistributionTenantDomainResults <a name="CloudfrontDistributionTenantDomainResults" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResults"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResults.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudfront_distribution_tenant.CloudfrontDistributionTenantDomainResults;

CloudfrontDistributionTenantDomainResults.builder()
    .build();
```


### CloudfrontDistributionTenantManagedCertificateRequest <a name="CloudfrontDistributionTenantManagedCertificateRequest" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudfront_distribution_tenant.CloudfrontDistributionTenantManagedCertificateRequest;

CloudfrontDistributionTenantManagedCertificateRequest.builder()
//  .certificateTransparencyLoggingPreference(java.lang.String)
//  .primaryDomainName(java.lang.String)
//  .validationTokenHost(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest.property.certificateTransparencyLoggingPreference">certificateTransparencyLoggingPreference</a></code> | <code>java.lang.String</code> | You can opt out of certificate transparency logging by specifying the ``disabled`` option. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest.property.primaryDomainName">primaryDomainName</a></code> | <code>java.lang.String</code> | The primary domain name associated with the CloudFront managed ACM certificate. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest.property.validationTokenHost">validationTokenHost</a></code> | <code>java.lang.String</code> | Specify how the HTTP validation token will be served when requesting the CloudFront managed ACM certificate. |

---

##### `certificateTransparencyLoggingPreference`<sup>Optional</sup> <a name="certificateTransparencyLoggingPreference" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest.property.certificateTransparencyLoggingPreference"></a>

```java
public java.lang.String getCertificateTransparencyLoggingPreference();
```

- *Type:* java.lang.String

You can opt out of certificate transparency logging by specifying the ``disabled`` option.

Opt in by specifying `enabled`. For more information, see [Certificate Transparency Logging](https://docs.aws.amazon.com/acm/latest/userguide/acm-concepts.html#concept-transparency) in the *User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_distribution_tenant#certificate_transparency_logging_preference CloudfrontDistributionTenant#certificate_transparency_logging_preference}

---

##### `primaryDomainName`<sup>Optional</sup> <a name="primaryDomainName" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest.property.primaryDomainName"></a>

```java
public java.lang.String getPrimaryDomainName();
```

- *Type:* java.lang.String

The primary domain name associated with the CloudFront managed ACM certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_distribution_tenant#primary_domain_name CloudfrontDistributionTenant#primary_domain_name}

---

##### `validationTokenHost`<sup>Optional</sup> <a name="validationTokenHost" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest.property.validationTokenHost"></a>

```java
public java.lang.String getValidationTokenHost();
```

- *Type:* java.lang.String

Specify how the HTTP validation token will be served when requesting the CloudFront managed ACM certificate.

* For `cloudfront`, CloudFront will automatically serve the validation token. Choose this mode if you can point the domain's DNS to CloudFront immediately.
* For `self-hosted`, you serve the validation token from your existing infrastructure. Choose this mode when you need to maintain current traffic flow while your certificate is being issued. You can place the validation token at the well-known path on your existing web server, wait for ACM to validate and issue the certificate, and then update your DNS to point to CloudFront.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_distribution_tenant#validation_token_host CloudfrontDistributionTenant#validation_token_host}

---

### CloudfrontDistributionTenantParameters <a name="CloudfrontDistributionTenantParameters" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudfront_distribution_tenant.CloudfrontDistributionTenantParameters;

CloudfrontDistributionTenantParameters.builder()
//  .name(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameters.property.name">name</a></code> | <code>java.lang.String</code> | The parameter name. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameters.property.value">value</a></code> | <code>java.lang.String</code> | The parameter value. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameters.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The parameter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_distribution_tenant#name CloudfrontDistributionTenant#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameters.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The parameter value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_distribution_tenant#value CloudfrontDistributionTenant#value}

---

### CloudfrontDistributionTenantTags <a name="CloudfrontDistributionTenantTags" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudfront_distribution_tenant.CloudfrontDistributionTenantTags;

CloudfrontDistributionTenantTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTags.property.key">key</a></code> | <code>java.lang.String</code> | A string that contains ``Tag`` key. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTags.property.value">value</a></code> | <code>java.lang.String</code> | A string that contains an optional ``Tag`` value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

A string that contains ``Tag`` key.

The string length should be between 1 and 128 characters. Valid characters include `a-z`, `A-Z`, `0-9`, space, and the special characters ``_ - . : / = +

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

A string that contains an optional ``Tag`` value.

The string length should be between 0 and 256 characters. Valid characters include `a-z`, `A-Z`, `0-9`, space, and the special characters ``_ - . : / = +

---

## Classes <a name="Classes" id="Classes"></a>

### CloudfrontDistributionTenantCustomizationsCertificateOutputReference <a name="CloudfrontDistributionTenantCustomizationsCertificateOutputReference" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudfront_distribution_tenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference;

new CloudfrontDistributionTenantCustomizationsCertificateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.resetArn">resetArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArn` <a name="resetArn" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.resetArn"></a>

```java
public void resetArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.arnInput">arnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificate">CloudfrontDistributionTenantCustomizationsCertificate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.arnInput"></a>

```java
public java.lang.String getArnInput();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudfrontDistributionTenantCustomizationsCertificate getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificate">CloudfrontDistributionTenantCustomizationsCertificate</a>

---


### CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference <a name="CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudfront_distribution_tenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference;

new CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.resetLocations">resetLocations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.resetRestrictionType">resetRestrictionType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLocations` <a name="resetLocations" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.resetLocations"></a>

```java
public void resetLocations()
```

##### `resetRestrictionType` <a name="resetRestrictionType" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.resetRestrictionType"></a>

```java
public void resetRestrictionType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.property.locationsInput">locationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.property.restrictionTypeInput">restrictionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.property.locations">locations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.property.restrictionType">restrictionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictions">CloudfrontDistributionTenantCustomizationsGeoRestrictions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `locationsInput`<sup>Optional</sup> <a name="locationsInput" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.property.locationsInput"></a>

```java
public java.util.List<java.lang.String> getLocationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `restrictionTypeInput`<sup>Optional</sup> <a name="restrictionTypeInput" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.property.restrictionTypeInput"></a>

```java
public java.lang.String getRestrictionTypeInput();
```

- *Type:* java.lang.String

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.property.locations"></a>

```java
public java.util.List<java.lang.String> getLocations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `restrictionType`<sup>Required</sup> <a name="restrictionType" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.property.restrictionType"></a>

```java
public java.lang.String getRestrictionType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudfrontDistributionTenantCustomizationsGeoRestrictions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictions">CloudfrontDistributionTenantCustomizationsGeoRestrictions</a>

---


### CloudfrontDistributionTenantCustomizationsOutputReference <a name="CloudfrontDistributionTenantCustomizationsOutputReference" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudfront_distribution_tenant.CloudfrontDistributionTenantCustomizationsOutputReference;

new CloudfrontDistributionTenantCustomizationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.putCertificate">putCertificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.putGeoRestrictions">putGeoRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.putWebAcl">putWebAcl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.resetGeoRestrictions">resetGeoRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.resetWebAcl">resetWebAcl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCertificate` <a name="putCertificate" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.putCertificate"></a>

```java
public void putCertificate(CloudfrontDistributionTenantCustomizationsCertificate value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.putCertificate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificate">CloudfrontDistributionTenantCustomizationsCertificate</a>

---

##### `putGeoRestrictions` <a name="putGeoRestrictions" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.putGeoRestrictions"></a>

```java
public void putGeoRestrictions(CloudfrontDistributionTenantCustomizationsGeoRestrictions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.putGeoRestrictions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictions">CloudfrontDistributionTenantCustomizationsGeoRestrictions</a>

---

##### `putWebAcl` <a name="putWebAcl" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.putWebAcl"></a>

```java
public void putWebAcl(CloudfrontDistributionTenantCustomizationsWebAcl value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.putWebAcl.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAcl">CloudfrontDistributionTenantCustomizationsWebAcl</a>

---

##### `resetCertificate` <a name="resetCertificate" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.resetCertificate"></a>

```java
public void resetCertificate()
```

##### `resetGeoRestrictions` <a name="resetGeoRestrictions" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.resetGeoRestrictions"></a>

```java
public void resetGeoRestrictions()
```

##### `resetWebAcl` <a name="resetWebAcl" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.resetWebAcl"></a>

```java
public void resetWebAcl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.certificate">certificate</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference">CloudfrontDistributionTenantCustomizationsCertificateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.geoRestrictions">geoRestrictions</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference">CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.webAcl">webAcl</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference">CloudfrontDistributionTenantCustomizationsWebAclOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.certificateInput">certificateInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificate">CloudfrontDistributionTenantCustomizationsCertificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.geoRestrictionsInput">geoRestrictionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictions">CloudfrontDistributionTenantCustomizationsGeoRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.webAclInput">webAclInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAcl">CloudfrontDistributionTenantCustomizationsWebAcl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations">CloudfrontDistributionTenantCustomizations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.certificate"></a>

```java
public CloudfrontDistributionTenantCustomizationsCertificateOutputReference getCertificate();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference">CloudfrontDistributionTenantCustomizationsCertificateOutputReference</a>

---

##### `geoRestrictions`<sup>Required</sup> <a name="geoRestrictions" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.geoRestrictions"></a>

```java
public CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference getGeoRestrictions();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference">CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference</a>

---

##### `webAcl`<sup>Required</sup> <a name="webAcl" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.webAcl"></a>

```java
public CloudfrontDistributionTenantCustomizationsWebAclOutputReference getWebAcl();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference">CloudfrontDistributionTenantCustomizationsWebAclOutputReference</a>

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.certificateInput"></a>

```java
public IResolvable|CloudfrontDistributionTenantCustomizationsCertificate getCertificateInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificate">CloudfrontDistributionTenantCustomizationsCertificate</a>

---

##### `geoRestrictionsInput`<sup>Optional</sup> <a name="geoRestrictionsInput" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.geoRestrictionsInput"></a>

```java
public IResolvable|CloudfrontDistributionTenantCustomizationsGeoRestrictions getGeoRestrictionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictions">CloudfrontDistributionTenantCustomizationsGeoRestrictions</a>

---

##### `webAclInput`<sup>Optional</sup> <a name="webAclInput" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.webAclInput"></a>

```java
public IResolvable|CloudfrontDistributionTenantCustomizationsWebAcl getWebAclInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAcl">CloudfrontDistributionTenantCustomizationsWebAcl</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudfrontDistributionTenantCustomizations getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations">CloudfrontDistributionTenantCustomizations</a>

---


### CloudfrontDistributionTenantCustomizationsWebAclOutputReference <a name="CloudfrontDistributionTenantCustomizationsWebAclOutputReference" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudfront_distribution_tenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference;

new CloudfrontDistributionTenantCustomizationsWebAclOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.resetArn">resetArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAction` <a name="resetAction" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.resetAction"></a>

```java
public void resetAction()
```

##### `resetArn` <a name="resetArn" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.resetArn"></a>

```java
public void resetArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.arnInput">arnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAcl">CloudfrontDistributionTenantCustomizationsWebAcl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.arnInput"></a>

```java
public java.lang.String getArnInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudfrontDistributionTenantCustomizationsWebAcl getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAcl">CloudfrontDistributionTenantCustomizationsWebAcl</a>

---


### CloudfrontDistributionTenantDomainResultsList <a name="CloudfrontDistributionTenantDomainResultsList" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudfront_distribution_tenant.CloudfrontDistributionTenantDomainResultsList;

new CloudfrontDistributionTenantDomainResultsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsList.get"></a>

```java
public CloudfrontDistributionTenantDomainResultsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### CloudfrontDistributionTenantDomainResultsOutputReference <a name="CloudfrontDistributionTenantDomainResultsOutputReference" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudfront_distribution_tenant.CloudfrontDistributionTenantDomainResultsOutputReference;

new CloudfrontDistributionTenantDomainResultsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResults">CloudfrontDistributionTenantDomainResults</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.property.internalValue"></a>

```java
public CloudfrontDistributionTenantDomainResults getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResults">CloudfrontDistributionTenantDomainResults</a>

---


### CloudfrontDistributionTenantManagedCertificateRequestOutputReference <a name="CloudfrontDistributionTenantManagedCertificateRequestOutputReference" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudfront_distribution_tenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference;

new CloudfrontDistributionTenantManagedCertificateRequestOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.resetCertificateTransparencyLoggingPreference">resetCertificateTransparencyLoggingPreference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.resetPrimaryDomainName">resetPrimaryDomainName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.resetValidationTokenHost">resetValidationTokenHost</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateTransparencyLoggingPreference` <a name="resetCertificateTransparencyLoggingPreference" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.resetCertificateTransparencyLoggingPreference"></a>

```java
public void resetCertificateTransparencyLoggingPreference()
```

##### `resetPrimaryDomainName` <a name="resetPrimaryDomainName" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.resetPrimaryDomainName"></a>

```java
public void resetPrimaryDomainName()
```

##### `resetValidationTokenHost` <a name="resetValidationTokenHost" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.resetValidationTokenHost"></a>

```java
public void resetValidationTokenHost()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.certificateTransparencyLoggingPreferenceInput">certificateTransparencyLoggingPreferenceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.primaryDomainNameInput">primaryDomainNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.validationTokenHostInput">validationTokenHostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.certificateTransparencyLoggingPreference">certificateTransparencyLoggingPreference</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.primaryDomainName">primaryDomainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.validationTokenHost">validationTokenHost</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest">CloudfrontDistributionTenantManagedCertificateRequest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateTransparencyLoggingPreferenceInput`<sup>Optional</sup> <a name="certificateTransparencyLoggingPreferenceInput" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.certificateTransparencyLoggingPreferenceInput"></a>

```java
public java.lang.String getCertificateTransparencyLoggingPreferenceInput();
```

- *Type:* java.lang.String

---

##### `primaryDomainNameInput`<sup>Optional</sup> <a name="primaryDomainNameInput" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.primaryDomainNameInput"></a>

```java
public java.lang.String getPrimaryDomainNameInput();
```

- *Type:* java.lang.String

---

##### `validationTokenHostInput`<sup>Optional</sup> <a name="validationTokenHostInput" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.validationTokenHostInput"></a>

```java
public java.lang.String getValidationTokenHostInput();
```

- *Type:* java.lang.String

---

##### `certificateTransparencyLoggingPreference`<sup>Required</sup> <a name="certificateTransparencyLoggingPreference" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.certificateTransparencyLoggingPreference"></a>

```java
public java.lang.String getCertificateTransparencyLoggingPreference();
```

- *Type:* java.lang.String

---

##### `primaryDomainName`<sup>Required</sup> <a name="primaryDomainName" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.primaryDomainName"></a>

```java
public java.lang.String getPrimaryDomainName();
```

- *Type:* java.lang.String

---

##### `validationTokenHost`<sup>Required</sup> <a name="validationTokenHost" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.validationTokenHost"></a>

```java
public java.lang.String getValidationTokenHost();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudfrontDistributionTenantManagedCertificateRequest getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest">CloudfrontDistributionTenantManagedCertificateRequest</a>

---


### CloudfrontDistributionTenantParametersList <a name="CloudfrontDistributionTenantParametersList" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersList.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudfront_distribution_tenant.CloudfrontDistributionTenantParametersList;

new CloudfrontDistributionTenantParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersList.get"></a>

```java
public CloudfrontDistributionTenantParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameters">CloudfrontDistributionTenantParameters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CloudfrontDistributionTenantParameters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameters">CloudfrontDistributionTenantParameters</a>>

---


### CloudfrontDistributionTenantParametersOutputReference <a name="CloudfrontDistributionTenantParametersOutputReference" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudfront_distribution_tenant.CloudfrontDistributionTenantParametersOutputReference;

new CloudfrontDistributionTenantParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameters">CloudfrontDistributionTenantParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudfrontDistributionTenantParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameters">CloudfrontDistributionTenantParameters</a>

---


### CloudfrontDistributionTenantTagsList <a name="CloudfrontDistributionTenantTagsList" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudfront_distribution_tenant.CloudfrontDistributionTenantTagsList;

new CloudfrontDistributionTenantTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsList.get"></a>

```java
public CloudfrontDistributionTenantTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTags">CloudfrontDistributionTenantTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CloudfrontDistributionTenantTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTags">CloudfrontDistributionTenantTags</a>>

---


### CloudfrontDistributionTenantTagsOutputReference <a name="CloudfrontDistributionTenantTagsOutputReference" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudfront_distribution_tenant.CloudfrontDistributionTenantTagsOutputReference;

new CloudfrontDistributionTenantTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTags">CloudfrontDistributionTenantTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudfrontDistributionTenantTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTags">CloudfrontDistributionTenantTags</a>

---



