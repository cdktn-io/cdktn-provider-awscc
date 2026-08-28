# `sagemakerWorkforce` Submodule <a name="`sagemakerWorkforce` Submodule" id="@cdktn/provider-awscc.sagemakerWorkforce"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerWorkforce <a name="SagemakerWorkforce" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_workforce awscc_sagemaker_workforce}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_workforce.SagemakerWorkforce;

SagemakerWorkforce.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .workforceName(java.lang.String)
//  .cognitoConfig(SagemakerWorkforceCognitoConfig)
//  .ipAddressType(java.lang.String)
//  .oidcConfig(SagemakerWorkforceOidcConfig)
//  .sourceIpConfig(SagemakerWorkforceSourceIpConfig)
//  .tags(IResolvable|java.util.List<SagemakerWorkforceTags>)
//  .workforceVpcConfig(SagemakerWorkforceWorkforceVpcConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.workforceName">workforceName</a></code> | <code>java.lang.String</code> | The name of the private workforce. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.cognitoConfig">cognitoConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfig">SagemakerWorkforceCognitoConfig</a></code> | The configuration of an Amazon Cognito workforce. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.ipAddressType">ipAddressType</a></code> | <code>java.lang.String</code> | The IP address type for the workforce. IPv4 only or dualstack (IPv4 and IPv6). |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.oidcConfig">oidcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfig">SagemakerWorkforceOidcConfig</a></code> | The configuration of an OIDC Identity Provider (IdP) private workforce. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.sourceIpConfig">sourceIpConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceSourceIpConfig">SagemakerWorkforceSourceIpConfig</a></code> | A list of IP address ranges used to access your training data. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTags">SagemakerWorkforceTags</a>></code> | An array of key-value pairs. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.workforceVpcConfig">workforceVpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfig">SagemakerWorkforceWorkforceVpcConfig</a></code> | The VPC configuration for the workforce. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `workforceName`<sup>Required</sup> <a name="workforceName" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.workforceName"></a>

- *Type:* java.lang.String

The name of the private workforce.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_workforce#workforce_name SagemakerWorkforce#workforce_name}

---

##### `cognitoConfig`<sup>Optional</sup> <a name="cognitoConfig" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.cognitoConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfig">SagemakerWorkforceCognitoConfig</a>

The configuration of an Amazon Cognito workforce.

A single Cognito workforce is created using and corresponds to a single Amazon Cognito user pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_workforce#cognito_config SagemakerWorkforce#cognito_config}

---

##### `ipAddressType`<sup>Optional</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.ipAddressType"></a>

- *Type:* java.lang.String

The IP address type for the workforce. IPv4 only or dualstack (IPv4 and IPv6).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_workforce#ip_address_type SagemakerWorkforce#ip_address_type}

---

##### `oidcConfig`<sup>Optional</sup> <a name="oidcConfig" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.oidcConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfig">SagemakerWorkforceOidcConfig</a>

The configuration of an OIDC Identity Provider (IdP) private workforce.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_workforce#oidc_config SagemakerWorkforce#oidc_config}

---

##### `sourceIpConfig`<sup>Optional</sup> <a name="sourceIpConfig" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.sourceIpConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceSourceIpConfig">SagemakerWorkforceSourceIpConfig</a>

A list of IP address ranges used to access your training data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_workforce#source_ip_config SagemakerWorkforce#source_ip_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTags">SagemakerWorkforceTags</a>>

An array of key-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_workforce#tags SagemakerWorkforce#tags}

---

##### `workforceVpcConfig`<sup>Optional</sup> <a name="workforceVpcConfig" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.workforceVpcConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfig">SagemakerWorkforceWorkforceVpcConfig</a>

The VPC configuration for the workforce.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_workforce#workforce_vpc_config SagemakerWorkforce#workforce_vpc_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.putCognitoConfig">putCognitoConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.putOidcConfig">putOidcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.putSourceIpConfig">putSourceIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.putWorkforceVpcConfig">putWorkforceVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.resetCognitoConfig">resetCognitoConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.resetIpAddressType">resetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.resetOidcConfig">resetOidcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.resetSourceIpConfig">resetSourceIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.resetWorkforceVpcConfig">resetWorkforceVpcConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCognitoConfig` <a name="putCognitoConfig" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.putCognitoConfig"></a>

