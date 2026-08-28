# `cognitoUserPoolDomain` Submodule <a name="`cognitoUserPoolDomain` Submodule" id="@cdktn/provider-awscc.cognitoUserPoolDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoUserPoolDomain <a name="CognitoUserPoolDomain" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_domain awscc_cognito_user_pool_domain}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer"></a>

```java
import io.cdktn.providers.awscc.cognito_user_pool_domain.CognitoUserPoolDomain;

CognitoUserPoolDomain.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .domain(java.lang.String)
    .userPoolId(java.lang.String)
//  .customDomainConfig(CognitoUserPoolDomainCustomDomainConfig)
//  .managedLoginVersion(java.lang.Number)
//  .routing(CognitoUserPoolDomainRouting)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.domain">domain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_domain#domain CognitoUserPoolDomain#domain}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.userPoolId">userPoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_domain#user_pool_id CognitoUserPoolDomain#user_pool_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.customDomainConfig">customDomainConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfig">CognitoUserPoolDomainCustomDomainConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_domain#custom_domain_config CognitoUserPoolDomain#custom_domain_config}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.managedLoginVersion">managedLoginVersion</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_domain#managed_login_version CognitoUserPoolDomain#managed_login_version}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.routing">routing</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRouting">CognitoUserPoolDomainRouting</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_domain#routing CognitoUserPoolDomain#routing}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.domain"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_domain#domain CognitoUserPoolDomain#domain}.

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.userPoolId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_domain#user_pool_id CognitoUserPoolDomain#user_pool_id}.

---

##### `customDomainConfig`<sup>Optional</sup> <a name="customDomainConfig" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.customDomainConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfig">CognitoUserPoolDomainCustomDomainConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_domain#custom_domain_config CognitoUserPoolDomain#custom_domain_config}.

---

##### `managedLoginVersion`<sup>Optional</sup> <a name="managedLoginVersion" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.managedLoginVersion"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_domain#managed_login_version CognitoUserPoolDomain#managed_login_version}.

---

##### `routing`<sup>Optional</sup> <a name="routing" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.routing"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRouting">CognitoUserPoolDomainRouting</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_domain#routing CognitoUserPoolDomain#routing}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.putCustomDomainConfig">putCustomDomainConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.putRouting">putRouting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.resetCustomDomainConfig">resetCustomDomainConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.resetManagedLoginVersion">resetManagedLoginVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.resetRouting">resetRouting</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomDomainConfig` <a name="putCustomDomainConfig" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.putCustomDomainConfig"></a>

