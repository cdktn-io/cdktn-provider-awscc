# `cognitoIdentityPoolPrincipalTag` Submodule <a name="`cognitoIdentityPoolPrincipalTag` Submodule" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoIdentityPoolPrincipalTag <a name="CognitoIdentityPoolPrincipalTag" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_identity_pool_principal_tag awscc_cognito_identity_pool_principal_tag}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.Initializer"></a>

```java
import io.cdktn.providers.awscc.cognito_identity_pool_principal_tag.CognitoIdentityPoolPrincipalTag;

CognitoIdentityPoolPrincipalTag.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .identityPoolId(java.lang.String)
    .identityProviderName(java.lang.String)
//  .principalTags(java.lang.String)
//  .useDefaults(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.Initializer.parameter.identityPoolId">identityPoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_identity_pool_principal_tag#identity_pool_id CognitoIdentityPoolPrincipalTag#identity_pool_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.Initializer.parameter.identityProviderName">identityProviderName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_identity_pool_principal_tag#identity_provider_name CognitoIdentityPoolPrincipalTag#identity_provider_name}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.Initializer.parameter.principalTags">principalTags</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_identity_pool_principal_tag#principal_tags CognitoIdentityPoolPrincipalTag#principal_tags}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.Initializer.parameter.useDefaults">useDefaults</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_identity_pool_principal_tag#use_defaults CognitoIdentityPoolPrincipalTag#use_defaults}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `identityPoolId`<sup>Required</sup> <a name="identityPoolId" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.Initializer.parameter.identityPoolId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_identity_pool_principal_tag#identity_pool_id CognitoIdentityPoolPrincipalTag#identity_pool_id}.

---

##### `identityProviderName`<sup>Required</sup> <a name="identityProviderName" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.Initializer.parameter.identityProviderName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_identity_pool_principal_tag#identity_provider_name CognitoIdentityPoolPrincipalTag#identity_provider_name}.

---

##### `principalTags`<sup>Optional</sup> <a name="principalTags" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.Initializer.parameter.principalTags"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_identity_pool_principal_tag#principal_tags CognitoIdentityPoolPrincipalTag#principal_tags}.

---

##### `useDefaults`<sup>Optional</sup> <a name="useDefaults" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.Initializer.parameter.useDefaults"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_identity_pool_principal_tag#use_defaults CognitoIdentityPoolPrincipalTag#use_defaults}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.resetPrincipalTags">resetPrincipalTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.resetUseDefaults">resetUseDefaults</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetPrincipalTags` <a name="resetPrincipalTags" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.resetPrincipalTags"></a>

```java
public void resetPrincipalTags()
```

##### `resetUseDefaults` <a name="resetUseDefaults" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.resetUseDefaults"></a>

```java
public void resetUseDefaults()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CognitoIdentityPoolPrincipalTag resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.isConstruct"></a>

```java
import io.cdktn.providers.awscc.cognito_identity_pool_principal_tag.CognitoIdentityPoolPrincipalTag;

CognitoIdentityPoolPrincipalTag.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.cognito_identity_pool_principal_tag.CognitoIdentityPoolPrincipalTag;

CognitoIdentityPoolPrincipalTag.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.cognito_identity_pool_principal_tag.CognitoIdentityPoolPrincipalTag;

CognitoIdentityPoolPrincipalTag.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.cognito_identity_pool_principal_tag.CognitoIdentityPoolPrincipalTag;

CognitoIdentityPoolPrincipalTag.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CognitoIdentityPoolPrincipalTag.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CognitoIdentityPoolPrincipalTag resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CognitoIdentityPoolPrincipalTag to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CognitoIdentityPoolPrincipalTag that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_identity_pool_principal_tag#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CognitoIdentityPoolPrincipalTag to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.identityPoolIdInput">identityPoolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.identityProviderNameInput">identityProviderNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.principalTagsInput">principalTagsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.useDefaultsInput">useDefaultsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.identityPoolId">identityPoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.identityProviderName">identityProviderName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.principalTags">principalTags</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.useDefaults">useDefaults</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `identityPoolIdInput`<sup>Optional</sup> <a name="identityPoolIdInput" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.identityPoolIdInput"></a>