```java
public void putCognitoConfig(SagemakerWorkforceCognitoConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.putCognitoConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfig">SagemakerWorkforceCognitoConfig</a>

---

##### `putOidcConfig` <a name="putOidcConfig" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.putOidcConfig"></a>

```java
public void putOidcConfig(SagemakerWorkforceOidcConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.putOidcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfig">SagemakerWorkforceOidcConfig</a>

---

##### `putSourceIpConfig` <a name="putSourceIpConfig" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.putSourceIpConfig"></a>

```java
public void putSourceIpConfig(SagemakerWorkforceSourceIpConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.putSourceIpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceSourceIpConfig">SagemakerWorkforceSourceIpConfig</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<SagemakerWorkforceTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTags">SagemakerWorkforceTags</a>>

---

##### `putWorkforceVpcConfig` <a name="putWorkforceVpcConfig" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.putWorkforceVpcConfig"></a>

```java
public void putWorkforceVpcConfig(SagemakerWorkforceWorkforceVpcConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.putWorkforceVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfig">SagemakerWorkforceWorkforceVpcConfig</a>

---

##### `resetCognitoConfig` <a name="resetCognitoConfig" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.resetCognitoConfig"></a>

```java
public void resetCognitoConfig()
```

##### `resetIpAddressType` <a name="resetIpAddressType" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.resetIpAddressType"></a>

```java
public void resetIpAddressType()
```

##### `resetOidcConfig` <a name="resetOidcConfig" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.resetOidcConfig"></a>

```java
public void resetOidcConfig()
```

##### `resetSourceIpConfig` <a name="resetSourceIpConfig" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.resetSourceIpConfig"></a>

```java
public void resetSourceIpConfig()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.resetTags"></a>

```java
public void resetTags()
```

##### `resetWorkforceVpcConfig` <a name="resetWorkforceVpcConfig" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.resetWorkforceVpcConfig"></a>

```java
public void resetWorkforceVpcConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerWorkforce resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.isConstruct"></a>

```java
import io.cdktn.providers.awscc.sagemaker_workforce.SagemakerWorkforce;

SagemakerWorkforce.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.sagemaker_workforce.SagemakerWorkforce;

SagemakerWorkforce.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.sagemaker_workforce.SagemakerWorkforce;

SagemakerWorkforce.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.sagemaker_workforce.SagemakerWorkforce;

SagemakerWorkforce.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SagemakerWorkforce.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SagemakerWorkforce resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SagemakerWorkforce to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SagemakerWorkforce that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_workforce#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerWorkforce to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.property.cognitoConfig">cognitoConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference">SagemakerWorkforceCognitoConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.property.oidcConfig">oidcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference">SagemakerWorkforceOidcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.property.sourceIpConfig">sourceIpConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference">SagemakerWorkforceSourceIpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.property.subDomain">subDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsList">SagemakerWorkforceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.property.workforceArn">workforceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.property.workforceVpcConfig">workforceVpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference">SagemakerWorkforceWorkforceVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.property.cognitoConfigInput">cognitoConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfig">SagemakerWorkforceCognitoConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.property.ipAddressTypeInput">ipAddressTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.property.oidcConfigInput">oidcConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfig">SagemakerWorkforceOidcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.property.sourceIpConfigInput">sourceIpConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceSourceIpConfig">SagemakerWorkforceSourceIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTags">SagemakerWorkforceTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.property.workforceNameInput">workforceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.property.workforceVpcConfigInput">workforceVpcConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfig">SagemakerWorkforceWorkforceVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.property.ipAddressType">ipAddressType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.property.workforceName">workforceName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cognitoConfig`<sup>Required</sup> <a name="cognitoConfig" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.property.cognitoConfig"></a>

```java
public SagemakerWorkforceCognitoConfigOutputReference getCognitoConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference">SagemakerWorkforceCognitoConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `oidcConfig`<sup>Required</sup> <a name="oidcConfig" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.property.oidcConfig"></a>

```java
public SagemakerWorkforceOidcConfigOutputReference getOidcConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference">SagemakerWorkforceOidcConfigOutputReference</a>

---

##### `sourceIpConfig`<sup>Required</sup> <a name="sourceIpConfig" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.property.sourceIpConfig"></a>

```java
public SagemakerWorkforceSourceIpConfigOutputReference getSourceIpConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference">SagemakerWorkforceSourceIpConfigOutputReference</a>

---

##### `subDomain`<sup>Required</sup> <a name="subDomain" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.property.subDomain"></a>

```java
public java.lang.String getSubDomain();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.property.tags"></a>

```java
public SagemakerWorkforceTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsList">SagemakerWorkforceTagsList</a>

---

##### `workforceArn`<sup>Required</sup> <a name="workforceArn" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.property.workforceArn"></a>

```java
public java.lang.String getWorkforceArn();
```

- *Type:* java.lang.String

---

##### `workforceVpcConfig`<sup>Required</sup> <a name="workforceVpcConfig" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.property.workforceVpcConfig"></a>

```java
public SagemakerWorkforceWorkforceVpcConfigOutputReference getWorkforceVpcConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference">SagemakerWorkforceWorkforceVpcConfigOutputReference</a>

---

##### `cognitoConfigInput`<sup>Optional</sup> <a name="cognitoConfigInput" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.property.cognitoConfigInput"></a>

```java
public IResolvable|SagemakerWorkforceCognitoConfig getCognitoConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfig">SagemakerWorkforceCognitoConfig</a>

---

##### `ipAddressTypeInput`<sup>Optional</sup> <a name="ipAddressTypeInput" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.property.ipAddressTypeInput"></a>

```java
public java.lang.String getIpAddressTypeInput();
```

- *Type:* java.lang.String

---

##### `oidcConfigInput`<sup>Optional</sup> <a name="oidcConfigInput" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.property.oidcConfigInput"></a>

```java
public IResolvable|SagemakerWorkforceOidcConfig getOidcConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfig">SagemakerWorkforceOidcConfig</a>

---

##### `sourceIpConfigInput`<sup>Optional</sup> <a name="sourceIpConfigInput" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.property.sourceIpConfigInput"></a>

```java
public IResolvable|SagemakerWorkforceSourceIpConfig getSourceIpConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceSourceIpConfig">SagemakerWorkforceSourceIpConfig</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.property.tagsInput"></a>

```java
public IResolvable|java.util.List<SagemakerWorkforceTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTags">SagemakerWorkforceTags</a>>

---

##### `workforceNameInput`<sup>Optional</sup> <a name="workforceNameInput" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.property.workforceNameInput"></a>

```java
public java.lang.String getWorkforceNameInput();
```

- *Type:* java.lang.String

---

##### `workforceVpcConfigInput`<sup>Optional</sup> <a name="workforceVpcConfigInput" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.property.workforceVpcConfigInput"></a>

```java
public IResolvable|SagemakerWorkforceWorkforceVpcConfig getWorkforceVpcConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfig">SagemakerWorkforceWorkforceVpcConfig</a>

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.property.ipAddressType"></a>

```java
public java.lang.String getIpAddressType();
```

- *Type:* java.lang.String

---

##### `workforceName`<sup>Required</sup> <a name="workforceName" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.property.workforceName"></a>

```java
public java.lang.String getWorkforceName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforce.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerWorkforceCognitoConfig <a name="SagemakerWorkforceCognitoConfig" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_workforce.SagemakerWorkforceCognitoConfig;

SagemakerWorkforceCognitoConfig.builder()
//  .clientId(java.lang.String)
//  .userPool(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfig.property.clientId">clientId</a></code> | <code>java.lang.String</code> | The client ID for your Amazon Cognito user pool. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfig.property.userPool">userPool</a></code> | <code>java.lang.String</code> | The ID for your Amazon Cognito user pool. |

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfig.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

The client ID for your Amazon Cognito user pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_workforce#client_id SagemakerWorkforce#client_id}

---

##### `userPool`<sup>Optional</sup> <a name="userPool" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfig.property.userPool"></a>

```java
public java.lang.String getUserPool();
```

- *Type:* java.lang.String

The ID for your Amazon Cognito user pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_workforce#user_pool SagemakerWorkforce#user_pool}

---

### SagemakerWorkforceConfig <a name="SagemakerWorkforceConfig" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_workforce.SagemakerWorkforceConfig;

SagemakerWorkforceConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .workforceName(java.lang.String)
//  .cognitoConfig(SagemakerWorkforceCognitoConfig)
//  .ipAddressType(java.lang.String)
//  .oidcConfig(SagemakerWorkforceOidcConfig)
//  .sourceIpConfig(SagemakerWorkforceSourceIpConfig)
//  .tags(IResolvable|java.util.List<SagemakerWorkforceTags>)
//  .workforceVpcConfig(SagemakerWorkforceWorkforceVpcConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceConfig.property.workforceName">workforceName</a></code> | <code>java.lang.String</code> | The name of the private workforce. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceConfig.property.cognitoConfig">cognitoConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfig">SagemakerWorkforceCognitoConfig</a></code> | The configuration of an Amazon Cognito workforce. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceConfig.property.ipAddressType">ipAddressType</a></code> | <code>java.lang.String</code> | The IP address type for the workforce. IPv4 only or dualstack (IPv4 and IPv6). |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceConfig.property.oidcConfig">oidcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfig">SagemakerWorkforceOidcConfig</a></code> | The configuration of an OIDC Identity Provider (IdP) private workforce. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceConfig.property.sourceIpConfig">sourceIpConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceSourceIpConfig">SagemakerWorkforceSourceIpConfig</a></code> | A list of IP address ranges used to access your training data. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTags">SagemakerWorkforceTags</a>></code> | An array of key-value pairs. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceConfig.property.workforceVpcConfig">workforceVpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfig">SagemakerWorkforceWorkforceVpcConfig</a></code> | The VPC configuration for the workforce. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `workforceName`<sup>Required</sup> <a name="workforceName" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceConfig.property.workforceName"></a>

```java
public java.lang.String getWorkforceName();
```

- *Type:* java.lang.String

The name of the private workforce.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_workforce#workforce_name SagemakerWorkforce#workforce_name}

---

##### `cognitoConfig`<sup>Optional</sup> <a name="cognitoConfig" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceConfig.property.cognitoConfig"></a>

```java
public SagemakerWorkforceCognitoConfig getCognitoConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfig">SagemakerWorkforceCognitoConfig</a>

The configuration of an Amazon Cognito workforce.

A single Cognito workforce is created using and corresponds to a single Amazon Cognito user pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_workforce#cognito_config SagemakerWorkforce#cognito_config}

---

##### `ipAddressType`<sup>Optional</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceConfig.property.ipAddressType"></a>

```java
public java.lang.String getIpAddressType();
```

- *Type:* java.lang.String

The IP address type for the workforce. IPv4 only or dualstack (IPv4 and IPv6).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_workforce#ip_address_type SagemakerWorkforce#ip_address_type}

---

##### `oidcConfig`<sup>Optional</sup> <a name="oidcConfig" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceConfig.property.oidcConfig"></a>

```java
public SagemakerWorkforceOidcConfig getOidcConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfig">SagemakerWorkforceOidcConfig</a>

The configuration of an OIDC Identity Provider (IdP) private workforce.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_workforce#oidc_config SagemakerWorkforce#oidc_config}

---

##### `sourceIpConfig`<sup>Optional</sup> <a name="sourceIpConfig" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceConfig.property.sourceIpConfig"></a>

```java
public SagemakerWorkforceSourceIpConfig getSourceIpConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceSourceIpConfig">SagemakerWorkforceSourceIpConfig</a>

A list of IP address ranges used to access your training data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_workforce#source_ip_config SagemakerWorkforce#source_ip_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceConfig.property.tags"></a>

```java
public IResolvable|java.util.List<SagemakerWorkforceTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTags">SagemakerWorkforceTags</a>>

An array of key-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_workforce#tags SagemakerWorkforce#tags}

---

##### `workforceVpcConfig`<sup>Optional</sup> <a name="workforceVpcConfig" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceConfig.property.workforceVpcConfig"></a>

```java
public SagemakerWorkforceWorkforceVpcConfig getWorkforceVpcConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfig">SagemakerWorkforceWorkforceVpcConfig</a>

The VPC configuration for the workforce.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_workforce#workforce_vpc_config SagemakerWorkforce#workforce_vpc_config}

---

### SagemakerWorkforceOidcConfig <a name="SagemakerWorkforceOidcConfig" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_workforce.SagemakerWorkforceOidcConfig;

SagemakerWorkforceOidcConfig.builder()
//  .authenticationRequestExtraParams(java.util.Map<java.lang.String, java.lang.String>)
//  .authorizationEndpoint(java.lang.String)
//  .clientId(java.lang.String)
//  .clientSecret(java.lang.String)
//  .issuer(java.lang.String)
//  .jwksUri(java.lang.String)
//  .logoutEndpoint(java.lang.String)
//  .scope(java.lang.String)
//  .tokenEndpoint(java.lang.String)
//  .userInfoEndpoint(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfig.property.authenticationRequestExtraParams">authenticationRequestExtraParams</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A string to string map of identifiers specific to the custom identity provider (IdP) being used. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfig.property.authorizationEndpoint">authorizationEndpoint</a></code> | <code>java.lang.String</code> | The OIDC IdP authorization endpoint used to configure your private workforce. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfig.property.clientId">clientId</a></code> | <code>java.lang.String</code> | The OIDC IdP client ID used to configure your private workforce. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfig.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | The OIDC IdP client secret used to configure your private workforce. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfig.property.issuer">issuer</a></code> | <code>java.lang.String</code> | The OIDC IdP issuer used to configure your private workforce. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfig.property.jwksUri">jwksUri</a></code> | <code>java.lang.String</code> | The OIDC IdP JSON Web Key Set (Jwks) URI used to configure your private workforce. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfig.property.logoutEndpoint">logoutEndpoint</a></code> | <code>java.lang.String</code> | The OIDC IdP logout endpoint used to configure your private workforce. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfig.property.scope">scope</a></code> | <code>java.lang.String</code> | An array of string identifiers used to refer to the specific pieces of user data or claims that the client application wants to access. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfig.property.tokenEndpoint">tokenEndpoint</a></code> | <code>java.lang.String</code> | The OIDC IdP token endpoint used to configure your private workforce. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfig.property.userInfoEndpoint">userInfoEndpoint</a></code> | <code>java.lang.String</code> | The OIDC IdP user info endpoint used to configure your private workforce. |

---

##### `authenticationRequestExtraParams`<sup>Optional</sup> <a name="authenticationRequestExtraParams" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfig.property.authenticationRequestExtraParams"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAuthenticationRequestExtraParams();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A string to string map of identifiers specific to the custom identity provider (IdP) being used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_workforce#authentication_request_extra_params SagemakerWorkforce#authentication_request_extra_params}

---

##### `authorizationEndpoint`<sup>Optional</sup> <a name="authorizationEndpoint" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfig.property.authorizationEndpoint"></a>

```java
public java.lang.String getAuthorizationEndpoint();
```

- *Type:* java.lang.String

The OIDC IdP authorization endpoint used to configure your private workforce.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_workforce#authorization_endpoint SagemakerWorkforce#authorization_endpoint}

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfig.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

The OIDC IdP client ID used to configure your private workforce.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_workforce#client_id SagemakerWorkforce#client_id}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfig.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

The OIDC IdP client secret used to configure your private workforce.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_workforce#client_secret SagemakerWorkforce#client_secret}

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfig.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

The OIDC IdP issuer used to configure your private workforce.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_workforce#issuer SagemakerWorkforce#issuer}

---

##### `jwksUri`<sup>Optional</sup> <a name="jwksUri" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfig.property.jwksUri"></a>

```java
public java.lang.String getJwksUri();
```

- *Type:* java.lang.String

The OIDC IdP JSON Web Key Set (Jwks) URI used to configure your private workforce.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_workforce#jwks_uri SagemakerWorkforce#jwks_uri}

---

##### `logoutEndpoint`<sup>Optional</sup> <a name="logoutEndpoint" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfig.property.logoutEndpoint"></a>

```java
public java.lang.String getLogoutEndpoint();
```

- *Type:* java.lang.String

The OIDC IdP logout endpoint used to configure your private workforce.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_workforce#logout_endpoint SagemakerWorkforce#logout_endpoint}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfig.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

An array of string identifiers used to refer to the specific pieces of user data or claims that the client application wants to access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_workforce#scope SagemakerWorkforce#scope}

---

##### `tokenEndpoint`<sup>Optional</sup> <a name="tokenEndpoint" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfig.property.tokenEndpoint"></a>

```java
public java.lang.String getTokenEndpoint();
```

- *Type:* java.lang.String

The OIDC IdP token endpoint used to configure your private workforce.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_workforce#token_endpoint SagemakerWorkforce#token_endpoint}

---

##### `userInfoEndpoint`<sup>Optional</sup> <a name="userInfoEndpoint" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfig.property.userInfoEndpoint"></a>

```java
public java.lang.String getUserInfoEndpoint();
```

- *Type:* java.lang.String

The OIDC IdP user info endpoint used to configure your private workforce.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_workforce#user_info_endpoint SagemakerWorkforce#user_info_endpoint}

---

### SagemakerWorkforceSourceIpConfig <a name="SagemakerWorkforceSourceIpConfig" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceSourceIpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceSourceIpConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_workforce.SagemakerWorkforceSourceIpConfig;

SagemakerWorkforceSourceIpConfig.builder()
//  .cidrs(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceSourceIpConfig.property.cidrs">cidrs</a></code> | <code>java.util.List<java.lang.String></code> | A list of one to ten Classless Inter-Domain Routing (CIDR) values. |

---

##### `cidrs`<sup>Optional</sup> <a name="cidrs" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceSourceIpConfig.property.cidrs"></a>

```java
public java.util.List<java.lang.String> getCidrs();
```

- *Type:* java.util.List<java.lang.String>

A list of one to ten Classless Inter-Domain Routing (CIDR) values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_workforce#cidrs SagemakerWorkforce#cidrs}

---

### SagemakerWorkforceTags <a name="SagemakerWorkforceTags" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_workforce.SagemakerWorkforceTags;

SagemakerWorkforceTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTags.property.key">key</a></code> | <code>java.lang.String</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTags.property.value">value</a></code> | <code>java.lang.String</code> | The tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_workforce#key SagemakerWorkforce#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_workforce#value SagemakerWorkforce#value}

---

### SagemakerWorkforceWorkforceVpcConfig <a name="SagemakerWorkforceWorkforceVpcConfig" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_workforce.SagemakerWorkforceWorkforceVpcConfig;

SagemakerWorkforceWorkforceVpcConfig.builder()
//  .securityGroupIds(java.util.List<java.lang.String>)
//  .subnets(java.util.List<java.lang.String>)
//  .vpcId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | The VPC security group IDs. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfig.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | The VPC subnets. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfig.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | The ID of the VPC. |

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfig.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

The VPC security group IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_workforce#security_group_ids SagemakerWorkforce#security_group_ids}

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfig.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

The VPC subnets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_workforce#subnets SagemakerWorkforce#subnets}

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfig.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

The ID of the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_workforce#vpc_id SagemakerWorkforce#vpc_id}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerWorkforceCognitoConfigOutputReference <a name="SagemakerWorkforceCognitoConfigOutputReference" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_workforce.SagemakerWorkforceCognitoConfigOutputReference;

new SagemakerWorkforceCognitoConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.resetUserPool">resetUserPool</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientId` <a name="resetClientId" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.resetClientId"></a>

```java
public void resetClientId()
```

##### `resetUserPool` <a name="resetUserPool" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.resetUserPool"></a>

```java
public void resetUserPool()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.property.userPoolInput">userPoolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.property.userPool">userPool</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfig">SagemakerWorkforceCognitoConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `userPoolInput`<sup>Optional</sup> <a name="userPoolInput" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.property.userPoolInput"></a>

```java
public java.lang.String getUserPoolInput();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `userPool`<sup>Required</sup> <a name="userPool" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.property.userPool"></a>

```java
public java.lang.String getUserPool();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerWorkforceCognitoConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceCognitoConfig">SagemakerWorkforceCognitoConfig</a>

---


### SagemakerWorkforceOidcConfigOutputReference <a name="SagemakerWorkforceOidcConfigOutputReference" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_workforce.SagemakerWorkforceOidcConfigOutputReference;

new SagemakerWorkforceOidcConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.resetAuthenticationRequestExtraParams">resetAuthenticationRequestExtraParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.resetAuthorizationEndpoint">resetAuthorizationEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.resetIssuer">resetIssuer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.resetJwksUri">resetJwksUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.resetLogoutEndpoint">resetLogoutEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.resetTokenEndpoint">resetTokenEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.resetUserInfoEndpoint">resetUserInfoEndpoint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthenticationRequestExtraParams` <a name="resetAuthenticationRequestExtraParams" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.resetAuthenticationRequestExtraParams"></a>

```java
public void resetAuthenticationRequestExtraParams()
```

##### `resetAuthorizationEndpoint` <a name="resetAuthorizationEndpoint" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.resetAuthorizationEndpoint"></a>

```java
public void resetAuthorizationEndpoint()
```

##### `resetClientId` <a name="resetClientId" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.resetClientId"></a>

```java
public void resetClientId()
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.resetClientSecret"></a>

```java
public void resetClientSecret()
```

##### `resetIssuer` <a name="resetIssuer" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.resetIssuer"></a>

```java
public void resetIssuer()
```

##### `resetJwksUri` <a name="resetJwksUri" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.resetJwksUri"></a>

```java
public void resetJwksUri()
```

##### `resetLogoutEndpoint` <a name="resetLogoutEndpoint" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.resetLogoutEndpoint"></a>

```java
public void resetLogoutEndpoint()
```

##### `resetScope` <a name="resetScope" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.resetScope"></a>

```java
public void resetScope()
```

##### `resetTokenEndpoint` <a name="resetTokenEndpoint" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.resetTokenEndpoint"></a>

```java
public void resetTokenEndpoint()
```

##### `resetUserInfoEndpoint` <a name="resetUserInfoEndpoint" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.resetUserInfoEndpoint"></a>

```java
public void resetUserInfoEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.authenticationRequestExtraParamsInput">authenticationRequestExtraParamsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.authorizationEndpointInput">authorizationEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.issuerInput">issuerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.jwksUriInput">jwksUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.logoutEndpointInput">logoutEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.scopeInput">scopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.tokenEndpointInput">tokenEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.userInfoEndpointInput">userInfoEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.authenticationRequestExtraParams">authenticationRequestExtraParams</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.authorizationEndpoint">authorizationEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.issuer">issuer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.jwksUri">jwksUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.logoutEndpoint">logoutEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.tokenEndpoint">tokenEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.userInfoEndpoint">userInfoEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfig">SagemakerWorkforceOidcConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authenticationRequestExtraParamsInput`<sup>Optional</sup> <a name="authenticationRequestExtraParamsInput" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.authenticationRequestExtraParamsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAuthenticationRequestExtraParamsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `authorizationEndpointInput`<sup>Optional</sup> <a name="authorizationEndpointInput" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.authorizationEndpointInput"></a>

```java
public java.lang.String getAuthorizationEndpointInput();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.clientSecretInput"></a>

```java
public java.lang.String getClientSecretInput();
```

- *Type:* java.lang.String

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.issuerInput"></a>

```java
public java.lang.String getIssuerInput();
```

- *Type:* java.lang.String

---

##### `jwksUriInput`<sup>Optional</sup> <a name="jwksUriInput" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.jwksUriInput"></a>

```java
public java.lang.String getJwksUriInput();
```

- *Type:* java.lang.String

---

##### `logoutEndpointInput`<sup>Optional</sup> <a name="logoutEndpointInput" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.logoutEndpointInput"></a>

```java
public java.lang.String getLogoutEndpointInput();
```

- *Type:* java.lang.String

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.scopeInput"></a>

```java
public java.lang.String getScopeInput();
```

- *Type:* java.lang.String

---

##### `tokenEndpointInput`<sup>Optional</sup> <a name="tokenEndpointInput" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.tokenEndpointInput"></a>

```java
public java.lang.String getTokenEndpointInput();
```

- *Type:* java.lang.String

---

##### `userInfoEndpointInput`<sup>Optional</sup> <a name="userInfoEndpointInput" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.userInfoEndpointInput"></a>

```java
public java.lang.String getUserInfoEndpointInput();
```

- *Type:* java.lang.String

---

##### `authenticationRequestExtraParams`<sup>Required</sup> <a name="authenticationRequestExtraParams" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.authenticationRequestExtraParams"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAuthenticationRequestExtraParams();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `authorizationEndpoint`<sup>Required</sup> <a name="authorizationEndpoint" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.authorizationEndpoint"></a>

```java
public java.lang.String getAuthorizationEndpoint();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

---

##### `jwksUri`<sup>Required</sup> <a name="jwksUri" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.jwksUri"></a>

```java
public java.lang.String getJwksUri();
```

- *Type:* java.lang.String

---

##### `logoutEndpoint`<sup>Required</sup> <a name="logoutEndpoint" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.logoutEndpoint"></a>

```java
public java.lang.String getLogoutEndpoint();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

##### `tokenEndpoint`<sup>Required</sup> <a name="tokenEndpoint" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.tokenEndpoint"></a>

```java
public java.lang.String getTokenEndpoint();
```

- *Type:* java.lang.String

---

##### `userInfoEndpoint`<sup>Required</sup> <a name="userInfoEndpoint" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.userInfoEndpoint"></a>

```java
public java.lang.String getUserInfoEndpoint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerWorkforceOidcConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceOidcConfig">SagemakerWorkforceOidcConfig</a>

---


### SagemakerWorkforceSourceIpConfigOutputReference <a name="SagemakerWorkforceSourceIpConfigOutputReference" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_workforce.SagemakerWorkforceSourceIpConfigOutputReference;

new SagemakerWorkforceSourceIpConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.resetCidrs">resetCidrs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCidrs` <a name="resetCidrs" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.resetCidrs"></a>

```java
public void resetCidrs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.property.cidrsInput">cidrsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.property.cidrs">cidrs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceSourceIpConfig">SagemakerWorkforceSourceIpConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cidrsInput`<sup>Optional</sup> <a name="cidrsInput" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.property.cidrsInput"></a>

```java
public java.util.List<java.lang.String> getCidrsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cidrs`<sup>Required</sup> <a name="cidrs" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.property.cidrs"></a>

```java
public java.util.List<java.lang.String> getCidrs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerWorkforceSourceIpConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceSourceIpConfig">SagemakerWorkforceSourceIpConfig</a>

---


### SagemakerWorkforceTagsList <a name="SagemakerWorkforceTagsList" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_workforce.SagemakerWorkforceTagsList;

new SagemakerWorkforceTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsList.get"></a>

```java
public SagemakerWorkforceTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTags">SagemakerWorkforceTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SagemakerWorkforceTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTags">SagemakerWorkforceTags</a>>

---


### SagemakerWorkforceTagsOutputReference <a name="SagemakerWorkforceTagsOutputReference" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_workforce.SagemakerWorkforceTagsOutputReference;

new SagemakerWorkforceTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTags">SagemakerWorkforceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerWorkforceTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceTags">SagemakerWorkforceTags</a>

---


### SagemakerWorkforceWorkforceVpcConfigOutputReference <a name="SagemakerWorkforceWorkforceVpcConfigOutputReference" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_workforce.SagemakerWorkforceWorkforceVpcConfigOutputReference;

new SagemakerWorkforceWorkforceVpcConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.resetSubnets">resetSubnets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.resetVpcId">resetVpcId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.resetSecurityGroupIds"></a>

```java
public void resetSecurityGroupIds()
```

##### `resetSubnets` <a name="resetSubnets" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.resetSubnets"></a>

```java
public void resetSubnets()
```

##### `resetVpcId` <a name="resetVpcId" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.resetVpcId"></a>

```java
public void resetVpcId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.subnetsInput">subnetsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.vpcIdInput">vpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfig">SagemakerWorkforceWorkforceVpcConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetsInput`<sup>Optional</sup> <a name="subnetsInput" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.subnetsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.vpcIdInput"></a>

```java
public java.lang.String getVpcIdInput();
```

- *Type:* java.lang.String

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerWorkforceWorkforceVpcConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfig">SagemakerWorkforceWorkforceVpcConfig</a>

---



