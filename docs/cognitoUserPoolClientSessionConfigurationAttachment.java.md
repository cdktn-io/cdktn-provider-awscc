# `cognitoUserPoolClientSessionConfigurationAttachment` Submodule <a name="`cognitoUserPoolClientSessionConfigurationAttachment` Submodule" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoUserPoolClientSessionConfigurationAttachment <a name="CognitoUserPoolClientSessionConfigurationAttachment" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cognito_user_pool_client_session_configuration_attachment awscc_cognito_user_pool_client_session_configuration_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.Initializer"></a>

```java
import io.cdktn.providers.awscc.cognito_user_pool_client_session_configuration_attachment.CognitoUserPoolClientSessionConfigurationAttachment;

CognitoUserPoolClientSessionConfigurationAttachment.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .clientId(java.lang.String)
    .ssoSession(CognitoUserPoolClientSessionConfigurationAttachmentSsoSession)
    .userPoolId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.Initializer.parameter.clientId">clientId</a></code> | <code>java.lang.String</code> | The ID of the app client. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.Initializer.parameter.ssoSession">ssoSession</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSession">CognitoUserPoolClientSessionConfigurationAttachmentSsoSession</a></code> | Managed login single sign-on session settings for the app client. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.Initializer.parameter.userPoolId">userPoolId</a></code> | <code>java.lang.String</code> | The ID of the user pool. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.Initializer.parameter.clientId"></a>

- *Type:* java.lang.String

The ID of the app client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cognito_user_pool_client_session_configuration_attachment#client_id CognitoUserPoolClientSessionConfigurationAttachment#client_id}

---

##### `ssoSession`<sup>Required</sup> <a name="ssoSession" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.Initializer.parameter.ssoSession"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSession">CognitoUserPoolClientSessionConfigurationAttachmentSsoSession</a>

Managed login single sign-on session settings for the app client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cognito_user_pool_client_session_configuration_attachment#sso_session CognitoUserPoolClientSessionConfigurationAttachment#sso_session}

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.Initializer.parameter.userPoolId"></a>

- *Type:* java.lang.String

The ID of the user pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cognito_user_pool_client_session_configuration_attachment#user_pool_id CognitoUserPoolClientSessionConfigurationAttachment#user_pool_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.putSsoSession">putSsoSession</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSsoSession` <a name="putSsoSession" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.putSsoSession"></a>

```java
public void putSsoSession(CognitoUserPoolClientSessionConfigurationAttachmentSsoSession value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.putSsoSession.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSession">CognitoUserPoolClientSessionConfigurationAttachmentSsoSession</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CognitoUserPoolClientSessionConfigurationAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.isConstruct"></a>

```java
import io.cdktn.providers.awscc.cognito_user_pool_client_session_configuration_attachment.CognitoUserPoolClientSessionConfigurationAttachment;

CognitoUserPoolClientSessionConfigurationAttachment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.cognito_user_pool_client_session_configuration_attachment.CognitoUserPoolClientSessionConfigurationAttachment;

CognitoUserPoolClientSessionConfigurationAttachment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.cognito_user_pool_client_session_configuration_attachment.CognitoUserPoolClientSessionConfigurationAttachment;

CognitoUserPoolClientSessionConfigurationAttachment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.cognito_user_pool_client_session_configuration_attachment.CognitoUserPoolClientSessionConfigurationAttachment;

CognitoUserPoolClientSessionConfigurationAttachment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CognitoUserPoolClientSessionConfigurationAttachment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CognitoUserPoolClientSessionConfigurationAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CognitoUserPoolClientSessionConfigurationAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CognitoUserPoolClientSessionConfigurationAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cognito_user_pool_client_session_configuration_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CognitoUserPoolClientSessionConfigurationAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.ssoSession">ssoSession</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference">CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.ssoSessionInput">ssoSessionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSession">CognitoUserPoolClientSessionConfigurationAttachmentSsoSession</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.userPoolIdInput">userPoolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.userPoolId">userPoolId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ssoSession`<sup>Required</sup> <a name="ssoSession" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.ssoSession"></a>

```java
public CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference getSsoSession();
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference">CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference</a>

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `ssoSessionInput`<sup>Optional</sup> <a name="ssoSessionInput" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.ssoSessionInput"></a>

```java
public IResolvable|CognitoUserPoolClientSessionConfigurationAttachmentSsoSession getSsoSessionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSession">CognitoUserPoolClientSessionConfigurationAttachmentSsoSession</a>

---

##### `userPoolIdInput`<sup>Optional</sup> <a name="userPoolIdInput" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.userPoolIdInput"></a>

```java
public java.lang.String getUserPoolIdInput();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.userPoolId"></a>

