# `cognitoUserPoolSessionConfigurationAttachment` Submodule <a name="`cognitoUserPoolSessionConfigurationAttachment` Submodule" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoUserPoolSessionConfigurationAttachment <a name="CognitoUserPoolSessionConfigurationAttachment" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cognito_user_pool_session_configuration_attachment awscc_cognito_user_pool_session_configuration_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.Initializer"></a>

```java
import io.cdktn.providers.awscc.cognito_user_pool_session_configuration_attachment.CognitoUserPoolSessionConfigurationAttachment;

CognitoUserPoolSessionConfigurationAttachment.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .tokenSession(CognitoUserPoolSessionConfigurationAttachmentTokenSession)
    .userPoolId(java.lang.String)
    .userSessionTracking(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.Initializer.parameter.tokenSession">tokenSession</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSession">CognitoUserPoolSessionConfigurationAttachmentTokenSession</a></code> | Token session settings that apply to every app client in the user pool. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.Initializer.parameter.userPoolId">userPoolId</a></code> | <code>java.lang.String</code> | The ID of the user pool. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.Initializer.parameter.userSessionTracking">userSessionTracking</a></code> | <code>java.lang.String</code> | Whether server-side user session tracking is enabled for the user pool. Requires the ESSENTIALS or PLUS feature plan. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `tokenSession`<sup>Required</sup> <a name="tokenSession" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.Initializer.parameter.tokenSession"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSession">CognitoUserPoolSessionConfigurationAttachmentTokenSession</a>

Token session settings that apply to every app client in the user pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cognito_user_pool_session_configuration_attachment#token_session CognitoUserPoolSessionConfigurationAttachment#token_session}

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.Initializer.parameter.userPoolId"></a>

- *Type:* java.lang.String

The ID of the user pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cognito_user_pool_session_configuration_attachment#user_pool_id CognitoUserPoolSessionConfigurationAttachment#user_pool_id}

---

##### `userSessionTracking`<sup>Required</sup> <a name="userSessionTracking" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.Initializer.parameter.userSessionTracking"></a>

- *Type:* java.lang.String

Whether server-side user session tracking is enabled for the user pool. Requires the ESSENTIALS or PLUS feature plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cognito_user_pool_session_configuration_attachment#user_session_tracking CognitoUserPoolSessionConfigurationAttachment#user_session_tracking}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.putTokenSession">putTokenSession</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTokenSession` <a name="putTokenSession" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.putTokenSession"></a>

```java
public void putTokenSession(CognitoUserPoolSessionConfigurationAttachmentTokenSession value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.putTokenSession.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSession">CognitoUserPoolSessionConfigurationAttachmentTokenSession</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CognitoUserPoolSessionConfigurationAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.isConstruct"></a>

```java
import io.cdktn.providers.awscc.cognito_user_pool_session_configuration_attachment.CognitoUserPoolSessionConfigurationAttachment;

CognitoUserPoolSessionConfigurationAttachment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.cognito_user_pool_session_configuration_attachment.CognitoUserPoolSessionConfigurationAttachment;

CognitoUserPoolSessionConfigurationAttachment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.cognito_user_pool_session_configuration_attachment.CognitoUserPoolSessionConfigurationAttachment;

CognitoUserPoolSessionConfigurationAttachment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.cognito_user_pool_session_configuration_attachment.CognitoUserPoolSessionConfigurationAttachment;

CognitoUserPoolSessionConfigurationAttachment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CognitoUserPoolSessionConfigurationAttachment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CognitoUserPoolSessionConfigurationAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CognitoUserPoolSessionConfigurationAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CognitoUserPoolSessionConfigurationAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cognito_user_pool_session_configuration_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CognitoUserPoolSessionConfigurationAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.tokenSession">tokenSession</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference">CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.tokenSessionInput">tokenSessionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSession">CognitoUserPoolSessionConfigurationAttachmentTokenSession</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.userPoolIdInput">userPoolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.userSessionTrackingInput">userSessionTrackingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.userPoolId">userPoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.userSessionTracking">userSessionTracking</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tokenSession`<sup>Required</sup> <a name="tokenSession" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.tokenSession"></a>

```java
public CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference getTokenSession();
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference">CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference</a>

---

##### `tokenSessionInput`<sup>Optional</sup> <a name="tokenSessionInput" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.tokenSessionInput"></a>