```java
public void putCustomDomainConfig(CognitoUserPoolDomainCustomDomainConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.putCustomDomainConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfig">CognitoUserPoolDomainCustomDomainConfig</a>

---

##### `putRouting` <a name="putRouting" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.putRouting"></a>

```java
public void putRouting(CognitoUserPoolDomainRouting value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.putRouting.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRouting">CognitoUserPoolDomainRouting</a>

---

##### `resetCustomDomainConfig` <a name="resetCustomDomainConfig" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.resetCustomDomainConfig"></a>

```java
public void resetCustomDomainConfig()
```

##### `resetManagedLoginVersion` <a name="resetManagedLoginVersion" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.resetManagedLoginVersion"></a>

```java
public void resetManagedLoginVersion()
```

##### `resetRouting` <a name="resetRouting" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.resetRouting"></a>

```java
public void resetRouting()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CognitoUserPoolDomain resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.isConstruct"></a>

```java
import io.cdktn.providers.awscc.cognito_user_pool_domain.CognitoUserPoolDomain;

CognitoUserPoolDomain.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.cognito_user_pool_domain.CognitoUserPoolDomain;

CognitoUserPoolDomain.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.cognito_user_pool_domain.CognitoUserPoolDomain;

CognitoUserPoolDomain.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.cognito_user_pool_domain.CognitoUserPoolDomain;

CognitoUserPoolDomain.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CognitoUserPoolDomain.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CognitoUserPoolDomain resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CognitoUserPoolDomain to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CognitoUserPoolDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CognitoUserPoolDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.cloudfrontDistribution">cloudfrontDistribution</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.customDomainConfig">customDomainConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference">CognitoUserPoolDomainCustomDomainConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.routing">routing</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference">CognitoUserPoolDomainRoutingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.customDomainConfigInput">customDomainConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfig">CognitoUserPoolDomainCustomDomainConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.domainInput">domainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.managedLoginVersionInput">managedLoginVersionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.routingInput">routingInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRouting">CognitoUserPoolDomainRouting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.userPoolIdInput">userPoolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.managedLoginVersion">managedLoginVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.userPoolId">userPoolId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cloudfrontDistribution`<sup>Required</sup> <a name="cloudfrontDistribution" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.cloudfrontDistribution"></a>

```java
public java.lang.String getCloudfrontDistribution();
```

- *Type:* java.lang.String

---

##### `customDomainConfig`<sup>Required</sup> <a name="customDomainConfig" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.customDomainConfig"></a>

```java
public CognitoUserPoolDomainCustomDomainConfigOutputReference getCustomDomainConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference">CognitoUserPoolDomainCustomDomainConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `routing`<sup>Required</sup> <a name="routing" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.routing"></a>

```java
public CognitoUserPoolDomainRoutingOutputReference getRouting();
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference">CognitoUserPoolDomainRoutingOutputReference</a>

---

##### `customDomainConfigInput`<sup>Optional</sup> <a name="customDomainConfigInput" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.customDomainConfigInput"></a>

```java
public IResolvable|CognitoUserPoolDomainCustomDomainConfig getCustomDomainConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfig">CognitoUserPoolDomainCustomDomainConfig</a>

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.domainInput"></a>

```java
public java.lang.String getDomainInput();
```

- *Type:* java.lang.String

---

##### `managedLoginVersionInput`<sup>Optional</sup> <a name="managedLoginVersionInput" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.managedLoginVersionInput"></a>

```java
public java.lang.Number getManagedLoginVersionInput();
```

- *Type:* java.lang.Number

---

##### `routingInput`<sup>Optional</sup> <a name="routingInput" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.routingInput"></a>

```java
public IResolvable|CognitoUserPoolDomainRouting getRoutingInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRouting">CognitoUserPoolDomainRouting</a>

---

##### `userPoolIdInput`<sup>Optional</sup> <a name="userPoolIdInput" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.userPoolIdInput"></a>

```java
public java.lang.String getUserPoolIdInput();
```

- *Type:* java.lang.String

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `managedLoginVersion`<sup>Required</sup> <a name="managedLoginVersion" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.managedLoginVersion"></a>

```java
public java.lang.Number getManagedLoginVersion();
```

- *Type:* java.lang.Number

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.userPoolId"></a>

```java
public java.lang.String getUserPoolId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoUserPoolDomainConfig <a name="CognitoUserPoolDomainConfig" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.cognito_user_pool_domain.CognitoUserPoolDomainConfig;

CognitoUserPoolDomainConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .domain(java.lang.String)
    .userPoolId(java.lang.String)
//  .customDomainConfig(CognitoUserPoolDomainCustomDomainConfig)
//  .managedLoginVersion(java.lang.Number)
//  .routing(CognitoUserPoolDomainRouting)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.domain">domain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_domain#domain CognitoUserPoolDomain#domain}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.userPoolId">userPoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_domain#user_pool_id CognitoUserPoolDomain#user_pool_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.customDomainConfig">customDomainConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfig">CognitoUserPoolDomainCustomDomainConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_domain#custom_domain_config CognitoUserPoolDomain#custom_domain_config}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.managedLoginVersion">managedLoginVersion</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_domain#managed_login_version CognitoUserPoolDomain#managed_login_version}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.routing">routing</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRouting">CognitoUserPoolDomainRouting</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_domain#routing CognitoUserPoolDomain#routing}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_domain#domain CognitoUserPoolDomain#domain}.

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.userPoolId"></a>

```java
public java.lang.String getUserPoolId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_domain#user_pool_id CognitoUserPoolDomain#user_pool_id}.

---

##### `customDomainConfig`<sup>Optional</sup> <a name="customDomainConfig" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.customDomainConfig"></a>

```java
public CognitoUserPoolDomainCustomDomainConfig getCustomDomainConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfig">CognitoUserPoolDomainCustomDomainConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_domain#custom_domain_config CognitoUserPoolDomain#custom_domain_config}.

---

##### `managedLoginVersion`<sup>Optional</sup> <a name="managedLoginVersion" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.managedLoginVersion"></a>

```java
public java.lang.Number getManagedLoginVersion();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_domain#managed_login_version CognitoUserPoolDomain#managed_login_version}.

---

##### `routing`<sup>Optional</sup> <a name="routing" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.routing"></a>

```java
public CognitoUserPoolDomainRouting getRouting();
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRouting">CognitoUserPoolDomainRouting</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_domain#routing CognitoUserPoolDomain#routing}.

---

### CognitoUserPoolDomainCustomDomainConfig <a name="CognitoUserPoolDomainCustomDomainConfig" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.cognito_user_pool_domain.CognitoUserPoolDomainCustomDomainConfig;

CognitoUserPoolDomainCustomDomainConfig.builder()
//  .certificateArn(java.lang.String)
//  .securityPolicy(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfig.property.certificateArn">certificateArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_domain#certificate_arn CognitoUserPoolDomain#certificate_arn}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfig.property.securityPolicy">securityPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_domain#security_policy CognitoUserPoolDomain#security_policy}. |

---

##### `certificateArn`<sup>Optional</sup> <a name="certificateArn" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfig.property.certificateArn"></a>

```java
public java.lang.String getCertificateArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_domain#certificate_arn CognitoUserPoolDomain#certificate_arn}.

---

##### `securityPolicy`<sup>Optional</sup> <a name="securityPolicy" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfig.property.securityPolicy"></a>

```java
public java.lang.String getSecurityPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_domain#security_policy CognitoUserPoolDomain#security_policy}.

---

### CognitoUserPoolDomainRouting <a name="CognitoUserPoolDomainRouting" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRouting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRouting.Initializer"></a>

```java
import io.cdktn.providers.awscc.cognito_user_pool_domain.CognitoUserPoolDomainRouting;

CognitoUserPoolDomainRouting.builder()
//  .failover(CognitoUserPoolDomainRoutingFailover)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRouting.property.failover">failover</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailover">CognitoUserPoolDomainRoutingFailover</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_domain#failover CognitoUserPoolDomain#failover}. |

---

##### `failover`<sup>Optional</sup> <a name="failover" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRouting.property.failover"></a>

```java
public CognitoUserPoolDomainRoutingFailover getFailover();
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailover">CognitoUserPoolDomainRoutingFailover</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_domain#failover CognitoUserPoolDomain#failover}.

---

### CognitoUserPoolDomainRoutingFailover <a name="CognitoUserPoolDomainRoutingFailover" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailover"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailover.Initializer"></a>

```java
import io.cdktn.providers.awscc.cognito_user_pool_domain.CognitoUserPoolDomainRoutingFailover;

CognitoUserPoolDomainRoutingFailover.builder()
//  .primaryRoute53HealthCheckId(java.lang.String)
//  .secondaryRegion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailover.property.primaryRoute53HealthCheckId">primaryRoute53HealthCheckId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_domain#primary_route_53_health_check_id CognitoUserPoolDomain#primary_route_53_health_check_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailover.property.secondaryRegion">secondaryRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_domain#secondary_region CognitoUserPoolDomain#secondary_region}. |

---

##### `primaryRoute53HealthCheckId`<sup>Optional</sup> <a name="primaryRoute53HealthCheckId" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailover.property.primaryRoute53HealthCheckId"></a>

```java
public java.lang.String getPrimaryRoute53HealthCheckId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_domain#primary_route_53_health_check_id CognitoUserPoolDomain#primary_route_53_health_check_id}.

---

##### `secondaryRegion`<sup>Optional</sup> <a name="secondaryRegion" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailover.property.secondaryRegion"></a>

```java
public java.lang.String getSecondaryRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_domain#secondary_region CognitoUserPoolDomain#secondary_region}.

---

## Classes <a name="Classes" id="Classes"></a>

### CognitoUserPoolDomainCustomDomainConfigOutputReference <a name="CognitoUserPoolDomainCustomDomainConfigOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cognito_user_pool_domain.CognitoUserPoolDomainCustomDomainConfigOutputReference;

new CognitoUserPoolDomainCustomDomainConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.resetCertificateArn">resetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.resetSecurityPolicy">resetSecurityPolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateArn` <a name="resetCertificateArn" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.resetCertificateArn"></a>

```java
public void resetCertificateArn()
```

##### `resetSecurityPolicy` <a name="resetSecurityPolicy" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.resetSecurityPolicy"></a>

```java
public void resetSecurityPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.property.certificateArnInput">certificateArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.property.securityPolicyInput">securityPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.property.certificateArn">certificateArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.property.securityPolicy">securityPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfig">CognitoUserPoolDomainCustomDomainConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateArnInput`<sup>Optional</sup> <a name="certificateArnInput" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.property.certificateArnInput"></a>

```java
public java.lang.String getCertificateArnInput();
```

- *Type:* java.lang.String

---

##### `securityPolicyInput`<sup>Optional</sup> <a name="securityPolicyInput" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.property.securityPolicyInput"></a>

```java
public java.lang.String getSecurityPolicyInput();
```

- *Type:* java.lang.String

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.property.certificateArn"></a>

```java
public java.lang.String getCertificateArn();
```

- *Type:* java.lang.String

---

##### `securityPolicy`<sup>Required</sup> <a name="securityPolicy" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.property.securityPolicy"></a>

```java
public java.lang.String getSecurityPolicy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|CognitoUserPoolDomainCustomDomainConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfig">CognitoUserPoolDomainCustomDomainConfig</a>

---


### CognitoUserPoolDomainRoutingFailoverOutputReference <a name="CognitoUserPoolDomainRoutingFailoverOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cognito_user_pool_domain.CognitoUserPoolDomainRoutingFailoverOutputReference;

new CognitoUserPoolDomainRoutingFailoverOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.resetPrimaryRoute53HealthCheckId">resetPrimaryRoute53HealthCheckId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.resetSecondaryRegion">resetSecondaryRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrimaryRoute53HealthCheckId` <a name="resetPrimaryRoute53HealthCheckId" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.resetPrimaryRoute53HealthCheckId"></a>

```java
public void resetPrimaryRoute53HealthCheckId()
```

##### `resetSecondaryRegion` <a name="resetSecondaryRegion" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.resetSecondaryRegion"></a>

```java
public void resetSecondaryRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.property.primaryRoute53HealthCheckIdInput">primaryRoute53HealthCheckIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.property.secondaryRegionInput">secondaryRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.property.primaryRoute53HealthCheckId">primaryRoute53HealthCheckId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.property.secondaryRegion">secondaryRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailover">CognitoUserPoolDomainRoutingFailover</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `primaryRoute53HealthCheckIdInput`<sup>Optional</sup> <a name="primaryRoute53HealthCheckIdInput" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.property.primaryRoute53HealthCheckIdInput"></a>

```java
public java.lang.String getPrimaryRoute53HealthCheckIdInput();
```

- *Type:* java.lang.String

---

##### `secondaryRegionInput`<sup>Optional</sup> <a name="secondaryRegionInput" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.property.secondaryRegionInput"></a>

```java
public java.lang.String getSecondaryRegionInput();
```

- *Type:* java.lang.String

---

##### `primaryRoute53HealthCheckId`<sup>Required</sup> <a name="primaryRoute53HealthCheckId" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.property.primaryRoute53HealthCheckId"></a>

```java
public java.lang.String getPrimaryRoute53HealthCheckId();
```

- *Type:* java.lang.String

---

##### `secondaryRegion`<sup>Required</sup> <a name="secondaryRegion" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.property.secondaryRegion"></a>

```java
public java.lang.String getSecondaryRegion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.property.internalValue"></a>

```java
public IResolvable|CognitoUserPoolDomainRoutingFailover getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailover">CognitoUserPoolDomainRoutingFailover</a>

---


### CognitoUserPoolDomainRoutingOutputReference <a name="CognitoUserPoolDomainRoutingOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cognito_user_pool_domain.CognitoUserPoolDomainRoutingOutputReference;

new CognitoUserPoolDomainRoutingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.putFailover">putFailover</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.resetFailover">resetFailover</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFailover` <a name="putFailover" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.putFailover"></a>

```java
public void putFailover(CognitoUserPoolDomainRoutingFailover value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.putFailover.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailover">CognitoUserPoolDomainRoutingFailover</a>

---

##### `resetFailover` <a name="resetFailover" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.resetFailover"></a>

```java
public void resetFailover()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.property.failover">failover</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference">CognitoUserPoolDomainRoutingFailoverOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.property.failoverInput">failoverInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailover">CognitoUserPoolDomainRoutingFailover</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRouting">CognitoUserPoolDomainRouting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `failover`<sup>Required</sup> <a name="failover" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.property.failover"></a>

```java
public CognitoUserPoolDomainRoutingFailoverOutputReference getFailover();
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference">CognitoUserPoolDomainRoutingFailoverOutputReference</a>

---

##### `failoverInput`<sup>Optional</sup> <a name="failoverInput" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.property.failoverInput"></a>

```java
public IResolvable|CognitoUserPoolDomainRoutingFailover getFailoverInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailover">CognitoUserPoolDomainRoutingFailover</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.property.internalValue"></a>

```java
public IResolvable|CognitoUserPoolDomainRouting getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRouting">CognitoUserPoolDomainRouting</a>

---