```java
public java.lang.String getUserPoolId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoUserPoolClientSessionConfigurationAttachmentConfig <a name="CognitoUserPoolClientSessionConfigurationAttachmentConfig" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.cognito_user_pool_client_session_configuration_attachment.CognitoUserPoolClientSessionConfigurationAttachmentConfig;

CognitoUserPoolClientSessionConfigurationAttachmentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .clientId(java.lang.String)
    .ssoSession(CognitoUserPoolClientSessionConfigurationAttachmentSsoSession)
    .userPoolId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentConfig.property.clientId">clientId</a></code> | <code>java.lang.String</code> | The ID of the app client. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentConfig.property.ssoSession">ssoSession</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSession">CognitoUserPoolClientSessionConfigurationAttachmentSsoSession</a></code> | Managed login single sign-on session settings for the app client. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentConfig.property.userPoolId">userPoolId</a></code> | <code>java.lang.String</code> | The ID of the user pool. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentConfig.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

The ID of the app client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cognito_user_pool_client_session_configuration_attachment#client_id CognitoUserPoolClientSessionConfigurationAttachment#client_id}

---

##### `ssoSession`<sup>Required</sup> <a name="ssoSession" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentConfig.property.ssoSession"></a>

```java
public CognitoUserPoolClientSessionConfigurationAttachmentSsoSession getSsoSession();
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSession">CognitoUserPoolClientSessionConfigurationAttachmentSsoSession</a>

Managed login single sign-on session settings for the app client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cognito_user_pool_client_session_configuration_attachment#sso_session CognitoUserPoolClientSessionConfigurationAttachment#sso_session}

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentConfig.property.userPoolId"></a>

```java
public java.lang.String getUserPoolId();
```

- *Type:* java.lang.String

The ID of the user pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cognito_user_pool_client_session_configuration_attachment#user_pool_id CognitoUserPoolClientSessionConfigurationAttachment#user_pool_id}

---

### CognitoUserPoolClientSessionConfigurationAttachmentSsoSession <a name="CognitoUserPoolClientSessionConfigurationAttachmentSsoSession" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSession"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSession.Initializer"></a>

```java
import io.cdktn.providers.awscc.cognito_user_pool_client_session_configuration_attachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSession;

CognitoUserPoolClientSessionConfigurationAttachmentSsoSession.builder()
    .maxValidityMinutes(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSession.property.maxValidityMinutes">maxValidityMinutes</a></code> | <code>java.lang.Number</code> | The maximum time in minutes since the last authentication during which this app client can reuse an existing managed login SSO session without asking the user to sign in again. |

---

##### `maxValidityMinutes`<sup>Required</sup> <a name="maxValidityMinutes" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSession.property.maxValidityMinutes"></a>

```java
public java.lang.Number getMaxValidityMinutes();
```

- *Type:* java.lang.Number

The maximum time in minutes since the last authentication during which this app client can reuse an existing managed login SSO session without asking the user to sign in again.

0 means the app client always asks the user to sign in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cognito_user_pool_client_session_configuration_attachment#max_validity_minutes CognitoUserPoolClientSessionConfigurationAttachment#max_validity_minutes}

---

## Classes <a name="Classes" id="Classes"></a>

### CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference <a name="CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cognito_user_pool_client_session_configuration_attachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference;

new CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.property.maxValidityMinutesInput">maxValidityMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.property.maxValidityMinutes">maxValidityMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSession">CognitoUserPoolClientSessionConfigurationAttachmentSsoSession</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxValidityMinutesInput`<sup>Optional</sup> <a name="maxValidityMinutesInput" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.property.maxValidityMinutesInput"></a>

```java
public java.lang.Number getMaxValidityMinutesInput();
```

- *Type:* java.lang.Number

---

##### `maxValidityMinutes`<sup>Required</sup> <a name="maxValidityMinutes" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.property.maxValidityMinutes"></a>

```java
public java.lang.Number getMaxValidityMinutes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.property.internalValue"></a>

```java
public IResolvable|CognitoUserPoolClientSessionConfigurationAttachmentSsoSession getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolClientSessionConfigurationAttachment.CognitoUserPoolClientSessionConfigurationAttachmentSsoSession">CognitoUserPoolClientSessionConfigurationAttachmentSsoSession</a>

---