```java
public IResolvable|CognitoUserPoolSessionConfigurationAttachmentTokenSession getTokenSessionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSession">CognitoUserPoolSessionConfigurationAttachmentTokenSession</a>

---

##### `userPoolIdInput`<sup>Optional</sup> <a name="userPoolIdInput" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.userPoolIdInput"></a>

```java
public java.lang.String getUserPoolIdInput();
```

- *Type:* java.lang.String

---

##### `userSessionTrackingInput`<sup>Optional</sup> <a name="userSessionTrackingInput" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.userSessionTrackingInput"></a>

```java
public java.lang.String getUserSessionTrackingInput();
```

- *Type:* java.lang.String

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.userPoolId"></a>

```java
public java.lang.String getUserPoolId();
```

- *Type:* java.lang.String

---

##### `userSessionTracking`<sup>Required</sup> <a name="userSessionTracking" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.userSessionTracking"></a>

```java
public java.lang.String getUserSessionTracking();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoUserPoolSessionConfigurationAttachmentConfig <a name="CognitoUserPoolSessionConfigurationAttachmentConfig" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.cognito_user_pool_session_configuration_attachment.CognitoUserPoolSessionConfigurationAttachmentConfig;

CognitoUserPoolSessionConfigurationAttachmentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .tokenSession(CognitoUserPoolSessionConfigurationAttachmentTokenSession)
    .userPoolId(java.lang.String)
    .userSessionTracking(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentConfig.property.tokenSession">tokenSession</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSession">CognitoUserPoolSessionConfigurationAttachmentTokenSession</a></code> | Token session settings that apply to every app client in the user pool. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentConfig.property.userPoolId">userPoolId</a></code> | <code>java.lang.String</code> | The ID of the user pool. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentConfig.property.userSessionTracking">userSessionTracking</a></code> | <code>java.lang.String</code> | Whether server-side user session tracking is enabled for the user pool. Requires the ESSENTIALS or PLUS feature plan. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `tokenSession`<sup>Required</sup> <a name="tokenSession" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentConfig.property.tokenSession"></a>

```java
public CognitoUserPoolSessionConfigurationAttachmentTokenSession getTokenSession();
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSession">CognitoUserPoolSessionConfigurationAttachmentTokenSession</a>

Token session settings that apply to every app client in the user pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cognito_user_pool_session_configuration_attachment#token_session CognitoUserPoolSessionConfigurationAttachment#token_session}

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentConfig.property.userPoolId"></a>

```java
public java.lang.String getUserPoolId();
```

- *Type:* java.lang.String

The ID of the user pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cognito_user_pool_session_configuration_attachment#user_pool_id CognitoUserPoolSessionConfigurationAttachment#user_pool_id}

---

##### `userSessionTracking`<sup>Required</sup> <a name="userSessionTracking" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentConfig.property.userSessionTracking"></a>

```java
public java.lang.String getUserSessionTracking();
```

- *Type:* java.lang.String

Whether server-side user session tracking is enabled for the user pool. Requires the ESSENTIALS or PLUS feature plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cognito_user_pool_session_configuration_attachment#user_session_tracking CognitoUserPoolSessionConfigurationAttachment#user_session_tracking}

---

### CognitoUserPoolSessionConfigurationAttachmentTokenSession <a name="CognitoUserPoolSessionConfigurationAttachmentTokenSession" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSession"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSession.Initializer"></a>

```java
import io.cdktn.providers.awscc.cognito_user_pool_session_configuration_attachment.CognitoUserPoolSessionConfigurationAttachmentTokenSession;

CognitoUserPoolSessionConfigurationAttachmentTokenSession.builder()
    .maxPerUser(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSession.property.maxPerUser">maxPerUser</a></code> | <code>java.lang.Number</code> | The maximum number of concurrent token sessions per user across all app clients. |

---

##### `maxPerUser`<sup>Required</sup> <a name="maxPerUser" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSession.property.maxPerUser"></a>

```java
public java.lang.Number getMaxPerUser();
```

- *Type:* java.lang.Number

The maximum number of concurrent token sessions per user across all app clients.

When a new session would exceed this number, the least recently used session ends.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cognito_user_pool_session_configuration_attachment#max_per_user CognitoUserPoolSessionConfigurationAttachment#max_per_user}

---

## Classes <a name="Classes" id="Classes"></a>

### CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference <a name="CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cognito_user_pool_session_configuration_attachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference;

new CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.property.maxPerUserInput">maxPerUserInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.property.maxPerUser">maxPerUser</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSession">CognitoUserPoolSessionConfigurationAttachmentTokenSession</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxPerUserInput`<sup>Optional</sup> <a name="maxPerUserInput" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.property.maxPerUserInput"></a>

```java
public java.lang.Number getMaxPerUserInput();
```

- *Type:* java.lang.Number

---

##### `maxPerUser`<sup>Required</sup> <a name="maxPerUser" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.property.maxPerUser"></a>

```java
public java.lang.Number getMaxPerUser();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.property.internalValue"></a>

```java
public IResolvable|CognitoUserPoolSessionConfigurationAttachmentTokenSession getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSession">CognitoUserPoolSessionConfigurationAttachmentTokenSession</a>

---