```java
public java.lang.String getIdentityPoolIdInput();
```

- *Type:* java.lang.String

---

##### `identityProviderNameInput`<sup>Optional</sup> <a name="identityProviderNameInput" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.identityProviderNameInput"></a>

```java
public java.lang.String getIdentityProviderNameInput();
```

- *Type:* java.lang.String

---

##### `principalTagsInput`<sup>Optional</sup> <a name="principalTagsInput" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.principalTagsInput"></a>

```java
public java.lang.String getPrincipalTagsInput();
```

- *Type:* java.lang.String

---

##### `useDefaultsInput`<sup>Optional</sup> <a name="useDefaultsInput" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.useDefaultsInput"></a>

```java
public java.lang.Boolean|IResolvable getUseDefaultsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `identityPoolId`<sup>Required</sup> <a name="identityPoolId" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.identityPoolId"></a>

```java
public java.lang.String getIdentityPoolId();
```

- *Type:* java.lang.String

---

##### `identityProviderName`<sup>Required</sup> <a name="identityProviderName" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.identityProviderName"></a>

```java
public java.lang.String getIdentityProviderName();
```

- *Type:* java.lang.String

---

##### `principalTags`<sup>Required</sup> <a name="principalTags" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.principalTags"></a>

```java
public java.lang.String getPrincipalTags();
```

- *Type:* java.lang.String

---

##### `useDefaults`<sup>Required</sup> <a name="useDefaults" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.useDefaults"></a>

```java
public java.lang.Boolean|IResolvable getUseDefaults();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoIdentityPoolPrincipalTagConfig <a name="CognitoIdentityPoolPrincipalTagConfig" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.cognito_identity_pool_principal_tag.CognitoIdentityPoolPrincipalTagConfig;

CognitoIdentityPoolPrincipalTagConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .identityPoolId(java.lang.String)
    .identityProviderName(java.lang.String)
//  .principalTags(java.lang.String)
//  .useDefaults(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.identityPoolId">identityPoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_identity_pool_principal_tag#identity_pool_id CognitoIdentityPoolPrincipalTag#identity_pool_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.identityProviderName">identityProviderName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_identity_pool_principal_tag#identity_provider_name CognitoIdentityPoolPrincipalTag#identity_provider_name}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.principalTags">principalTags</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_identity_pool_principal_tag#principal_tags CognitoIdentityPoolPrincipalTag#principal_tags}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.useDefaults">useDefaults</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_identity_pool_principal_tag#use_defaults CognitoIdentityPoolPrincipalTag#use_defaults}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `identityPoolId`<sup>Required</sup> <a name="identityPoolId" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.identityPoolId"></a>

```java
public java.lang.String getIdentityPoolId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_identity_pool_principal_tag#identity_pool_id CognitoIdentityPoolPrincipalTag#identity_pool_id}.

---

##### `identityProviderName`<sup>Required</sup> <a name="identityProviderName" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.identityProviderName"></a>

```java
public java.lang.String getIdentityProviderName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_identity_pool_principal_tag#identity_provider_name CognitoIdentityPoolPrincipalTag#identity_provider_name}.

---

##### `principalTags`<sup>Optional</sup> <a name="principalTags" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.principalTags"></a>

```java
public java.lang.String getPrincipalTags();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_identity_pool_principal_tag#principal_tags CognitoIdentityPoolPrincipalTag#principal_tags}.

---

##### `useDefaults`<sup>Optional</sup> <a name="useDefaults" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.useDefaults"></a>

```java
public java.lang.Boolean|IResolvable getUseDefaults();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_identity_pool_principal_tag#use_defaults CognitoIdentityPoolPrincipalTag#use_defaults}.

---



