# `cognitoUserPoolUser` Submodule <a name="`cognitoUserPoolUser` Submodule" id="@cdktn/provider-awscc.cognitoUserPoolUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoUserPoolUser <a name="CognitoUserPoolUser" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_user awscc_cognito_user_pool_user}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer"></a>

```java
import io.cdktn.providers.awscc.cognito_user_pool_user.CognitoUserPoolUser;

CognitoUserPoolUser.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .userPoolId(java.lang.String)
//  .clientMetadata(java.util.Map<java.lang.String, java.lang.String>)
//  .desiredDeliveryMediums(java.util.List<java.lang.String>)
//  .forceAliasCreation(java.lang.Boolean|IResolvable)
//  .messageAction(java.lang.String)
//  .userAttributes(IResolvable|java.util.List<CognitoUserPoolUserUserAttributes>)
//  .username(java.lang.String)
//  .validationData(IResolvable|java.util.List<CognitoUserPoolUserValidationData>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer.parameter.userPoolId">userPoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_user#user_pool_id CognitoUserPoolUser#user_pool_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer.parameter.clientMetadata">clientMetadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_user#client_metadata CognitoUserPoolUser#client_metadata}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer.parameter.desiredDeliveryMediums">desiredDeliveryMediums</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_user#desired_delivery_mediums CognitoUserPoolUser#desired_delivery_mediums}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer.parameter.forceAliasCreation">forceAliasCreation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_user#force_alias_creation CognitoUserPoolUser#force_alias_creation}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer.parameter.messageAction">messageAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_user#message_action CognitoUserPoolUser#message_action}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer.parameter.userAttributes">userAttributes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributes">CognitoUserPoolUserUserAttributes</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_user#user_attributes CognitoUserPoolUser#user_attributes}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer.parameter.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_user#username CognitoUserPoolUser#username}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer.parameter.validationData">validationData</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationData">CognitoUserPoolUserValidationData</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_user#validation_data CognitoUserPoolUser#validation_data}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer.parameter.userPoolId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_user#user_pool_id CognitoUserPoolUser#user_pool_id}.

---

##### `clientMetadata`<sup>Optional</sup> <a name="clientMetadata" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer.parameter.clientMetadata"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_user#client_metadata CognitoUserPoolUser#client_metadata}.

---

##### `desiredDeliveryMediums`<sup>Optional</sup> <a name="desiredDeliveryMediums" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer.parameter.desiredDeliveryMediums"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_user#desired_delivery_mediums CognitoUserPoolUser#desired_delivery_mediums}.

---

##### `forceAliasCreation`<sup>Optional</sup> <a name="forceAliasCreation" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer.parameter.forceAliasCreation"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_user#force_alias_creation CognitoUserPoolUser#force_alias_creation}.

---

##### `messageAction`<sup>Optional</sup> <a name="messageAction" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer.parameter.messageAction"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_user#message_action CognitoUserPoolUser#message_action}.

---

##### `userAttributes`<sup>Optional</sup> <a name="userAttributes" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer.parameter.userAttributes"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributes">CognitoUserPoolUserUserAttributes</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_user#user_attributes CognitoUserPoolUser#user_attributes}.

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer.parameter.username"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_user#username CognitoUserPoolUser#username}.

---

##### `validationData`<sup>Optional</sup> <a name="validationData" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer.parameter.validationData"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationData">CognitoUserPoolUserValidationData</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_user#validation_data CognitoUserPoolUser#validation_data}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.putUserAttributes">putUserAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.putValidationData">putValidationData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.resetClientMetadata">resetClientMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.resetDesiredDeliveryMediums">resetDesiredDeliveryMediums</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.resetForceAliasCreation">resetForceAliasCreation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.resetMessageAction">resetMessageAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.resetUserAttributes">resetUserAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.resetUsername">resetUsername</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.resetValidationData">resetValidationData</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putUserAttributes` <a name="putUserAttributes" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.putUserAttributes"></a>

```java
public void putUserAttributes(IResolvable|java.util.List<CognitoUserPoolUserUserAttributes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.putUserAttributes.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributes">CognitoUserPoolUserUserAttributes</a>>

---

##### `putValidationData` <a name="putValidationData" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.putValidationData"></a>

```java
public void putValidationData(IResolvable|java.util.List<CognitoUserPoolUserValidationData> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.putValidationData.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationData">CognitoUserPoolUserValidationData</a>>

---

##### `resetClientMetadata` <a name="resetClientMetadata" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.resetClientMetadata"></a>

```java
public void resetClientMetadata()
```

##### `resetDesiredDeliveryMediums` <a name="resetDesiredDeliveryMediums" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.resetDesiredDeliveryMediums"></a>

```java
public void resetDesiredDeliveryMediums()
```

##### `resetForceAliasCreation` <a name="resetForceAliasCreation" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.resetForceAliasCreation"></a>

```java
public void resetForceAliasCreation()
```

##### `resetMessageAction` <a name="resetMessageAction" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.resetMessageAction"></a>

```java
public void resetMessageAction()
```

##### `resetUserAttributes` <a name="resetUserAttributes" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.resetUserAttributes"></a>

```java
public void resetUserAttributes()
```

##### `resetUsername` <a name="resetUsername" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.resetUsername"></a>

```java
public void resetUsername()
```

##### `resetValidationData` <a name="resetValidationData" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.resetValidationData"></a>

```java
public void resetValidationData()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CognitoUserPoolUser resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.isConstruct"></a>

```java
import io.cdktn.providers.awscc.cognito_user_pool_user.CognitoUserPoolUser;

CognitoUserPoolUser.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.cognito_user_pool_user.CognitoUserPoolUser;

CognitoUserPoolUser.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.cognito_user_pool_user.CognitoUserPoolUser;

CognitoUserPoolUser.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.cognito_user_pool_user.CognitoUserPoolUser;

CognitoUserPoolUser.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CognitoUserPoolUser.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CognitoUserPoolUser resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CognitoUserPoolUser to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CognitoUserPoolUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CognitoUserPoolUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.userAttributes">userAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList">CognitoUserPoolUserUserAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.validationData">validationData</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList">CognitoUserPoolUserValidationDataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.clientMetadataInput">clientMetadataInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.desiredDeliveryMediumsInput">desiredDeliveryMediumsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.forceAliasCreationInput">forceAliasCreationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.messageActionInput">messageActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.userAttributesInput">userAttributesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributes">CognitoUserPoolUserUserAttributes</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.userPoolIdInput">userPoolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.validationDataInput">validationDataInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationData">CognitoUserPoolUserValidationData</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.clientMetadata">clientMetadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.desiredDeliveryMediums">desiredDeliveryMediums</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.forceAliasCreation">forceAliasCreation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.messageAction">messageAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.userPoolId">userPoolId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `userAttributes`<sup>Required</sup> <a name="userAttributes" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.userAttributes"></a>

```java
public CognitoUserPoolUserUserAttributesList getUserAttributes();
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList">CognitoUserPoolUserUserAttributesList</a>

---

##### `validationData`<sup>Required</sup> <a name="validationData" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.validationData"></a>

```java
public CognitoUserPoolUserValidationDataList getValidationData();
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList">CognitoUserPoolUserValidationDataList</a>

---

##### `clientMetadataInput`<sup>Optional</sup> <a name="clientMetadataInput" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.clientMetadataInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getClientMetadataInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `desiredDeliveryMediumsInput`<sup>Optional</sup> <a name="desiredDeliveryMediumsInput" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.desiredDeliveryMediumsInput"></a>

```java
public java.util.List<java.lang.String> getDesiredDeliveryMediumsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forceAliasCreationInput`<sup>Optional</sup> <a name="forceAliasCreationInput" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.forceAliasCreationInput"></a>

```java
public java.lang.Boolean|IResolvable getForceAliasCreationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `messageActionInput`<sup>Optional</sup> <a name="messageActionInput" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.messageActionInput"></a>

```java
public java.lang.String getMessageActionInput();
```

- *Type:* java.lang.String

---

##### `userAttributesInput`<sup>Optional</sup> <a name="userAttributesInput" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.userAttributesInput"></a>

```java
public IResolvable|java.util.List<CognitoUserPoolUserUserAttributes> getUserAttributesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributes">CognitoUserPoolUserUserAttributes</a>>

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `userPoolIdInput`<sup>Optional</sup> <a name="userPoolIdInput" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.userPoolIdInput"></a>

```java
public java.lang.String getUserPoolIdInput();
```

- *Type:* java.lang.String

---

##### `validationDataInput`<sup>Optional</sup> <a name="validationDataInput" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.validationDataInput"></a>

```java
public IResolvable|java.util.List<CognitoUserPoolUserValidationData> getValidationDataInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationData">CognitoUserPoolUserValidationData</a>>

---

##### `clientMetadata`<sup>Required</sup> <a name="clientMetadata" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.clientMetadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getClientMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `desiredDeliveryMediums`<sup>Required</sup> <a name="desiredDeliveryMediums" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.desiredDeliveryMediums"></a>

```java
public java.util.List<java.lang.String> getDesiredDeliveryMediums();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forceAliasCreation`<sup>Required</sup> <a name="forceAliasCreation" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.forceAliasCreation"></a>

```java
public java.lang.Boolean|IResolvable getForceAliasCreation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `messageAction`<sup>Required</sup> <a name="messageAction" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.messageAction"></a>

```java
public java.lang.String getMessageAction();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.userPoolId"></a>

```java
public java.lang.String getUserPoolId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoUserPoolUserConfig <a name="CognitoUserPoolUserConfig" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.cognito_user_pool_user.CognitoUserPoolUserConfig;

CognitoUserPoolUserConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .userPoolId(java.lang.String)
//  .clientMetadata(java.util.Map<java.lang.String, java.lang.String>)
//  .desiredDeliveryMediums(java.util.List<java.lang.String>)
//  .forceAliasCreation(java.lang.Boolean|IResolvable)
//  .messageAction(java.lang.String)
//  .userAttributes(IResolvable|java.util.List<CognitoUserPoolUserUserAttributes>)
//  .username(java.lang.String)
//  .validationData(IResolvable|java.util.List<CognitoUserPoolUserValidationData>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.userPoolId">userPoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_user#user_pool_id CognitoUserPoolUser#user_pool_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.clientMetadata">clientMetadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_user#client_metadata CognitoUserPoolUser#client_metadata}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.desiredDeliveryMediums">desiredDeliveryMediums</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_user#desired_delivery_mediums CognitoUserPoolUser#desired_delivery_mediums}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.forceAliasCreation">forceAliasCreation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_user#force_alias_creation CognitoUserPoolUser#force_alias_creation}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.messageAction">messageAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_user#message_action CognitoUserPoolUser#message_action}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.userAttributes">userAttributes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributes">CognitoUserPoolUserUserAttributes</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_user#user_attributes CognitoUserPoolUser#user_attributes}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_user#username CognitoUserPoolUser#username}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.validationData">validationData</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationData">CognitoUserPoolUserValidationData</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_user#validation_data CognitoUserPoolUser#validation_data}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.userPoolId"></a>

```java
public java.lang.String getUserPoolId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_user#user_pool_id CognitoUserPoolUser#user_pool_id}.

---

##### `clientMetadata`<sup>Optional</sup> <a name="clientMetadata" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.clientMetadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getClientMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_user#client_metadata CognitoUserPoolUser#client_metadata}.

---

##### `desiredDeliveryMediums`<sup>Optional</sup> <a name="desiredDeliveryMediums" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.desiredDeliveryMediums"></a>

```java
public java.util.List<java.lang.String> getDesiredDeliveryMediums();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_user#desired_delivery_mediums CognitoUserPoolUser#desired_delivery_mediums}.

---

##### `forceAliasCreation`<sup>Optional</sup> <a name="forceAliasCreation" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.forceAliasCreation"></a>

```java
public java.lang.Boolean|IResolvable getForceAliasCreation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_user#force_alias_creation CognitoUserPoolUser#force_alias_creation}.

---

##### `messageAction`<sup>Optional</sup> <a name="messageAction" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.messageAction"></a>

```java
public java.lang.String getMessageAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_user#message_action CognitoUserPoolUser#message_action}.

---

##### `userAttributes`<sup>Optional</sup> <a name="userAttributes" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.userAttributes"></a>

```java
public IResolvable|java.util.List<CognitoUserPoolUserUserAttributes> getUserAttributes();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributes">CognitoUserPoolUserUserAttributes</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_user#user_attributes CognitoUserPoolUser#user_attributes}.

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_user#username CognitoUserPoolUser#username}.

---

##### `validationData`<sup>Optional</sup> <a name="validationData" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.validationData"></a>

```java
public IResolvable|java.util.List<CognitoUserPoolUserValidationData> getValidationData();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationData">CognitoUserPoolUserValidationData</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_user#validation_data CognitoUserPoolUser#validation_data}.

---

### CognitoUserPoolUserUserAttributes <a name="CognitoUserPoolUserUserAttributes" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributes.Initializer"></a>

```java
import io.cdktn.providers.awscc.cognito_user_pool_user.CognitoUserPoolUserUserAttributes;

CognitoUserPoolUserUserAttributes.builder()
//  .name(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributes.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_user#name CognitoUserPoolUser#name}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributes.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_user#value CognitoUserPoolUser#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributes.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_user#name CognitoUserPoolUser#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributes.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_user#value CognitoUserPoolUser#value}.

---

### CognitoUserPoolUserValidationData <a name="CognitoUserPoolUserValidationData" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationData"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationData.Initializer"></a>

```java
import io.cdktn.providers.awscc.cognito_user_pool_user.CognitoUserPoolUserValidationData;

CognitoUserPoolUserValidationData.builder()
//  .name(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationData.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_user#name CognitoUserPoolUser#name}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationData.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_user#value CognitoUserPoolUser#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationData.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_user#name CognitoUserPoolUser#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationData.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_user#value CognitoUserPoolUser#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CognitoUserPoolUserUserAttributesList <a name="CognitoUserPoolUserUserAttributesList" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.cognito_user_pool_user.CognitoUserPoolUserUserAttributesList;

new CognitoUserPoolUserUserAttributesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.get"></a>

```java
public CognitoUserPoolUserUserAttributesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributes">CognitoUserPoolUserUserAttributes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CognitoUserPoolUserUserAttributes> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributes">CognitoUserPoolUserUserAttributes</a>>

---


### CognitoUserPoolUserUserAttributesOutputReference <a name="CognitoUserPoolUserUserAttributesOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cognito_user_pool_user.CognitoUserPoolUserUserAttributesOutputReference;

new CognitoUserPoolUserUserAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributes">CognitoUserPoolUserUserAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.property.internalValue"></a>

```java
public IResolvable|CognitoUserPoolUserUserAttributes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributes">CognitoUserPoolUserUserAttributes</a>

---


### CognitoUserPoolUserValidationDataList <a name="CognitoUserPoolUserValidationDataList" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.Initializer"></a>

```java
import io.cdktn.providers.awscc.cognito_user_pool_user.CognitoUserPoolUserValidationDataList;

new CognitoUserPoolUserValidationDataList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.get"></a>

```java
public CognitoUserPoolUserValidationDataOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationData">CognitoUserPoolUserValidationData</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CognitoUserPoolUserValidationData> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationData">CognitoUserPoolUserValidationData</a>>

---


### CognitoUserPoolUserValidationDataOutputReference <a name="CognitoUserPoolUserValidationDataOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cognito_user_pool_user.CognitoUserPoolUserValidationDataOutputReference;

new CognitoUserPoolUserValidationDataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationData">CognitoUserPoolUserValidationData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.property.internalValue"></a>

```java
public IResolvable|CognitoUserPoolUserValidationData getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationData">CognitoUserPoolUserValidationData</a>

---



