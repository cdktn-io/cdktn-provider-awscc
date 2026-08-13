# `sagemakerUserProfile` Submodule <a name="`sagemakerUserProfile` Submodule" id="@cdktn/provider-awscc.sagemakerUserProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerUserProfile <a name="SagemakerUserProfile" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile awscc_sagemaker_user_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_user_profile.SagemakerUserProfile;

SagemakerUserProfile.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .domainId(java.lang.String)
    .userProfileName(java.lang.String)
//  .singleSignOnUserIdentifier(java.lang.String)
//  .singleSignOnUserValue(java.lang.String)
//  .tags(IResolvable|java.util.List<SagemakerUserProfileTags>)
//  .userSettings(SagemakerUserProfileUserSettings)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.domainId">domainId</a></code> | <code>java.lang.String</code> | The ID of the associated Domain. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.userProfileName">userProfileName</a></code> | <code>java.lang.String</code> | A name for the UserProfile. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.singleSignOnUserIdentifier">singleSignOnUserIdentifier</a></code> | <code>java.lang.String</code> | A specifier for the type of value specified in SingleSignOnUserValue. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.singleSignOnUserValue">singleSignOnUserValue</a></code> | <code>java.lang.String</code> | The username of the associated AWS Single Sign-On User for this UserProfile. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTags">SagemakerUserProfileTags</a>></code> | A list of tags to apply to the user profile. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.userSettings">userSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings">SagemakerUserProfileUserSettings</a></code> | A collection of settings. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.domainId"></a>

- *Type:* java.lang.String

The ID of the associated Domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#domain_id SagemakerUserProfile#domain_id}

---

##### `userProfileName`<sup>Required</sup> <a name="userProfileName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.userProfileName"></a>

- *Type:* java.lang.String

A name for the UserProfile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#user_profile_name SagemakerUserProfile#user_profile_name}

---

##### `singleSignOnUserIdentifier`<sup>Optional</sup> <a name="singleSignOnUserIdentifier" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.singleSignOnUserIdentifier"></a>

- *Type:* java.lang.String

A specifier for the type of value specified in SingleSignOnUserValue.

Currently, the only supported value is "UserName". If the Domain's AuthMode is SSO, this field is required. If the Domain's AuthMode is not SSO, this field cannot be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#single_sign_on_user_identifier SagemakerUserProfile#single_sign_on_user_identifier}

---

##### `singleSignOnUserValue`<sup>Optional</sup> <a name="singleSignOnUserValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.singleSignOnUserValue"></a>

- *Type:* java.lang.String

The username of the associated AWS Single Sign-On User for this UserProfile.

If the Domain's AuthMode is SSO, this field is required, and must match a valid username of a user in your directory. If the Domain's AuthMode is not SSO, this field cannot be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#single_sign_on_user_value SagemakerUserProfile#single_sign_on_user_value}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTags">SagemakerUserProfileTags</a>>

A list of tags to apply to the user profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#tags SagemakerUserProfile#tags}

---

##### `userSettings`<sup>Optional</sup> <a name="userSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.userSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings">SagemakerUserProfileUserSettings</a>

A collection of settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#user_settings SagemakerUserProfile#user_settings}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.putUserSettings">putUserSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.resetSingleSignOnUserIdentifier">resetSingleSignOnUserIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.resetSingleSignOnUserValue">resetSingleSignOnUserValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.resetUserSettings">resetUserSettings</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<SagemakerUserProfileTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTags">SagemakerUserProfileTags</a>>

---

##### `putUserSettings` <a name="putUserSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.putUserSettings"></a>

```java
public void putUserSettings(SagemakerUserProfileUserSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.putUserSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings">SagemakerUserProfileUserSettings</a>

---

##### `resetSingleSignOnUserIdentifier` <a name="resetSingleSignOnUserIdentifier" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.resetSingleSignOnUserIdentifier"></a>

```java
public void resetSingleSignOnUserIdentifier()
```

##### `resetSingleSignOnUserValue` <a name="resetSingleSignOnUserValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.resetSingleSignOnUserValue"></a>

```java
public void resetSingleSignOnUserValue()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.resetTags"></a>

```java
public void resetTags()
```

##### `resetUserSettings` <a name="resetUserSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.resetUserSettings"></a>

```java
public void resetUserSettings()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerUserProfile resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.isConstruct"></a>

```java
import io.cdktn.providers.awscc.sagemaker_user_profile.SagemakerUserProfile;

SagemakerUserProfile.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.sagemaker_user_profile.SagemakerUserProfile;

SagemakerUserProfile.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.sagemaker_user_profile.SagemakerUserProfile;

SagemakerUserProfile.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.sagemaker_user_profile.SagemakerUserProfile;

SagemakerUserProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SagemakerUserProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SagemakerUserProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SagemakerUserProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SagemakerUserProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerUserProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList">SagemakerUserProfileTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.userProfileArn">userProfileArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.userSettings">userSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference">SagemakerUserProfileUserSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.domainIdInput">domainIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.singleSignOnUserIdentifierInput">singleSignOnUserIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.singleSignOnUserValueInput">singleSignOnUserValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTags">SagemakerUserProfileTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.userProfileNameInput">userProfileNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.userSettingsInput">userSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings">SagemakerUserProfileUserSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.domainId">domainId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.singleSignOnUserIdentifier">singleSignOnUserIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.singleSignOnUserValue">singleSignOnUserValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.userProfileName">userProfileName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.tags"></a>

```java
public SagemakerUserProfileTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList">SagemakerUserProfileTagsList</a>

---

##### `userProfileArn`<sup>Required</sup> <a name="userProfileArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.userProfileArn"></a>

```java
public java.lang.String getUserProfileArn();
```

- *Type:* java.lang.String

---

##### `userSettings`<sup>Required</sup> <a name="userSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.userSettings"></a>

```java
public SagemakerUserProfileUserSettingsOutputReference getUserSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference">SagemakerUserProfileUserSettingsOutputReference</a>

---

##### `domainIdInput`<sup>Optional</sup> <a name="domainIdInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.domainIdInput"></a>

```java
public java.lang.String getDomainIdInput();
```

- *Type:* java.lang.String

---

##### `singleSignOnUserIdentifierInput`<sup>Optional</sup> <a name="singleSignOnUserIdentifierInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.singleSignOnUserIdentifierInput"></a>

```java
public java.lang.String getSingleSignOnUserIdentifierInput();
```

- *Type:* java.lang.String

---

##### `singleSignOnUserValueInput`<sup>Optional</sup> <a name="singleSignOnUserValueInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.singleSignOnUserValueInput"></a>

```java
public java.lang.String getSingleSignOnUserValueInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.tagsInput"></a>

```java
public IResolvable|java.util.List<SagemakerUserProfileTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTags">SagemakerUserProfileTags</a>>

---

##### `userProfileNameInput`<sup>Optional</sup> <a name="userProfileNameInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.userProfileNameInput"></a>

```java
public java.lang.String getUserProfileNameInput();
```

- *Type:* java.lang.String

---

##### `userSettingsInput`<sup>Optional</sup> <a name="userSettingsInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.userSettingsInput"></a>

```java
public IResolvable|SagemakerUserProfileUserSettings getUserSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings">SagemakerUserProfileUserSettings</a>

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.domainId"></a>

```java
public java.lang.String getDomainId();
```

- *Type:* java.lang.String

---

##### `singleSignOnUserIdentifier`<sup>Required</sup> <a name="singleSignOnUserIdentifier" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.singleSignOnUserIdentifier"></a>

```java
public java.lang.String getSingleSignOnUserIdentifier();
```

- *Type:* java.lang.String

---

##### `singleSignOnUserValue`<sup>Required</sup> <a name="singleSignOnUserValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.singleSignOnUserValue"></a>

```java
public java.lang.String getSingleSignOnUserValue();
```

- *Type:* java.lang.String

---

##### `userProfileName`<sup>Required</sup> <a name="userProfileName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.userProfileName"></a>

```java
public java.lang.String getUserProfileName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerUserProfileConfig <a name="SagemakerUserProfileConfig" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_user_profile.SagemakerUserProfileConfig;

SagemakerUserProfileConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .domainId(java.lang.String)
    .userProfileName(java.lang.String)
//  .singleSignOnUserIdentifier(java.lang.String)
//  .singleSignOnUserValue(java.lang.String)
//  .tags(IResolvable|java.util.List<SagemakerUserProfileTags>)
//  .userSettings(SagemakerUserProfileUserSettings)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.domainId">domainId</a></code> | <code>java.lang.String</code> | The ID of the associated Domain. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.userProfileName">userProfileName</a></code> | <code>java.lang.String</code> | A name for the UserProfile. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.singleSignOnUserIdentifier">singleSignOnUserIdentifier</a></code> | <code>java.lang.String</code> | A specifier for the type of value specified in SingleSignOnUserValue. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.singleSignOnUserValue">singleSignOnUserValue</a></code> | <code>java.lang.String</code> | The username of the associated AWS Single Sign-On User for this UserProfile. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTags">SagemakerUserProfileTags</a>></code> | A list of tags to apply to the user profile. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.userSettings">userSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings">SagemakerUserProfileUserSettings</a></code> | A collection of settings. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.domainId"></a>

```java
public java.lang.String getDomainId();
```

- *Type:* java.lang.String

The ID of the associated Domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#domain_id SagemakerUserProfile#domain_id}

---

##### `userProfileName`<sup>Required</sup> <a name="userProfileName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.userProfileName"></a>

```java
public java.lang.String getUserProfileName();
```

- *Type:* java.lang.String

A name for the UserProfile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#user_profile_name SagemakerUserProfile#user_profile_name}

---

##### `singleSignOnUserIdentifier`<sup>Optional</sup> <a name="singleSignOnUserIdentifier" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.singleSignOnUserIdentifier"></a>

```java
public java.lang.String getSingleSignOnUserIdentifier();
```

- *Type:* java.lang.String

A specifier for the type of value specified in SingleSignOnUserValue.

Currently, the only supported value is "UserName". If the Domain's AuthMode is SSO, this field is required. If the Domain's AuthMode is not SSO, this field cannot be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#single_sign_on_user_identifier SagemakerUserProfile#single_sign_on_user_identifier}

---

##### `singleSignOnUserValue`<sup>Optional</sup> <a name="singleSignOnUserValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.singleSignOnUserValue"></a>

```java
public java.lang.String getSingleSignOnUserValue();
```

- *Type:* java.lang.String

The username of the associated AWS Single Sign-On User for this UserProfile.

If the Domain's AuthMode is SSO, this field is required, and must match a valid username of a user in your directory. If the Domain's AuthMode is not SSO, this field cannot be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#single_sign_on_user_value SagemakerUserProfile#single_sign_on_user_value}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.tags"></a>

```java
public IResolvable|java.util.List<SagemakerUserProfileTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTags">SagemakerUserProfileTags</a>>

A list of tags to apply to the user profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#tags SagemakerUserProfile#tags}

---

##### `userSettings`<sup>Optional</sup> <a name="userSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.userSettings"></a>

```java
public SagemakerUserProfileUserSettings getUserSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings">SagemakerUserProfileUserSettings</a>

A collection of settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#user_settings SagemakerUserProfile#user_settings}

---

### SagemakerUserProfileTags <a name="SagemakerUserProfileTags" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_user_profile.SagemakerUserProfileTags;

SagemakerUserProfileTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#key SagemakerUserProfile#key}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#value SagemakerUserProfile#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#key SagemakerUserProfile#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#value SagemakerUserProfile#value}.

---

### SagemakerUserProfileUserSettings <a name="SagemakerUserProfileUserSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_user_profile.SagemakerUserProfileUserSettings;

SagemakerUserProfileUserSettings.builder()
//  .autoMountHomeEfs(java.lang.String)
//  .codeEditorAppSettings(SagemakerUserProfileUserSettingsCodeEditorAppSettings)
//  .customFileSystemConfigs(IResolvable|java.util.List<SagemakerUserProfileUserSettingsCustomFileSystemConfigs>)
//  .customPosixUserConfig(SagemakerUserProfileUserSettingsCustomPosixUserConfig)
//  .defaultLandingUri(java.lang.String)
//  .executionRole(java.lang.String)
//  .jupyterLabAppSettings(SagemakerUserProfileUserSettingsJupyterLabAppSettings)
//  .jupyterServerAppSettings(SagemakerUserProfileUserSettingsJupyterServerAppSettings)
//  .kernelGatewayAppSettings(SagemakerUserProfileUserSettingsKernelGatewayAppSettings)
//  .rStudioServerProAppSettings(SagemakerUserProfileUserSettingsRStudioServerProAppSettings)
//  .securityGroups(java.util.List<java.lang.String>)
//  .sharingSettings(SagemakerUserProfileUserSettingsSharingSettings)
//  .spaceStorageSettings(SagemakerUserProfileUserSettingsSpaceStorageSettings)
//  .studioWebPortal(java.lang.String)
//  .studioWebPortalSettings(SagemakerUserProfileUserSettingsStudioWebPortalSettings)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.autoMountHomeEfs">autoMountHomeEfs</a></code> | <code>java.lang.String</code> | Indicates whether auto-mounting of an EFS volume is supported for the user profile. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.codeEditorAppSettings">codeEditorAppSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettings">SagemakerUserProfileUserSettingsCodeEditorAppSettings</a></code> | The CodeEditor app settings. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.customFileSystemConfigs">customFileSystemConfigs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigs">SagemakerUserProfileUserSettingsCustomFileSystemConfigs</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#custom_file_system_configs SagemakerUserProfile#custom_file_system_configs}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.customPosixUserConfig">customPosixUserConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfig">SagemakerUserProfileUserSettingsCustomPosixUserConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#custom_posix_user_config SagemakerUserProfile#custom_posix_user_config}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.defaultLandingUri">defaultLandingUri</a></code> | <code>java.lang.String</code> | Defines which Amazon SageMaker application users are directed to by default. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.executionRole">executionRole</a></code> | <code>java.lang.String</code> | The user profile Amazon Resource Name (ARN). |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.jupyterLabAppSettings">jupyterLabAppSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings">SagemakerUserProfileUserSettingsJupyterLabAppSettings</a></code> | The JupyterLab app settings. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.jupyterServerAppSettings">jupyterServerAppSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettings">SagemakerUserProfileUserSettingsJupyterServerAppSettings</a></code> | The Jupyter server's app settings. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.kernelGatewayAppSettings">kernelGatewayAppSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings">SagemakerUserProfileUserSettingsKernelGatewayAppSettings</a></code> | The kernel gateway app settings. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.rStudioServerProAppSettings">rStudioServerProAppSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettings">SagemakerUserProfileUserSettingsRStudioServerProAppSettings</a></code> | A collection of settings that configure user interaction with the RStudioServerPro app. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | The security groups for the Amazon Virtual Private Cloud (VPC) that Studio uses for communication. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.sharingSettings">sharingSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettings">SagemakerUserProfileUserSettingsSharingSettings</a></code> | The sharing settings. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.spaceStorageSettings">spaceStorageSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettings">SagemakerUserProfileUserSettingsSpaceStorageSettings</a></code> | Default storage settings for a space. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.studioWebPortal">studioWebPortal</a></code> | <code>java.lang.String</code> | Indicates whether the Studio experience is available to users. If not, users cannot access Studio. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.studioWebPortalSettings">studioWebPortalSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettings">SagemakerUserProfileUserSettingsStudioWebPortalSettings</a></code> | Studio settings. |

---

##### `autoMountHomeEfs`<sup>Optional</sup> <a name="autoMountHomeEfs" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.autoMountHomeEfs"></a>

```java
public java.lang.String getAutoMountHomeEfs();
```

- *Type:* java.lang.String

Indicates whether auto-mounting of an EFS volume is supported for the user profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#auto_mount_home_efs SagemakerUserProfile#auto_mount_home_efs}

---

##### `codeEditorAppSettings`<sup>Optional</sup> <a name="codeEditorAppSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.codeEditorAppSettings"></a>

```java
public SagemakerUserProfileUserSettingsCodeEditorAppSettings getCodeEditorAppSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettings">SagemakerUserProfileUserSettingsCodeEditorAppSettings</a>

The CodeEditor app settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#code_editor_app_settings SagemakerUserProfile#code_editor_app_settings}

---

##### `customFileSystemConfigs`<sup>Optional</sup> <a name="customFileSystemConfigs" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.customFileSystemConfigs"></a>

```java
public IResolvable|java.util.List<SagemakerUserProfileUserSettingsCustomFileSystemConfigs> getCustomFileSystemConfigs();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigs">SagemakerUserProfileUserSettingsCustomFileSystemConfigs</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#custom_file_system_configs SagemakerUserProfile#custom_file_system_configs}.

---

##### `customPosixUserConfig`<sup>Optional</sup> <a name="customPosixUserConfig" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.customPosixUserConfig"></a>

```java
public SagemakerUserProfileUserSettingsCustomPosixUserConfig getCustomPosixUserConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfig">SagemakerUserProfileUserSettingsCustomPosixUserConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#custom_posix_user_config SagemakerUserProfile#custom_posix_user_config}.

---

##### `defaultLandingUri`<sup>Optional</sup> <a name="defaultLandingUri" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.defaultLandingUri"></a>

```java
public java.lang.String getDefaultLandingUri();
```

- *Type:* java.lang.String

Defines which Amazon SageMaker application users are directed to by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#default_landing_uri SagemakerUserProfile#default_landing_uri}

---

##### `executionRole`<sup>Optional</sup> <a name="executionRole" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.executionRole"></a>

```java
public java.lang.String getExecutionRole();
```

- *Type:* java.lang.String

The user profile Amazon Resource Name (ARN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#execution_role SagemakerUserProfile#execution_role}

---

##### `jupyterLabAppSettings`<sup>Optional</sup> <a name="jupyterLabAppSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.jupyterLabAppSettings"></a>

```java
public SagemakerUserProfileUserSettingsJupyterLabAppSettings getJupyterLabAppSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings">SagemakerUserProfileUserSettingsJupyterLabAppSettings</a>

The JupyterLab app settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#jupyter_lab_app_settings SagemakerUserProfile#jupyter_lab_app_settings}

---

##### `jupyterServerAppSettings`<sup>Optional</sup> <a name="jupyterServerAppSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.jupyterServerAppSettings"></a>

```java
public SagemakerUserProfileUserSettingsJupyterServerAppSettings getJupyterServerAppSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettings">SagemakerUserProfileUserSettingsJupyterServerAppSettings</a>

The Jupyter server's app settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#jupyter_server_app_settings SagemakerUserProfile#jupyter_server_app_settings}

---

##### `kernelGatewayAppSettings`<sup>Optional</sup> <a name="kernelGatewayAppSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.kernelGatewayAppSettings"></a>

```java
public SagemakerUserProfileUserSettingsKernelGatewayAppSettings getKernelGatewayAppSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings">SagemakerUserProfileUserSettingsKernelGatewayAppSettings</a>

The kernel gateway app settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#kernel_gateway_app_settings SagemakerUserProfile#kernel_gateway_app_settings}

---

##### `rStudioServerProAppSettings`<sup>Optional</sup> <a name="rStudioServerProAppSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.rStudioServerProAppSettings"></a>

```java
public SagemakerUserProfileUserSettingsRStudioServerProAppSettings getRStudioServerProAppSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettings">SagemakerUserProfileUserSettingsRStudioServerProAppSettings</a>

A collection of settings that configure user interaction with the RStudioServerPro app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#r_studio_server_pro_app_settings SagemakerUserProfile#r_studio_server_pro_app_settings}

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

The security groups for the Amazon Virtual Private Cloud (VPC) that Studio uses for communication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#security_groups SagemakerUserProfile#security_groups}

---

##### `sharingSettings`<sup>Optional</sup> <a name="sharingSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.sharingSettings"></a>

```java
public SagemakerUserProfileUserSettingsSharingSettings getSharingSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettings">SagemakerUserProfileUserSettingsSharingSettings</a>

The sharing settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#sharing_settings SagemakerUserProfile#sharing_settings}

---

##### `spaceStorageSettings`<sup>Optional</sup> <a name="spaceStorageSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.spaceStorageSettings"></a>

```java
public SagemakerUserProfileUserSettingsSpaceStorageSettings getSpaceStorageSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettings">SagemakerUserProfileUserSettingsSpaceStorageSettings</a>

Default storage settings for a space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#space_storage_settings SagemakerUserProfile#space_storage_settings}

---

##### `studioWebPortal`<sup>Optional</sup> <a name="studioWebPortal" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.studioWebPortal"></a>

```java
public java.lang.String getStudioWebPortal();
```

- *Type:* java.lang.String

Indicates whether the Studio experience is available to users. If not, users cannot access Studio.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#studio_web_portal SagemakerUserProfile#studio_web_portal}

---

##### `studioWebPortalSettings`<sup>Optional</sup> <a name="studioWebPortalSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.studioWebPortalSettings"></a>

```java
public SagemakerUserProfileUserSettingsStudioWebPortalSettings getStudioWebPortalSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettings">SagemakerUserProfileUserSettingsStudioWebPortalSettings</a>

Studio settings.

If these settings are applied on a user level, they take priority over the settings applied on a domain level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#studio_web_portal_settings SagemakerUserProfile#studio_web_portal_settings}

---

### SagemakerUserProfileUserSettingsCodeEditorAppSettings <a name="SagemakerUserProfileUserSettingsCodeEditorAppSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_user_profile.SagemakerUserProfileUserSettingsCodeEditorAppSettings;

SagemakerUserProfileUserSettingsCodeEditorAppSettings.builder()
//  .appLifecycleManagement(SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement)
//  .builtInLifecycleConfigArn(java.lang.String)
//  .customImages(IResolvable|java.util.List<SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages>)
//  .defaultResourceSpec(SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec)
//  .lifecycleConfigArns(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettings.property.appLifecycleManagement">appLifecycleManagement</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement">SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#app_lifecycle_management SagemakerUserProfile#app_lifecycle_management}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettings.property.builtInLifecycleConfigArn">builtInLifecycleConfigArn</a></code> | <code>java.lang.String</code> | The lifecycle configuration that runs before the default lifecycle configuration. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettings.property.customImages">customImages</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages">SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages</a>></code> | A list of custom images for use for CodeEditor apps. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettings.property.defaultResourceSpec">defaultResourceSpec</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec</a></code> | The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the CodeEditor app. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettings.property.lifecycleConfigArns">lifecycleConfigArns</a></code> | <code>java.util.List<java.lang.String></code> | A list of LifecycleConfigArns available for use with CodeEditor apps. |

---

##### `appLifecycleManagement`<sup>Optional</sup> <a name="appLifecycleManagement" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettings.property.appLifecycleManagement"></a>

```java
public SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement getAppLifecycleManagement();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement">SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#app_lifecycle_management SagemakerUserProfile#app_lifecycle_management}.

---

##### `builtInLifecycleConfigArn`<sup>Optional</sup> <a name="builtInLifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettings.property.builtInLifecycleConfigArn"></a>

```java
public java.lang.String getBuiltInLifecycleConfigArn();
```

- *Type:* java.lang.String

The lifecycle configuration that runs before the default lifecycle configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#built_in_lifecycle_config_arn SagemakerUserProfile#built_in_lifecycle_config_arn}

---

##### `customImages`<sup>Optional</sup> <a name="customImages" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettings.property.customImages"></a>

```java
public IResolvable|java.util.List<SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages> getCustomImages();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages">SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages</a>>

A list of custom images for use for CodeEditor apps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#custom_images SagemakerUserProfile#custom_images}

---

##### `defaultResourceSpec`<sup>Optional</sup> <a name="defaultResourceSpec" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettings.property.defaultResourceSpec"></a>

```java
public SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec getDefaultResourceSpec();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec</a>

The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the CodeEditor app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#default_resource_spec SagemakerUserProfile#default_resource_spec}

---

##### `lifecycleConfigArns`<sup>Optional</sup> <a name="lifecycleConfigArns" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettings.property.lifecycleConfigArns"></a>

```java
public java.util.List<java.lang.String> getLifecycleConfigArns();
```

- *Type:* java.util.List<java.lang.String>

A list of LifecycleConfigArns available for use with CodeEditor apps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#lifecycle_config_arns SagemakerUserProfile#lifecycle_config_arns}

---

### SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement <a name="SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_user_profile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement;

SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement.builder()
//  .idleSettings(SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement.property.idleSettings">idleSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings">SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#idle_settings SagemakerUserProfile#idle_settings}. |

---

##### `idleSettings`<sup>Optional</sup> <a name="idleSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement.property.idleSettings"></a>

```java
public SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings getIdleSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings">SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#idle_settings SagemakerUserProfile#idle_settings}.

---

### SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings <a name="SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_user_profile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings;

SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings.builder()
//  .idleTimeoutInMinutes(java.lang.Number)
//  .lifecycleManagement(java.lang.String)
//  .maxIdleTimeoutInMinutes(java.lang.Number)
//  .minIdleTimeoutInMinutes(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings.property.idleTimeoutInMinutes">idleTimeoutInMinutes</a></code> | <code>java.lang.Number</code> | The idle timeout value set in minutes. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings.property.lifecycleManagement">lifecycleManagement</a></code> | <code>java.lang.String</code> | A flag to enable/disable AppLifecycleManagement settings. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings.property.maxIdleTimeoutInMinutes">maxIdleTimeoutInMinutes</a></code> | <code>java.lang.Number</code> | The maximum idle timeout value set in minutes. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings.property.minIdleTimeoutInMinutes">minIdleTimeoutInMinutes</a></code> | <code>java.lang.Number</code> | The minimum idle timeout value set in minutes. |

---

##### `idleTimeoutInMinutes`<sup>Optional</sup> <a name="idleTimeoutInMinutes" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings.property.idleTimeoutInMinutes"></a>

```java
public java.lang.Number getIdleTimeoutInMinutes();
```

- *Type:* java.lang.Number

The idle timeout value set in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#idle_timeout_in_minutes SagemakerUserProfile#idle_timeout_in_minutes}

---

##### `lifecycleManagement`<sup>Optional</sup> <a name="lifecycleManagement" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings.property.lifecycleManagement"></a>

```java
public java.lang.String getLifecycleManagement();
```

- *Type:* java.lang.String

A flag to enable/disable AppLifecycleManagement settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#lifecycle_management SagemakerUserProfile#lifecycle_management}

---

##### `maxIdleTimeoutInMinutes`<sup>Optional</sup> <a name="maxIdleTimeoutInMinutes" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings.property.maxIdleTimeoutInMinutes"></a>

```java
public java.lang.Number getMaxIdleTimeoutInMinutes();
```

- *Type:* java.lang.Number

The maximum idle timeout value set in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#max_idle_timeout_in_minutes SagemakerUserProfile#max_idle_timeout_in_minutes}

---

##### `minIdleTimeoutInMinutes`<sup>Optional</sup> <a name="minIdleTimeoutInMinutes" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings.property.minIdleTimeoutInMinutes"></a>

```java
public java.lang.Number getMinIdleTimeoutInMinutes();
```

- *Type:* java.lang.Number

The minimum idle timeout value set in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#min_idle_timeout_in_minutes SagemakerUserProfile#min_idle_timeout_in_minutes}

---

### SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages <a name="SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_user_profile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages;

SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages.builder()
//  .appImageConfigName(java.lang.String)
//  .imageName(java.lang.String)
//  .imageVersionNumber(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages.property.appImageConfigName">appImageConfigName</a></code> | <code>java.lang.String</code> | The Name of the AppImageConfig. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages.property.imageName">imageName</a></code> | <code>java.lang.String</code> | The name of the CustomImage. Must be unique to your account. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages.property.imageVersionNumber">imageVersionNumber</a></code> | <code>java.lang.Number</code> | The version number of the CustomImage. |

---

##### `appImageConfigName`<sup>Optional</sup> <a name="appImageConfigName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages.property.appImageConfigName"></a>

```java
public java.lang.String getAppImageConfigName();
```

- *Type:* java.lang.String

The Name of the AppImageConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#app_image_config_name SagemakerUserProfile#app_image_config_name}

---

##### `imageName`<sup>Optional</sup> <a name="imageName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages.property.imageName"></a>

```java
public java.lang.String getImageName();
```

- *Type:* java.lang.String

The name of the CustomImage. Must be unique to your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#image_name SagemakerUserProfile#image_name}

---

##### `imageVersionNumber`<sup>Optional</sup> <a name="imageVersionNumber" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages.property.imageVersionNumber"></a>

```java
public java.lang.Number getImageVersionNumber();
```

- *Type:* java.lang.Number

The version number of the CustomImage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#image_version_number SagemakerUserProfile#image_version_number}

---

### SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec <a name="SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_user_profile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec;

SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec.builder()
//  .instanceType(java.lang.String)
//  .lifecycleConfigArn(java.lang.String)
//  .sageMakerImageArn(java.lang.String)
//  .sageMakerImageVersionArn(java.lang.String)
//  .trainingPlanArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | The instance type that the image version runs on. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec.property.lifecycleConfigArn">lifecycleConfigArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec.property.sageMakerImageArn">sageMakerImageArn</a></code> | <code>java.lang.String</code> | The ARN of the SageMaker image that the image version belongs to. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec.property.sageMakerImageVersionArn">sageMakerImageVersionArn</a></code> | <code>java.lang.String</code> | The ARN of the image version created on the instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec.property.trainingPlanArn">trainingPlanArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the training plan to use for the ResourceSpec. |

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

The instance type that the image version runs on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#instance_type SagemakerUserProfile#instance_type}

---

##### `lifecycleConfigArn`<sup>Optional</sup> <a name="lifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec.property.lifecycleConfigArn"></a>

```java
public java.lang.String getLifecycleConfigArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#lifecycle_config_arn SagemakerUserProfile#lifecycle_config_arn}

---

##### `sageMakerImageArn`<sup>Optional</sup> <a name="sageMakerImageArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec.property.sageMakerImageArn"></a>

```java
public java.lang.String getSageMakerImageArn();
```

- *Type:* java.lang.String

The ARN of the SageMaker image that the image version belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#sage_maker_image_arn SagemakerUserProfile#sage_maker_image_arn}

---

##### `sageMakerImageVersionArn`<sup>Optional</sup> <a name="sageMakerImageVersionArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec.property.sageMakerImageVersionArn"></a>

```java
public java.lang.String getSageMakerImageVersionArn();
```

- *Type:* java.lang.String

The ARN of the image version created on the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#sage_maker_image_version_arn SagemakerUserProfile#sage_maker_image_version_arn}

---

##### `trainingPlanArn`<sup>Optional</sup> <a name="trainingPlanArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec.property.trainingPlanArn"></a>

```java
public java.lang.String getTrainingPlanArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the training plan to use for the ResourceSpec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#training_plan_arn SagemakerUserProfile#training_plan_arn}

---

### SagemakerUserProfileUserSettingsCustomFileSystemConfigs <a name="SagemakerUserProfileUserSettingsCustomFileSystemConfigs" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigs.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_user_profile.SagemakerUserProfileUserSettingsCustomFileSystemConfigs;

SagemakerUserProfileUserSettingsCustomFileSystemConfigs.builder()
//  .efsFileSystemConfig(SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig)
//  .fsxLustreFileSystemConfig(SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig)
//  .s3FileSystemConfig(SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigs.property.efsFileSystemConfig">efsFileSystemConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig">SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#efs_file_system_config SagemakerUserProfile#efs_file_system_config}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigs.property.fsxLustreFileSystemConfig">fsxLustreFileSystemConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig">SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#fsx_lustre_file_system_config SagemakerUserProfile#fsx_lustre_file_system_config}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigs.property.s3FileSystemConfig">s3FileSystemConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig">SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#s3_file_system_config SagemakerUserProfile#s3_file_system_config}. |

---

##### `efsFileSystemConfig`<sup>Optional</sup> <a name="efsFileSystemConfig" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigs.property.efsFileSystemConfig"></a>

```java
public SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig getEfsFileSystemConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig">SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#efs_file_system_config SagemakerUserProfile#efs_file_system_config}.

---

##### `fsxLustreFileSystemConfig`<sup>Optional</sup> <a name="fsxLustreFileSystemConfig" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigs.property.fsxLustreFileSystemConfig"></a>

```java
public SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig getFsxLustreFileSystemConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig">SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#fsx_lustre_file_system_config SagemakerUserProfile#fsx_lustre_file_system_config}.

---

##### `s3FileSystemConfig`<sup>Optional</sup> <a name="s3FileSystemConfig" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigs.property.s3FileSystemConfig"></a>

```java
public SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig getS3FileSystemConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig">SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#s3_file_system_config SagemakerUserProfile#s3_file_system_config}.

---

### SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig <a name="SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_user_profile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig;

SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig.builder()
//  .fileSystemId(java.lang.String)
//  .fileSystemPath(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig.property.fileSystemId">fileSystemId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#file_system_id SagemakerUserProfile#file_system_id}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig.property.fileSystemPath">fileSystemPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#file_system_path SagemakerUserProfile#file_system_path}. |

---

##### `fileSystemId`<sup>Optional</sup> <a name="fileSystemId" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig.property.fileSystemId"></a>

```java
public java.lang.String getFileSystemId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#file_system_id SagemakerUserProfile#file_system_id}.

---

##### `fileSystemPath`<sup>Optional</sup> <a name="fileSystemPath" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig.property.fileSystemPath"></a>

```java
public java.lang.String getFileSystemPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#file_system_path SagemakerUserProfile#file_system_path}.

---

### SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig <a name="SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_user_profile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig;

SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig.builder()
//  .fileSystemId(java.lang.String)
//  .fileSystemPath(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig.property.fileSystemId">fileSystemId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#file_system_id SagemakerUserProfile#file_system_id}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig.property.fileSystemPath">fileSystemPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#file_system_path SagemakerUserProfile#file_system_path}. |

---

##### `fileSystemId`<sup>Optional</sup> <a name="fileSystemId" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig.property.fileSystemId"></a>

```java
public java.lang.String getFileSystemId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#file_system_id SagemakerUserProfile#file_system_id}.

---

##### `fileSystemPath`<sup>Optional</sup> <a name="fileSystemPath" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig.property.fileSystemPath"></a>

```java
public java.lang.String getFileSystemPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#file_system_path SagemakerUserProfile#file_system_path}.

---

### SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig <a name="SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_user_profile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig;

SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig.builder()
//  .mountPath(java.lang.String)
//  .s3Uri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig.property.mountPath">mountPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#mount_path SagemakerUserProfile#mount_path}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig.property.s3Uri">s3Uri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#s3_uri SagemakerUserProfile#s3_uri}. |

---

##### `mountPath`<sup>Optional</sup> <a name="mountPath" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig.property.mountPath"></a>

```java
public java.lang.String getMountPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#mount_path SagemakerUserProfile#mount_path}.

---

##### `s3Uri`<sup>Optional</sup> <a name="s3Uri" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig.property.s3Uri"></a>

```java
public java.lang.String getS3Uri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#s3_uri SagemakerUserProfile#s3_uri}.

---

### SagemakerUserProfileUserSettingsCustomPosixUserConfig <a name="SagemakerUserProfileUserSettingsCustomPosixUserConfig" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_user_profile.SagemakerUserProfileUserSettingsCustomPosixUserConfig;

SagemakerUserProfileUserSettingsCustomPosixUserConfig.builder()
//  .gid(java.lang.Number)
//  .uid(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfig.property.gid">gid</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#gid SagemakerUserProfile#gid}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfig.property.uid">uid</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#uid SagemakerUserProfile#uid}. |

---

##### `gid`<sup>Optional</sup> <a name="gid" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfig.property.gid"></a>

```java
public java.lang.Number getGid();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#gid SagemakerUserProfile#gid}.

---

##### `uid`<sup>Optional</sup> <a name="uid" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfig.property.uid"></a>

```java
public java.lang.Number getUid();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#uid SagemakerUserProfile#uid}.

---

### SagemakerUserProfileUserSettingsJupyterLabAppSettings <a name="SagemakerUserProfileUserSettingsJupyterLabAppSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_user_profile.SagemakerUserProfileUserSettingsJupyterLabAppSettings;

SagemakerUserProfileUserSettingsJupyterLabAppSettings.builder()
//  .appLifecycleManagement(SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement)
//  .builtInLifecycleConfigArn(java.lang.String)
//  .codeRepositories(IResolvable|java.util.List<SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories>)
//  .customImages(IResolvable|java.util.List<SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages>)
//  .defaultResourceSpec(SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec)
//  .emrSettings(SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings)
//  .lifecycleConfigArns(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings.property.appLifecycleManagement">appLifecycleManagement</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement">SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#app_lifecycle_management SagemakerUserProfile#app_lifecycle_management}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings.property.builtInLifecycleConfigArn">builtInLifecycleConfigArn</a></code> | <code>java.lang.String</code> | The lifecycle configuration that runs before the default lifecycle configuration. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings.property.codeRepositories">codeRepositories</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories">SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories</a>></code> | A list of CodeRepositories available for use with JupyterLab apps. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings.property.customImages">customImages</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages">SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages</a>></code> | A list of custom images available for use for JupyterLab apps. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings.property.defaultResourceSpec">defaultResourceSpec</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec</a></code> | The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the JupyterLab app. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings.property.emrSettings">emrSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings">SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings</a></code> | The configuration parameters for EMR settings. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings.property.lifecycleConfigArns">lifecycleConfigArns</a></code> | <code>java.util.List<java.lang.String></code> | A list of LifecycleConfigArns available for use with JupyterLab apps. |

---

##### `appLifecycleManagement`<sup>Optional</sup> <a name="appLifecycleManagement" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings.property.appLifecycleManagement"></a>

```java
public SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement getAppLifecycleManagement();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement">SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#app_lifecycle_management SagemakerUserProfile#app_lifecycle_management}.

---

##### `builtInLifecycleConfigArn`<sup>Optional</sup> <a name="builtInLifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings.property.builtInLifecycleConfigArn"></a>

```java
public java.lang.String getBuiltInLifecycleConfigArn();
```

- *Type:* java.lang.String

The lifecycle configuration that runs before the default lifecycle configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#built_in_lifecycle_config_arn SagemakerUserProfile#built_in_lifecycle_config_arn}

---

##### `codeRepositories`<sup>Optional</sup> <a name="codeRepositories" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings.property.codeRepositories"></a>

```java
public IResolvable|java.util.List<SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories> getCodeRepositories();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories">SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories</a>>

A list of CodeRepositories available for use with JupyterLab apps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#code_repositories SagemakerUserProfile#code_repositories}

---

##### `customImages`<sup>Optional</sup> <a name="customImages" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings.property.customImages"></a>

```java
public IResolvable|java.util.List<SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages> getCustomImages();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages">SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages</a>>

A list of custom images available for use for JupyterLab apps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#custom_images SagemakerUserProfile#custom_images}

---

##### `defaultResourceSpec`<sup>Optional</sup> <a name="defaultResourceSpec" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings.property.defaultResourceSpec"></a>

```java
public SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec getDefaultResourceSpec();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec</a>

The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the JupyterLab app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#default_resource_spec SagemakerUserProfile#default_resource_spec}

---

##### `emrSettings`<sup>Optional</sup> <a name="emrSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings.property.emrSettings"></a>

```java
public SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings getEmrSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings">SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings</a>

The configuration parameters for EMR settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#emr_settings SagemakerUserProfile#emr_settings}

---

##### `lifecycleConfigArns`<sup>Optional</sup> <a name="lifecycleConfigArns" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings.property.lifecycleConfigArns"></a>

```java
public java.util.List<java.lang.String> getLifecycleConfigArns();
```

- *Type:* java.util.List<java.lang.String>

A list of LifecycleConfigArns available for use with JupyterLab apps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#lifecycle_config_arns SagemakerUserProfile#lifecycle_config_arns}

---

### SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement <a name="SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_user_profile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement;

SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement.builder()
//  .idleSettings(SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement.property.idleSettings">idleSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings">SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#idle_settings SagemakerUserProfile#idle_settings}. |

---

##### `idleSettings`<sup>Optional</sup> <a name="idleSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement.property.idleSettings"></a>

```java
public SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings getIdleSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings">SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#idle_settings SagemakerUserProfile#idle_settings}.

---

### SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings <a name="SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_user_profile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings;

SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings.builder()
//  .idleTimeoutInMinutes(java.lang.Number)
//  .lifecycleManagement(java.lang.String)
//  .maxIdleTimeoutInMinutes(java.lang.Number)
//  .minIdleTimeoutInMinutes(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings.property.idleTimeoutInMinutes">idleTimeoutInMinutes</a></code> | <code>java.lang.Number</code> | The idle timeout value set in minutes. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings.property.lifecycleManagement">lifecycleManagement</a></code> | <code>java.lang.String</code> | A flag to enable/disable AppLifecycleManagement settings. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings.property.maxIdleTimeoutInMinutes">maxIdleTimeoutInMinutes</a></code> | <code>java.lang.Number</code> | The maximum idle timeout value set in minutes. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings.property.minIdleTimeoutInMinutes">minIdleTimeoutInMinutes</a></code> | <code>java.lang.Number</code> | The minimum idle timeout value set in minutes. |

---

##### `idleTimeoutInMinutes`<sup>Optional</sup> <a name="idleTimeoutInMinutes" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings.property.idleTimeoutInMinutes"></a>

```java
public java.lang.Number getIdleTimeoutInMinutes();
```

- *Type:* java.lang.Number

The idle timeout value set in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#idle_timeout_in_minutes SagemakerUserProfile#idle_timeout_in_minutes}

---

##### `lifecycleManagement`<sup>Optional</sup> <a name="lifecycleManagement" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings.property.lifecycleManagement"></a>

```java
public java.lang.String getLifecycleManagement();
```

- *Type:* java.lang.String

A flag to enable/disable AppLifecycleManagement settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#lifecycle_management SagemakerUserProfile#lifecycle_management}

---

##### `maxIdleTimeoutInMinutes`<sup>Optional</sup> <a name="maxIdleTimeoutInMinutes" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings.property.maxIdleTimeoutInMinutes"></a>

```java
public java.lang.Number getMaxIdleTimeoutInMinutes();
```

- *Type:* java.lang.Number

The maximum idle timeout value set in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#max_idle_timeout_in_minutes SagemakerUserProfile#max_idle_timeout_in_minutes}

---

##### `minIdleTimeoutInMinutes`<sup>Optional</sup> <a name="minIdleTimeoutInMinutes" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings.property.minIdleTimeoutInMinutes"></a>

```java
public java.lang.Number getMinIdleTimeoutInMinutes();
```

- *Type:* java.lang.Number

The minimum idle timeout value set in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#min_idle_timeout_in_minutes SagemakerUserProfile#min_idle_timeout_in_minutes}

---

### SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories <a name="SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_user_profile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories;

SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories.builder()
//  .repositoryUrl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories.property.repositoryUrl">repositoryUrl</a></code> | <code>java.lang.String</code> | A CodeRepository (valid URL) to be used within Jupyter's Git extension. |

---

##### `repositoryUrl`<sup>Optional</sup> <a name="repositoryUrl" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories.property.repositoryUrl"></a>

```java
public java.lang.String getRepositoryUrl();
```

- *Type:* java.lang.String

A CodeRepository (valid URL) to be used within Jupyter's Git extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#repository_url SagemakerUserProfile#repository_url}

---

### SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages <a name="SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_user_profile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages;

SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages.builder()
//  .appImageConfigName(java.lang.String)
//  .imageName(java.lang.String)
//  .imageVersionNumber(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages.property.appImageConfigName">appImageConfigName</a></code> | <code>java.lang.String</code> | The Name of the AppImageConfig. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages.property.imageName">imageName</a></code> | <code>java.lang.String</code> | The name of the CustomImage. Must be unique to your account. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages.property.imageVersionNumber">imageVersionNumber</a></code> | <code>java.lang.Number</code> | The version number of the CustomImage. |

---

##### `appImageConfigName`<sup>Optional</sup> <a name="appImageConfigName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages.property.appImageConfigName"></a>

```java
public java.lang.String getAppImageConfigName();
```

- *Type:* java.lang.String

The Name of the AppImageConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#app_image_config_name SagemakerUserProfile#app_image_config_name}

---

##### `imageName`<sup>Optional</sup> <a name="imageName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages.property.imageName"></a>

```java
public java.lang.String getImageName();
```

- *Type:* java.lang.String

The name of the CustomImage. Must be unique to your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#image_name SagemakerUserProfile#image_name}

---

##### `imageVersionNumber`<sup>Optional</sup> <a name="imageVersionNumber" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages.property.imageVersionNumber"></a>

```java
public java.lang.Number getImageVersionNumber();
```

- *Type:* java.lang.Number

The version number of the CustomImage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#image_version_number SagemakerUserProfile#image_version_number}

---

### SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec <a name="SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_user_profile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec;

SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec.builder()
//  .instanceType(java.lang.String)
//  .lifecycleConfigArn(java.lang.String)
//  .sageMakerImageArn(java.lang.String)
//  .sageMakerImageVersionArn(java.lang.String)
//  .trainingPlanArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | The instance type that the image version runs on. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec.property.lifecycleConfigArn">lifecycleConfigArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec.property.sageMakerImageArn">sageMakerImageArn</a></code> | <code>java.lang.String</code> | The ARN of the SageMaker image that the image version belongs to. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec.property.sageMakerImageVersionArn">sageMakerImageVersionArn</a></code> | <code>java.lang.String</code> | The ARN of the image version created on the instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec.property.trainingPlanArn">trainingPlanArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the training plan to use for the ResourceSpec. |

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

The instance type that the image version runs on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#instance_type SagemakerUserProfile#instance_type}

---

##### `lifecycleConfigArn`<sup>Optional</sup> <a name="lifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec.property.lifecycleConfigArn"></a>

```java
public java.lang.String getLifecycleConfigArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#lifecycle_config_arn SagemakerUserProfile#lifecycle_config_arn}

---

##### `sageMakerImageArn`<sup>Optional</sup> <a name="sageMakerImageArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec.property.sageMakerImageArn"></a>

```java
public java.lang.String getSageMakerImageArn();
```

- *Type:* java.lang.String

The ARN of the SageMaker image that the image version belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#sage_maker_image_arn SagemakerUserProfile#sage_maker_image_arn}

---

##### `sageMakerImageVersionArn`<sup>Optional</sup> <a name="sageMakerImageVersionArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec.property.sageMakerImageVersionArn"></a>

```java
public java.lang.String getSageMakerImageVersionArn();
```

- *Type:* java.lang.String

The ARN of the image version created on the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#sage_maker_image_version_arn SagemakerUserProfile#sage_maker_image_version_arn}

---

##### `trainingPlanArn`<sup>Optional</sup> <a name="trainingPlanArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec.property.trainingPlanArn"></a>

```java
public java.lang.String getTrainingPlanArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the training plan to use for the ResourceSpec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#training_plan_arn SagemakerUserProfile#training_plan_arn}

---

### SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings <a name="SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_user_profile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings;

SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings.builder()
//  .assumableRoleArns(java.util.List<java.lang.String>)
//  .executionRoleArns(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings.property.assumableRoleArns">assumableRoleArns</a></code> | <code>java.util.List<java.lang.String></code> | An array of Amazon Resource Names (ARNs) of the IAM roles that the execution role of SageMaker can assume. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings.property.executionRoleArns">executionRoleArns</a></code> | <code>java.util.List<java.lang.String></code> | An array of ARNs of IAM roles used by EMR cluster instances or job execution environments. |

---

##### `assumableRoleArns`<sup>Optional</sup> <a name="assumableRoleArns" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings.property.assumableRoleArns"></a>

```java
public java.util.List<java.lang.String> getAssumableRoleArns();
```

- *Type:* java.util.List<java.lang.String>

An array of Amazon Resource Names (ARNs) of the IAM roles that the execution role of SageMaker can assume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#assumable_role_arns SagemakerUserProfile#assumable_role_arns}

---

##### `executionRoleArns`<sup>Optional</sup> <a name="executionRoleArns" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings.property.executionRoleArns"></a>

```java
public java.util.List<java.lang.String> getExecutionRoleArns();
```

- *Type:* java.util.List<java.lang.String>

An array of ARNs of IAM roles used by EMR cluster instances or job execution environments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#execution_role_arns SagemakerUserProfile#execution_role_arns}

---

### SagemakerUserProfileUserSettingsJupyterServerAppSettings <a name="SagemakerUserProfileUserSettingsJupyterServerAppSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_user_profile.SagemakerUserProfileUserSettingsJupyterServerAppSettings;

SagemakerUserProfileUserSettingsJupyterServerAppSettings.builder()
//  .defaultResourceSpec(SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec)
//  .lifecycleConfigArns(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettings.property.defaultResourceSpec">defaultResourceSpec</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#default_resource_spec SagemakerUserProfile#default_resource_spec}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettings.property.lifecycleConfigArns">lifecycleConfigArns</a></code> | <code>java.util.List<java.lang.String></code> | A list of LifecycleConfigArns available for use with JupyterServer apps. |

---

##### `defaultResourceSpec`<sup>Optional</sup> <a name="defaultResourceSpec" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettings.property.defaultResourceSpec"></a>

```java
public SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec getDefaultResourceSpec();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#default_resource_spec SagemakerUserProfile#default_resource_spec}.

---

##### `lifecycleConfigArns`<sup>Optional</sup> <a name="lifecycleConfigArns" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettings.property.lifecycleConfigArns"></a>

```java
public java.util.List<java.lang.String> getLifecycleConfigArns();
```

- *Type:* java.util.List<java.lang.String>

A list of LifecycleConfigArns available for use with JupyterServer apps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#lifecycle_config_arns SagemakerUserProfile#lifecycle_config_arns}

---

### SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec <a name="SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_user_profile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec;

SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec.builder()
//  .instanceType(java.lang.String)
//  .lifecycleConfigArn(java.lang.String)
//  .sageMakerImageArn(java.lang.String)
//  .sageMakerImageVersionArn(java.lang.String)
//  .trainingPlanArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | The instance type that the image version runs on. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec.property.lifecycleConfigArn">lifecycleConfigArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec.property.sageMakerImageArn">sageMakerImageArn</a></code> | <code>java.lang.String</code> | The ARN of the SageMaker image that the image version belongs to. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec.property.sageMakerImageVersionArn">sageMakerImageVersionArn</a></code> | <code>java.lang.String</code> | The ARN of the image version created on the instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec.property.trainingPlanArn">trainingPlanArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the training plan to use for the ResourceSpec. |

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

The instance type that the image version runs on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#instance_type SagemakerUserProfile#instance_type}

---

##### `lifecycleConfigArn`<sup>Optional</sup> <a name="lifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec.property.lifecycleConfigArn"></a>

```java
public java.lang.String getLifecycleConfigArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#lifecycle_config_arn SagemakerUserProfile#lifecycle_config_arn}

---

##### `sageMakerImageArn`<sup>Optional</sup> <a name="sageMakerImageArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec.property.sageMakerImageArn"></a>

```java
public java.lang.String getSageMakerImageArn();
```

- *Type:* java.lang.String

The ARN of the SageMaker image that the image version belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#sage_maker_image_arn SagemakerUserProfile#sage_maker_image_arn}

---

##### `sageMakerImageVersionArn`<sup>Optional</sup> <a name="sageMakerImageVersionArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec.property.sageMakerImageVersionArn"></a>

```java
public java.lang.String getSageMakerImageVersionArn();
```

- *Type:* java.lang.String

The ARN of the image version created on the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#sage_maker_image_version_arn SagemakerUserProfile#sage_maker_image_version_arn}

---

##### `trainingPlanArn`<sup>Optional</sup> <a name="trainingPlanArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec.property.trainingPlanArn"></a>

```java
public java.lang.String getTrainingPlanArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the training plan to use for the ResourceSpec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#training_plan_arn SagemakerUserProfile#training_plan_arn}

---

### SagemakerUserProfileUserSettingsKernelGatewayAppSettings <a name="SagemakerUserProfileUserSettingsKernelGatewayAppSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_user_profile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings;

SagemakerUserProfileUserSettingsKernelGatewayAppSettings.builder()
//  .customImages(IResolvable|java.util.List<SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages>)
//  .defaultResourceSpec(SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec)
//  .lifecycleConfigArns(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings.property.customImages">customImages</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages</a>></code> | A list of custom SageMaker images that are configured to run as a KernelGateway app. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings.property.defaultResourceSpec">defaultResourceSpec</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec</a></code> | The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the KernelGateway app. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings.property.lifecycleConfigArns">lifecycleConfigArns</a></code> | <code>java.util.List<java.lang.String></code> | A list of LifecycleConfigArns available for use with KernelGateway apps. |

---

##### `customImages`<sup>Optional</sup> <a name="customImages" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings.property.customImages"></a>

```java
public IResolvable|java.util.List<SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages> getCustomImages();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages</a>>

A list of custom SageMaker images that are configured to run as a KernelGateway app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#custom_images SagemakerUserProfile#custom_images}

---

##### `defaultResourceSpec`<sup>Optional</sup> <a name="defaultResourceSpec" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings.property.defaultResourceSpec"></a>

```java
public SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec getDefaultResourceSpec();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec</a>

The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the KernelGateway app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#default_resource_spec SagemakerUserProfile#default_resource_spec}

---

##### `lifecycleConfigArns`<sup>Optional</sup> <a name="lifecycleConfigArns" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings.property.lifecycleConfigArns"></a>

```java
public java.util.List<java.lang.String> getLifecycleConfigArns();
```

- *Type:* java.util.List<java.lang.String>

A list of LifecycleConfigArns available for use with KernelGateway apps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#lifecycle_config_arns SagemakerUserProfile#lifecycle_config_arns}

---

### SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages <a name="SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_user_profile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages;

SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages.builder()
//  .appImageConfigName(java.lang.String)
//  .imageName(java.lang.String)
//  .imageVersionNumber(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages.property.appImageConfigName">appImageConfigName</a></code> | <code>java.lang.String</code> | The Name of the AppImageConfig. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages.property.imageName">imageName</a></code> | <code>java.lang.String</code> | The name of the CustomImage. Must be unique to your account. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages.property.imageVersionNumber">imageVersionNumber</a></code> | <code>java.lang.Number</code> | The version number of the CustomImage. |

---

##### `appImageConfigName`<sup>Optional</sup> <a name="appImageConfigName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages.property.appImageConfigName"></a>

```java
public java.lang.String getAppImageConfigName();
```

- *Type:* java.lang.String

The Name of the AppImageConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#app_image_config_name SagemakerUserProfile#app_image_config_name}

---

##### `imageName`<sup>Optional</sup> <a name="imageName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages.property.imageName"></a>

```java
public java.lang.String getImageName();
```

- *Type:* java.lang.String

The name of the CustomImage. Must be unique to your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#image_name SagemakerUserProfile#image_name}

---

##### `imageVersionNumber`<sup>Optional</sup> <a name="imageVersionNumber" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages.property.imageVersionNumber"></a>

```java
public java.lang.Number getImageVersionNumber();
```

- *Type:* java.lang.Number

The version number of the CustomImage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#image_version_number SagemakerUserProfile#image_version_number}

---

### SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec <a name="SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_user_profile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec;

SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec.builder()
//  .instanceType(java.lang.String)
//  .lifecycleConfigArn(java.lang.String)
//  .sageMakerImageArn(java.lang.String)
//  .sageMakerImageVersionArn(java.lang.String)
//  .trainingPlanArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | The instance type that the image version runs on. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.lifecycleConfigArn">lifecycleConfigArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.sageMakerImageArn">sageMakerImageArn</a></code> | <code>java.lang.String</code> | The ARN of the SageMaker image that the image version belongs to. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.sageMakerImageVersionArn">sageMakerImageVersionArn</a></code> | <code>java.lang.String</code> | The ARN of the image version created on the instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.trainingPlanArn">trainingPlanArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the training plan to use for the ResourceSpec. |

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

The instance type that the image version runs on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#instance_type SagemakerUserProfile#instance_type}

---

##### `lifecycleConfigArn`<sup>Optional</sup> <a name="lifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.lifecycleConfigArn"></a>

```java
public java.lang.String getLifecycleConfigArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#lifecycle_config_arn SagemakerUserProfile#lifecycle_config_arn}

---

##### `sageMakerImageArn`<sup>Optional</sup> <a name="sageMakerImageArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.sageMakerImageArn"></a>

```java
public java.lang.String getSageMakerImageArn();
```

- *Type:* java.lang.String

The ARN of the SageMaker image that the image version belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#sage_maker_image_arn SagemakerUserProfile#sage_maker_image_arn}

---

##### `sageMakerImageVersionArn`<sup>Optional</sup> <a name="sageMakerImageVersionArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.sageMakerImageVersionArn"></a>

```java
public java.lang.String getSageMakerImageVersionArn();
```

- *Type:* java.lang.String

The ARN of the image version created on the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#sage_maker_image_version_arn SagemakerUserProfile#sage_maker_image_version_arn}

---

##### `trainingPlanArn`<sup>Optional</sup> <a name="trainingPlanArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.trainingPlanArn"></a>

```java
public java.lang.String getTrainingPlanArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the training plan to use for the ResourceSpec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#training_plan_arn SagemakerUserProfile#training_plan_arn}

---

### SagemakerUserProfileUserSettingsRStudioServerProAppSettings <a name="SagemakerUserProfileUserSettingsRStudioServerProAppSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_user_profile.SagemakerUserProfileUserSettingsRStudioServerProAppSettings;

SagemakerUserProfileUserSettingsRStudioServerProAppSettings.builder()
//  .accessStatus(java.lang.String)
//  .userGroup(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettings.property.accessStatus">accessStatus</a></code> | <code>java.lang.String</code> | Indicates whether the current user has access to the RStudioServerPro app. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettings.property.userGroup">userGroup</a></code> | <code>java.lang.String</code> | The level of permissions that the user has within the RStudioServerPro app. |

---

##### `accessStatus`<sup>Optional</sup> <a name="accessStatus" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettings.property.accessStatus"></a>

```java
public java.lang.String getAccessStatus();
```

- *Type:* java.lang.String

Indicates whether the current user has access to the RStudioServerPro app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#access_status SagemakerUserProfile#access_status}

---

##### `userGroup`<sup>Optional</sup> <a name="userGroup" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettings.property.userGroup"></a>

```java
public java.lang.String getUserGroup();
```

- *Type:* java.lang.String

The level of permissions that the user has within the RStudioServerPro app.

This value defaults to User. The Admin value allows the user access to the RStudio Administrative Dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#user_group SagemakerUserProfile#user_group}

---

### SagemakerUserProfileUserSettingsSharingSettings <a name="SagemakerUserProfileUserSettingsSharingSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_user_profile.SagemakerUserProfileUserSettingsSharingSettings;

SagemakerUserProfileUserSettingsSharingSettings.builder()
//  .notebookOutputOption(java.lang.String)
//  .s3KmsKeyId(java.lang.String)
//  .s3OutputPath(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettings.property.notebookOutputOption">notebookOutputOption</a></code> | <code>java.lang.String</code> | Whether to include the notebook cell output when sharing the notebook. The default is Disabled. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettings.property.s3KmsKeyId">s3KmsKeyId</a></code> | <code>java.lang.String</code> | When NotebookOutputOption is Allowed, the AWS Key Management Service (KMS) encryption key ID used to encrypt the notebook cell output in the Amazon S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettings.property.s3OutputPath">s3OutputPath</a></code> | <code>java.lang.String</code> | When NotebookOutputOption is Allowed, the Amazon S3 bucket used to store the shared notebook snapshots. |

---

##### `notebookOutputOption`<sup>Optional</sup> <a name="notebookOutputOption" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettings.property.notebookOutputOption"></a>

```java
public java.lang.String getNotebookOutputOption();
```

- *Type:* java.lang.String

Whether to include the notebook cell output when sharing the notebook. The default is Disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#notebook_output_option SagemakerUserProfile#notebook_output_option}

---

##### `s3KmsKeyId`<sup>Optional</sup> <a name="s3KmsKeyId" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettings.property.s3KmsKeyId"></a>

```java
public java.lang.String getS3KmsKeyId();
```

- *Type:* java.lang.String

When NotebookOutputOption is Allowed, the AWS Key Management Service (KMS) encryption key ID used to encrypt the notebook cell output in the Amazon S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#s3_kms_key_id SagemakerUserProfile#s3_kms_key_id}

---

##### `s3OutputPath`<sup>Optional</sup> <a name="s3OutputPath" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettings.property.s3OutputPath"></a>

```java
public java.lang.String getS3OutputPath();
```

- *Type:* java.lang.String

When NotebookOutputOption is Allowed, the Amazon S3 bucket used to store the shared notebook snapshots.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#s3_output_path SagemakerUserProfile#s3_output_path}

---

### SagemakerUserProfileUserSettingsSpaceStorageSettings <a name="SagemakerUserProfileUserSettingsSpaceStorageSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_user_profile.SagemakerUserProfileUserSettingsSpaceStorageSettings;

SagemakerUserProfileUserSettingsSpaceStorageSettings.builder()
//  .defaultEbsStorageSettings(SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettings.property.defaultEbsStorageSettings">defaultEbsStorageSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings">SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings</a></code> | Properties related to the Amazon Elastic Block Store volume. |

---

##### `defaultEbsStorageSettings`<sup>Optional</sup> <a name="defaultEbsStorageSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettings.property.defaultEbsStorageSettings"></a>

```java
public SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings getDefaultEbsStorageSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings">SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings</a>

Properties related to the Amazon Elastic Block Store volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#default_ebs_storage_settings SagemakerUserProfile#default_ebs_storage_settings}

---

### SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings <a name="SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_user_profile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings;

SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings.builder()
//  .defaultEbsVolumeSizeInGb(java.lang.Number)
//  .maximumEbsVolumeSizeInGb(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings.property.defaultEbsVolumeSizeInGb">defaultEbsVolumeSizeInGb</a></code> | <code>java.lang.Number</code> | Default size of the Amazon EBS volume in Gb. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings.property.maximumEbsVolumeSizeInGb">maximumEbsVolumeSizeInGb</a></code> | <code>java.lang.Number</code> | Maximum size of the Amazon EBS volume in Gb. Must be greater than or equal to the DefaultEbsVolumeSizeInGb. |

---

##### `defaultEbsVolumeSizeInGb`<sup>Optional</sup> <a name="defaultEbsVolumeSizeInGb" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings.property.defaultEbsVolumeSizeInGb"></a>

```java
public java.lang.Number getDefaultEbsVolumeSizeInGb();
```

- *Type:* java.lang.Number

Default size of the Amazon EBS volume in Gb.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#default_ebs_volume_size_in_gb SagemakerUserProfile#default_ebs_volume_size_in_gb}

---

##### `maximumEbsVolumeSizeInGb`<sup>Optional</sup> <a name="maximumEbsVolumeSizeInGb" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings.property.maximumEbsVolumeSizeInGb"></a>

```java
public java.lang.Number getMaximumEbsVolumeSizeInGb();
```

- *Type:* java.lang.Number

Maximum size of the Amazon EBS volume in Gb. Must be greater than or equal to the DefaultEbsVolumeSizeInGb.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#maximum_ebs_volume_size_in_gb SagemakerUserProfile#maximum_ebs_volume_size_in_gb}

---

### SagemakerUserProfileUserSettingsStudioWebPortalSettings <a name="SagemakerUserProfileUserSettingsStudioWebPortalSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_user_profile.SagemakerUserProfileUserSettingsStudioWebPortalSettings;

SagemakerUserProfileUserSettingsStudioWebPortalSettings.builder()
//  .hiddenAppTypes(java.util.List<java.lang.String>)
//  .hiddenInstanceTypes(java.util.List<java.lang.String>)
//  .hiddenMlTools(java.util.List<java.lang.String>)
//  .hiddenSageMakerImageVersionAliases(IResolvable|java.util.List<SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettings.property.hiddenAppTypes">hiddenAppTypes</a></code> | <code>java.util.List<java.lang.String></code> | Applications supported in Studio that are hidden from the Studio left navigation pane. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettings.property.hiddenInstanceTypes">hiddenInstanceTypes</a></code> | <code>java.util.List<java.lang.String></code> | The instance types you are hiding from the Studio user interface. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettings.property.hiddenMlTools">hiddenMlTools</a></code> | <code>java.util.List<java.lang.String></code> | The machine learning tools that are hidden from the Studio left navigation pane. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettings.property.hiddenSageMakerImageVersionAliases">hiddenSageMakerImageVersionAliases</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases">SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases</a>></code> | The version aliases you are hiding from the Studio user interface. |

---

##### `hiddenAppTypes`<sup>Optional</sup> <a name="hiddenAppTypes" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettings.property.hiddenAppTypes"></a>

```java
public java.util.List<java.lang.String> getHiddenAppTypes();
```

- *Type:* java.util.List<java.lang.String>

Applications supported in Studio that are hidden from the Studio left navigation pane.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#hidden_app_types SagemakerUserProfile#hidden_app_types}

---

##### `hiddenInstanceTypes`<sup>Optional</sup> <a name="hiddenInstanceTypes" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettings.property.hiddenInstanceTypes"></a>

```java
public java.util.List<java.lang.String> getHiddenInstanceTypes();
```

- *Type:* java.util.List<java.lang.String>

The instance types you are hiding from the Studio user interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#hidden_instance_types SagemakerUserProfile#hidden_instance_types}

---

##### `hiddenMlTools`<sup>Optional</sup> <a name="hiddenMlTools" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettings.property.hiddenMlTools"></a>

```java
public java.util.List<java.lang.String> getHiddenMlTools();
```

- *Type:* java.util.List<java.lang.String>

The machine learning tools that are hidden from the Studio left navigation pane.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#hidden_ml_tools SagemakerUserProfile#hidden_ml_tools}

---

##### `hiddenSageMakerImageVersionAliases`<sup>Optional</sup> <a name="hiddenSageMakerImageVersionAliases" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettings.property.hiddenSageMakerImageVersionAliases"></a>

```java
public IResolvable|java.util.List<SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases> getHiddenSageMakerImageVersionAliases();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases">SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases</a>>

The version aliases you are hiding from the Studio user interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#hidden_sage_maker_image_version_aliases SagemakerUserProfile#hidden_sage_maker_image_version_aliases}

---

### SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases <a name="SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_user_profile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases;

SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases.builder()
//  .sageMakerImageName(java.lang.String)
//  .versionAliases(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases.property.sageMakerImageName">sageMakerImageName</a></code> | <code>java.lang.String</code> | The SageMaker image name that you are hiding from the Studio user interface. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases.property.versionAliases">versionAliases</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#version_aliases SagemakerUserProfile#version_aliases}. |

---

##### `sageMakerImageName`<sup>Optional</sup> <a name="sageMakerImageName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases.property.sageMakerImageName"></a>

```java
public java.lang.String getSageMakerImageName();
```

- *Type:* java.lang.String

The SageMaker image name that you are hiding from the Studio user interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#sage_maker_image_name SagemakerUserProfile#sage_maker_image_name}

---

##### `versionAliases`<sup>Optional</sup> <a name="versionAliases" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases.property.versionAliases"></a>

```java
public java.util.List<java.lang.String> getVersionAliases();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#version_aliases SagemakerUserProfile#version_aliases}.

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerUserProfileTagsList <a name="SagemakerUserProfileTagsList" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_user_profile.SagemakerUserProfileTagsList;

new SagemakerUserProfileTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.get"></a>

```java
public SagemakerUserProfileTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTags">SagemakerUserProfileTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SagemakerUserProfileTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTags">SagemakerUserProfileTags</a>>

---


### SagemakerUserProfileTagsOutputReference <a name="SagemakerUserProfileTagsOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_user_profile.SagemakerUserProfileTagsOutputReference;

new SagemakerUserProfileTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTags">SagemakerUserProfileTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerUserProfileTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTags">SagemakerUserProfileTags</a>

---


### SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference <a name="SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_user_profile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference;

new SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resetIdleTimeoutInMinutes">resetIdleTimeoutInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resetLifecycleManagement">resetLifecycleManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resetMaxIdleTimeoutInMinutes">resetMaxIdleTimeoutInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resetMinIdleTimeoutInMinutes">resetMinIdleTimeoutInMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdleTimeoutInMinutes` <a name="resetIdleTimeoutInMinutes" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resetIdleTimeoutInMinutes"></a>

```java
public void resetIdleTimeoutInMinutes()
```

##### `resetLifecycleManagement` <a name="resetLifecycleManagement" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resetLifecycleManagement"></a>

```java
public void resetLifecycleManagement()
```

##### `resetMaxIdleTimeoutInMinutes` <a name="resetMaxIdleTimeoutInMinutes" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resetMaxIdleTimeoutInMinutes"></a>

```java
public void resetMaxIdleTimeoutInMinutes()
```

##### `resetMinIdleTimeoutInMinutes` <a name="resetMinIdleTimeoutInMinutes" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resetMinIdleTimeoutInMinutes"></a>

```java
public void resetMinIdleTimeoutInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.idleTimeoutInMinutesInput">idleTimeoutInMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.lifecycleManagementInput">lifecycleManagementInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.maxIdleTimeoutInMinutesInput">maxIdleTimeoutInMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.minIdleTimeoutInMinutesInput">minIdleTimeoutInMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.idleTimeoutInMinutes">idleTimeoutInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.lifecycleManagement">lifecycleManagement</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.maxIdleTimeoutInMinutes">maxIdleTimeoutInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.minIdleTimeoutInMinutes">minIdleTimeoutInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings">SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idleTimeoutInMinutesInput`<sup>Optional</sup> <a name="idleTimeoutInMinutesInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.idleTimeoutInMinutesInput"></a>

```java
public java.lang.Number getIdleTimeoutInMinutesInput();
```

- *Type:* java.lang.Number

---

##### `lifecycleManagementInput`<sup>Optional</sup> <a name="lifecycleManagementInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.lifecycleManagementInput"></a>

```java
public java.lang.String getLifecycleManagementInput();
```

- *Type:* java.lang.String

---

##### `maxIdleTimeoutInMinutesInput`<sup>Optional</sup> <a name="maxIdleTimeoutInMinutesInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.maxIdleTimeoutInMinutesInput"></a>

```java
public java.lang.Number getMaxIdleTimeoutInMinutesInput();
```

- *Type:* java.lang.Number

---

##### `minIdleTimeoutInMinutesInput`<sup>Optional</sup> <a name="minIdleTimeoutInMinutesInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.minIdleTimeoutInMinutesInput"></a>

```java
public java.lang.Number getMinIdleTimeoutInMinutesInput();
```

- *Type:* java.lang.Number

---

##### `idleTimeoutInMinutes`<sup>Required</sup> <a name="idleTimeoutInMinutes" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.idleTimeoutInMinutes"></a>

```java
public java.lang.Number getIdleTimeoutInMinutes();
```

- *Type:* java.lang.Number

---

##### `lifecycleManagement`<sup>Required</sup> <a name="lifecycleManagement" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.lifecycleManagement"></a>

```java
public java.lang.String getLifecycleManagement();
```

- *Type:* java.lang.String

---

##### `maxIdleTimeoutInMinutes`<sup>Required</sup> <a name="maxIdleTimeoutInMinutes" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.maxIdleTimeoutInMinutes"></a>

```java
public java.lang.Number getMaxIdleTimeoutInMinutes();
```

- *Type:* java.lang.Number

---

##### `minIdleTimeoutInMinutes`<sup>Required</sup> <a name="minIdleTimeoutInMinutes" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.minIdleTimeoutInMinutes"></a>

```java
public java.lang.Number getMinIdleTimeoutInMinutes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings">SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings</a>

---


### SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference <a name="SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_user_profile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference;

new SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.putIdleSettings">putIdleSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.resetIdleSettings">resetIdleSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIdleSettings` <a name="putIdleSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.putIdleSettings"></a>

```java
public void putIdleSettings(SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.putIdleSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings">SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings</a>

---

##### `resetIdleSettings` <a name="resetIdleSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.resetIdleSettings"></a>

```java
public void resetIdleSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.idleSettings">idleSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference">SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.idleSettingsInput">idleSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings">SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement">SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idleSettings`<sup>Required</sup> <a name="idleSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.idleSettings"></a>

```java
public SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference getIdleSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference">SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference</a>

---

##### `idleSettingsInput`<sup>Optional</sup> <a name="idleSettingsInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.idleSettingsInput"></a>

```java
public IResolvable|SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings getIdleSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings">SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement">SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement</a>

---


### SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList <a name="SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_user_profile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList;

new SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.get"></a>

```java
public SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages">SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages">SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages</a>>

---


### SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference <a name="SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_user_profile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference;

new SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.resetAppImageConfigName">resetAppImageConfigName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.resetImageName">resetImageName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.resetImageVersionNumber">resetImageVersionNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAppImageConfigName` <a name="resetAppImageConfigName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.resetAppImageConfigName"></a>

```java
public void resetAppImageConfigName()
```

##### `resetImageName` <a name="resetImageName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.resetImageName"></a>

```java
public void resetImageName()
```

##### `resetImageVersionNumber` <a name="resetImageVersionNumber" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.resetImageVersionNumber"></a>

```java
public void resetImageVersionNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.property.appImageConfigNameInput">appImageConfigNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.property.imageNameInput">imageNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.property.imageVersionNumberInput">imageVersionNumberInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.property.appImageConfigName">appImageConfigName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.property.imageName">imageName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.property.imageVersionNumber">imageVersionNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages">SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `appImageConfigNameInput`<sup>Optional</sup> <a name="appImageConfigNameInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.property.appImageConfigNameInput"></a>

```java
public java.lang.String getAppImageConfigNameInput();
```

- *Type:* java.lang.String

---

##### `imageNameInput`<sup>Optional</sup> <a name="imageNameInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.property.imageNameInput"></a>

```java
public java.lang.String getImageNameInput();
```

- *Type:* java.lang.String

---

##### `imageVersionNumberInput`<sup>Optional</sup> <a name="imageVersionNumberInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.property.imageVersionNumberInput"></a>

```java
public java.lang.Number getImageVersionNumberInput();
```

- *Type:* java.lang.Number

---

##### `appImageConfigName`<sup>Required</sup> <a name="appImageConfigName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.property.appImageConfigName"></a>

```java
public java.lang.String getAppImageConfigName();
```

- *Type:* java.lang.String

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.property.imageName"></a>

```java
public java.lang.String getImageName();
```

- *Type:* java.lang.String

---

##### `imageVersionNumber`<sup>Required</sup> <a name="imageVersionNumber" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.property.imageVersionNumber"></a>

```java
public java.lang.Number getImageVersionNumber();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages">SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages</a>

---


### SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference <a name="SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_user_profile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference;

new SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetInstanceType">resetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn">resetLifecycleConfigArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageArn">resetSageMakerImageArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageVersionArn">resetSageMakerImageVersionArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetTrainingPlanArn">resetTrainingPlanArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInstanceType` <a name="resetInstanceType" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetInstanceType"></a>

```java
public void resetInstanceType()
```

##### `resetLifecycleConfigArn` <a name="resetLifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn"></a>

```java
public void resetLifecycleConfigArn()
```

##### `resetSageMakerImageArn` <a name="resetSageMakerImageArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageArn"></a>

```java
public void resetSageMakerImageArn()
```

##### `resetSageMakerImageVersionArn` <a name="resetSageMakerImageVersionArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageVersionArn"></a>

```java
public void resetSageMakerImageVersionArn()
```

##### `resetTrainingPlanArn` <a name="resetTrainingPlanArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetTrainingPlanArn"></a>

```java
public void resetTrainingPlanArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput">lifecycleConfigArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArnInput">sageMakerImageArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArnInput">sageMakerImageVersionArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.trainingPlanArnInput">trainingPlanArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn">lifecycleConfigArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArn">sageMakerImageArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArn">sageMakerImageVersionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.trainingPlanArn">trainingPlanArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput"></a>

```java
public java.lang.String getInstanceTypeInput();
```

- *Type:* java.lang.String

---

##### `lifecycleConfigArnInput`<sup>Optional</sup> <a name="lifecycleConfigArnInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput"></a>

```java
public java.lang.String getLifecycleConfigArnInput();
```

- *Type:* java.lang.String

---

##### `sageMakerImageArnInput`<sup>Optional</sup> <a name="sageMakerImageArnInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArnInput"></a>

```java
public java.lang.String getSageMakerImageArnInput();
```

- *Type:* java.lang.String

---

##### `sageMakerImageVersionArnInput`<sup>Optional</sup> <a name="sageMakerImageVersionArnInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArnInput"></a>

```java
public java.lang.String getSageMakerImageVersionArnInput();
```

- *Type:* java.lang.String

---

##### `trainingPlanArnInput`<sup>Optional</sup> <a name="trainingPlanArnInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.trainingPlanArnInput"></a>

```java
public java.lang.String getTrainingPlanArnInput();
```

- *Type:* java.lang.String

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

---

##### `lifecycleConfigArn`<sup>Required</sup> <a name="lifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn"></a>

```java
public java.lang.String getLifecycleConfigArn();
```

- *Type:* java.lang.String

---

##### `sageMakerImageArn`<sup>Required</sup> <a name="sageMakerImageArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArn"></a>

```java
public java.lang.String getSageMakerImageArn();
```

- *Type:* java.lang.String

---

##### `sageMakerImageVersionArn`<sup>Required</sup> <a name="sageMakerImageVersionArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArn"></a>

```java
public java.lang.String getSageMakerImageVersionArn();
```

- *Type:* java.lang.String

---

##### `trainingPlanArn`<sup>Required</sup> <a name="trainingPlanArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.trainingPlanArn"></a>

```java
public java.lang.String getTrainingPlanArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec</a>

---


### SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference <a name="SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_user_profile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference;

new SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.putAppLifecycleManagement">putAppLifecycleManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.putCustomImages">putCustomImages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.putDefaultResourceSpec">putDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.resetAppLifecycleManagement">resetAppLifecycleManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.resetBuiltInLifecycleConfigArn">resetBuiltInLifecycleConfigArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.resetCustomImages">resetCustomImages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.resetDefaultResourceSpec">resetDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.resetLifecycleConfigArns">resetLifecycleConfigArns</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAppLifecycleManagement` <a name="putAppLifecycleManagement" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.putAppLifecycleManagement"></a>

```java
public void putAppLifecycleManagement(SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.putAppLifecycleManagement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement">SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement</a>

---

##### `putCustomImages` <a name="putCustomImages" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.putCustomImages"></a>

```java
public void putCustomImages(IResolvable|java.util.List<SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.putCustomImages.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages">SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages</a>>

---

##### `putDefaultResourceSpec` <a name="putDefaultResourceSpec" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.putDefaultResourceSpec"></a>

```java
public void putDefaultResourceSpec(SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.putDefaultResourceSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec</a>

---

##### `resetAppLifecycleManagement` <a name="resetAppLifecycleManagement" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.resetAppLifecycleManagement"></a>

```java
public void resetAppLifecycleManagement()
```

##### `resetBuiltInLifecycleConfigArn` <a name="resetBuiltInLifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.resetBuiltInLifecycleConfigArn"></a>

```java
public void resetBuiltInLifecycleConfigArn()
```

##### `resetCustomImages` <a name="resetCustomImages" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.resetCustomImages"></a>

```java
public void resetCustomImages()
```

##### `resetDefaultResourceSpec` <a name="resetDefaultResourceSpec" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.resetDefaultResourceSpec"></a>

```java
public void resetDefaultResourceSpec()
```

##### `resetLifecycleConfigArns` <a name="resetLifecycleConfigArns" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.resetLifecycleConfigArns"></a>

```java
public void resetLifecycleConfigArns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.appLifecycleManagement">appLifecycleManagement</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference">SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.customImages">customImages</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList">SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.defaultResourceSpec">defaultResourceSpec</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference">SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.appLifecycleManagementInput">appLifecycleManagementInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement">SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.builtInLifecycleConfigArnInput">builtInLifecycleConfigArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.customImagesInput">customImagesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages">SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.defaultResourceSpecInput">defaultResourceSpecInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.lifecycleConfigArnsInput">lifecycleConfigArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.builtInLifecycleConfigArn">builtInLifecycleConfigArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.lifecycleConfigArns">lifecycleConfigArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettings">SagemakerUserProfileUserSettingsCodeEditorAppSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `appLifecycleManagement`<sup>Required</sup> <a name="appLifecycleManagement" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.appLifecycleManagement"></a>

```java
public SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference getAppLifecycleManagement();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference">SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference</a>

---

##### `customImages`<sup>Required</sup> <a name="customImages" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.customImages"></a>

```java
public SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList getCustomImages();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList">SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList</a>

---

##### `defaultResourceSpec`<sup>Required</sup> <a name="defaultResourceSpec" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.defaultResourceSpec"></a>

```java
public SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference getDefaultResourceSpec();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference">SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference</a>

---

##### `appLifecycleManagementInput`<sup>Optional</sup> <a name="appLifecycleManagementInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.appLifecycleManagementInput"></a>

```java
public IResolvable|SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement getAppLifecycleManagementInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement">SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement</a>

---

##### `builtInLifecycleConfigArnInput`<sup>Optional</sup> <a name="builtInLifecycleConfigArnInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.builtInLifecycleConfigArnInput"></a>

```java
public java.lang.String getBuiltInLifecycleConfigArnInput();
```

- *Type:* java.lang.String

---

##### `customImagesInput`<sup>Optional</sup> <a name="customImagesInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.customImagesInput"></a>

```java
public IResolvable|java.util.List<SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages> getCustomImagesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages">SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages</a>>

---

##### `defaultResourceSpecInput`<sup>Optional</sup> <a name="defaultResourceSpecInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.defaultResourceSpecInput"></a>

```java
public IResolvable|SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec getDefaultResourceSpecInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec</a>

---

##### `lifecycleConfigArnsInput`<sup>Optional</sup> <a name="lifecycleConfigArnsInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.lifecycleConfigArnsInput"></a>

```java
public java.util.List<java.lang.String> getLifecycleConfigArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `builtInLifecycleConfigArn`<sup>Required</sup> <a name="builtInLifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.builtInLifecycleConfigArn"></a>

```java
public java.lang.String getBuiltInLifecycleConfigArn();
```

- *Type:* java.lang.String

---

##### `lifecycleConfigArns`<sup>Required</sup> <a name="lifecycleConfigArns" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.lifecycleConfigArns"></a>

```java
public java.util.List<java.lang.String> getLifecycleConfigArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerUserProfileUserSettingsCodeEditorAppSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettings">SagemakerUserProfileUserSettingsCodeEditorAppSettings</a>

---


### SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference <a name="SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_user_profile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference;

new SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.resetFileSystemId">resetFileSystemId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.resetFileSystemPath">resetFileSystemPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFileSystemId` <a name="resetFileSystemId" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.resetFileSystemId"></a>

```java
public void resetFileSystemId()
```

##### `resetFileSystemPath` <a name="resetFileSystemPath" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.resetFileSystemPath"></a>

```java
public void resetFileSystemPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.property.fileSystemIdInput">fileSystemIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.property.fileSystemPathInput">fileSystemPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.property.fileSystemId">fileSystemId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.property.fileSystemPath">fileSystemPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig">SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fileSystemIdInput`<sup>Optional</sup> <a name="fileSystemIdInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.property.fileSystemIdInput"></a>

```java
public java.lang.String getFileSystemIdInput();
```

- *Type:* java.lang.String

---

##### `fileSystemPathInput`<sup>Optional</sup> <a name="fileSystemPathInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.property.fileSystemPathInput"></a>

```java
public java.lang.String getFileSystemPathInput();
```

- *Type:* java.lang.String

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.property.fileSystemId"></a>

```java
public java.lang.String getFileSystemId();
```

- *Type:* java.lang.String

---

##### `fileSystemPath`<sup>Required</sup> <a name="fileSystemPath" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.property.fileSystemPath"></a>

```java
public java.lang.String getFileSystemPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig">SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig</a>

---


### SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference <a name="SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_user_profile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference;

new SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.resetFileSystemId">resetFileSystemId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.resetFileSystemPath">resetFileSystemPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFileSystemId` <a name="resetFileSystemId" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.resetFileSystemId"></a>

```java
public void resetFileSystemId()
```

##### `resetFileSystemPath` <a name="resetFileSystemPath" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.resetFileSystemPath"></a>

```java
public void resetFileSystemPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.property.fileSystemIdInput">fileSystemIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.property.fileSystemPathInput">fileSystemPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.property.fileSystemId">fileSystemId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.property.fileSystemPath">fileSystemPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig">SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fileSystemIdInput`<sup>Optional</sup> <a name="fileSystemIdInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.property.fileSystemIdInput"></a>

```java
public java.lang.String getFileSystemIdInput();
```

- *Type:* java.lang.String

---

##### `fileSystemPathInput`<sup>Optional</sup> <a name="fileSystemPathInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.property.fileSystemPathInput"></a>

```java
public java.lang.String getFileSystemPathInput();
```

- *Type:* java.lang.String

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.property.fileSystemId"></a>

```java
public java.lang.String getFileSystemId();
```

- *Type:* java.lang.String

---

##### `fileSystemPath`<sup>Required</sup> <a name="fileSystemPath" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.property.fileSystemPath"></a>

```java
public java.lang.String getFileSystemPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig">SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig</a>

---


### SagemakerUserProfileUserSettingsCustomFileSystemConfigsList <a name="SagemakerUserProfileUserSettingsCustomFileSystemConfigsList" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_user_profile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList;

new SagemakerUserProfileUserSettingsCustomFileSystemConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.get"></a>

```java
public SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigs">SagemakerUserProfileUserSettingsCustomFileSystemConfigs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SagemakerUserProfileUserSettingsCustomFileSystemConfigs> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigs">SagemakerUserProfileUserSettingsCustomFileSystemConfigs</a>>

---


### SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference <a name="SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_user_profile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference;

new SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.putEfsFileSystemConfig">putEfsFileSystemConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.putFsxLustreFileSystemConfig">putFsxLustreFileSystemConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.putS3FileSystemConfig">putS3FileSystemConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.resetEfsFileSystemConfig">resetEfsFileSystemConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.resetFsxLustreFileSystemConfig">resetFsxLustreFileSystemConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.resetS3FileSystemConfig">resetS3FileSystemConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEfsFileSystemConfig` <a name="putEfsFileSystemConfig" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.putEfsFileSystemConfig"></a>

```java
public void putEfsFileSystemConfig(SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.putEfsFileSystemConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig">SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig</a>

---

##### `putFsxLustreFileSystemConfig` <a name="putFsxLustreFileSystemConfig" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.putFsxLustreFileSystemConfig"></a>

```java
public void putFsxLustreFileSystemConfig(SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.putFsxLustreFileSystemConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig">SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig</a>

---

##### `putS3FileSystemConfig` <a name="putS3FileSystemConfig" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.putS3FileSystemConfig"></a>

```java
public void putS3FileSystemConfig(SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.putS3FileSystemConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig">SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig</a>

---

##### `resetEfsFileSystemConfig` <a name="resetEfsFileSystemConfig" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.resetEfsFileSystemConfig"></a>

```java
public void resetEfsFileSystemConfig()
```

##### `resetFsxLustreFileSystemConfig` <a name="resetFsxLustreFileSystemConfig" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.resetFsxLustreFileSystemConfig"></a>

```java
public void resetFsxLustreFileSystemConfig()
```

##### `resetS3FileSystemConfig` <a name="resetS3FileSystemConfig" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.resetS3FileSystemConfig"></a>

```java
public void resetS3FileSystemConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.property.efsFileSystemConfig">efsFileSystemConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference">SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.property.fsxLustreFileSystemConfig">fsxLustreFileSystemConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference">SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.property.s3FileSystemConfig">s3FileSystemConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference">SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.property.efsFileSystemConfigInput">efsFileSystemConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig">SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.property.fsxLustreFileSystemConfigInput">fsxLustreFileSystemConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig">SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.property.s3FileSystemConfigInput">s3FileSystemConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig">SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigs">SagemakerUserProfileUserSettingsCustomFileSystemConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `efsFileSystemConfig`<sup>Required</sup> <a name="efsFileSystemConfig" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.property.efsFileSystemConfig"></a>

```java
public SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference getEfsFileSystemConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference">SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference</a>

---

##### `fsxLustreFileSystemConfig`<sup>Required</sup> <a name="fsxLustreFileSystemConfig" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.property.fsxLustreFileSystemConfig"></a>

```java
public SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference getFsxLustreFileSystemConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference">SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference</a>

---

##### `s3FileSystemConfig`<sup>Required</sup> <a name="s3FileSystemConfig" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.property.s3FileSystemConfig"></a>

```java
public SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference getS3FileSystemConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference">SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference</a>

---

##### `efsFileSystemConfigInput`<sup>Optional</sup> <a name="efsFileSystemConfigInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.property.efsFileSystemConfigInput"></a>

```java
public IResolvable|SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig getEfsFileSystemConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig">SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig</a>

---

##### `fsxLustreFileSystemConfigInput`<sup>Optional</sup> <a name="fsxLustreFileSystemConfigInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.property.fsxLustreFileSystemConfigInput"></a>

```java
public IResolvable|SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig getFsxLustreFileSystemConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig">SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig</a>

---

##### `s3FileSystemConfigInput`<sup>Optional</sup> <a name="s3FileSystemConfigInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.property.s3FileSystemConfigInput"></a>

```java
public IResolvable|SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig getS3FileSystemConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig">SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerUserProfileUserSettingsCustomFileSystemConfigs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigs">SagemakerUserProfileUserSettingsCustomFileSystemConfigs</a>

---


### SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference <a name="SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_user_profile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference;

new SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.resetMountPath">resetMountPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.resetS3Uri">resetS3Uri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMountPath` <a name="resetMountPath" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.resetMountPath"></a>

```java
public void resetMountPath()
```

##### `resetS3Uri` <a name="resetS3Uri" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.resetS3Uri"></a>

```java
public void resetS3Uri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.property.mountPathInput">mountPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.property.s3UriInput">s3UriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.property.mountPath">mountPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.property.s3Uri">s3Uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig">SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mountPathInput`<sup>Optional</sup> <a name="mountPathInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.property.mountPathInput"></a>

```java
public java.lang.String getMountPathInput();
```

- *Type:* java.lang.String

---

##### `s3UriInput`<sup>Optional</sup> <a name="s3UriInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.property.s3UriInput"></a>

```java
public java.lang.String getS3UriInput();
```

- *Type:* java.lang.String

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.property.mountPath"></a>

```java
public java.lang.String getMountPath();
```

- *Type:* java.lang.String

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.property.s3Uri"></a>

```java
public java.lang.String getS3Uri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig">SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig</a>

---


### SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference <a name="SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_user_profile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference;

new SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.resetGid">resetGid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.resetUid">resetUid</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGid` <a name="resetGid" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.resetGid"></a>

```java
public void resetGid()
```

##### `resetUid` <a name="resetUid" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.resetUid"></a>

```java
public void resetUid()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.property.gidInput">gidInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.property.uidInput">uidInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.property.gid">gid</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.property.uid">uid</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfig">SagemakerUserProfileUserSettingsCustomPosixUserConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `gidInput`<sup>Optional</sup> <a name="gidInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.property.gidInput"></a>

```java
public java.lang.Number getGidInput();
```

- *Type:* java.lang.Number

---

##### `uidInput`<sup>Optional</sup> <a name="uidInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.property.uidInput"></a>

```java
public java.lang.Number getUidInput();
```

- *Type:* java.lang.Number

---

##### `gid`<sup>Required</sup> <a name="gid" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.property.gid"></a>

```java
public java.lang.Number getGid();
```

- *Type:* java.lang.Number

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.property.uid"></a>

```java
public java.lang.Number getUid();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerUserProfileUserSettingsCustomPosixUserConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfig">SagemakerUserProfileUserSettingsCustomPosixUserConfig</a>

---


### SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference <a name="SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_user_profile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference;

new SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resetIdleTimeoutInMinutes">resetIdleTimeoutInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resetLifecycleManagement">resetLifecycleManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resetMaxIdleTimeoutInMinutes">resetMaxIdleTimeoutInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resetMinIdleTimeoutInMinutes">resetMinIdleTimeoutInMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdleTimeoutInMinutes` <a name="resetIdleTimeoutInMinutes" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resetIdleTimeoutInMinutes"></a>

```java
public void resetIdleTimeoutInMinutes()
```

##### `resetLifecycleManagement` <a name="resetLifecycleManagement" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resetLifecycleManagement"></a>

```java
public void resetLifecycleManagement()
```

##### `resetMaxIdleTimeoutInMinutes` <a name="resetMaxIdleTimeoutInMinutes" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resetMaxIdleTimeoutInMinutes"></a>

```java
public void resetMaxIdleTimeoutInMinutes()
```

##### `resetMinIdleTimeoutInMinutes` <a name="resetMinIdleTimeoutInMinutes" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resetMinIdleTimeoutInMinutes"></a>

```java
public void resetMinIdleTimeoutInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.idleTimeoutInMinutesInput">idleTimeoutInMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.lifecycleManagementInput">lifecycleManagementInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.maxIdleTimeoutInMinutesInput">maxIdleTimeoutInMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.minIdleTimeoutInMinutesInput">minIdleTimeoutInMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.idleTimeoutInMinutes">idleTimeoutInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.lifecycleManagement">lifecycleManagement</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.maxIdleTimeoutInMinutes">maxIdleTimeoutInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.minIdleTimeoutInMinutes">minIdleTimeoutInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings">SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idleTimeoutInMinutesInput`<sup>Optional</sup> <a name="idleTimeoutInMinutesInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.idleTimeoutInMinutesInput"></a>

```java
public java.lang.Number getIdleTimeoutInMinutesInput();
```

- *Type:* java.lang.Number

---

##### `lifecycleManagementInput`<sup>Optional</sup> <a name="lifecycleManagementInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.lifecycleManagementInput"></a>

```java
public java.lang.String getLifecycleManagementInput();
```

- *Type:* java.lang.String

---

##### `maxIdleTimeoutInMinutesInput`<sup>Optional</sup> <a name="maxIdleTimeoutInMinutesInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.maxIdleTimeoutInMinutesInput"></a>

```java
public java.lang.Number getMaxIdleTimeoutInMinutesInput();
```

- *Type:* java.lang.Number

---

##### `minIdleTimeoutInMinutesInput`<sup>Optional</sup> <a name="minIdleTimeoutInMinutesInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.minIdleTimeoutInMinutesInput"></a>

```java
public java.lang.Number getMinIdleTimeoutInMinutesInput();
```

- *Type:* java.lang.Number

---

##### `idleTimeoutInMinutes`<sup>Required</sup> <a name="idleTimeoutInMinutes" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.idleTimeoutInMinutes"></a>

```java
public java.lang.Number getIdleTimeoutInMinutes();
```

- *Type:* java.lang.Number

---

##### `lifecycleManagement`<sup>Required</sup> <a name="lifecycleManagement" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.lifecycleManagement"></a>

```java
public java.lang.String getLifecycleManagement();
```

- *Type:* java.lang.String

---

##### `maxIdleTimeoutInMinutes`<sup>Required</sup> <a name="maxIdleTimeoutInMinutes" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.maxIdleTimeoutInMinutes"></a>

```java
public java.lang.Number getMaxIdleTimeoutInMinutes();
```

- *Type:* java.lang.Number

---

##### `minIdleTimeoutInMinutes`<sup>Required</sup> <a name="minIdleTimeoutInMinutes" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.minIdleTimeoutInMinutes"></a>

```java
public java.lang.Number getMinIdleTimeoutInMinutes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings">SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings</a>

---


### SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference <a name="SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_user_profile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference;

new SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.putIdleSettings">putIdleSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.resetIdleSettings">resetIdleSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIdleSettings` <a name="putIdleSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.putIdleSettings"></a>

```java
public void putIdleSettings(SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.putIdleSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings">SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings</a>

---

##### `resetIdleSettings` <a name="resetIdleSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.resetIdleSettings"></a>

```java
public void resetIdleSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.idleSettings">idleSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference">SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.idleSettingsInput">idleSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings">SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement">SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idleSettings`<sup>Required</sup> <a name="idleSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.idleSettings"></a>

```java
public SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference getIdleSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference">SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference</a>

---

##### `idleSettingsInput`<sup>Optional</sup> <a name="idleSettingsInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.idleSettingsInput"></a>

```java
public IResolvable|SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings getIdleSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings">SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement">SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement</a>

---


### SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList <a name="SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_user_profile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList;

new SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.get"></a>

```java
public SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories">SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories">SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories</a>>

---


### SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference <a name="SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_user_profile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference;

new SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.resetRepositoryUrl">resetRepositoryUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRepositoryUrl` <a name="resetRepositoryUrl" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.resetRepositoryUrl"></a>

```java
public void resetRepositoryUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.property.repositoryUrlInput">repositoryUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.property.repositoryUrl">repositoryUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories">SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `repositoryUrlInput`<sup>Optional</sup> <a name="repositoryUrlInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.property.repositoryUrlInput"></a>

```java
public java.lang.String getRepositoryUrlInput();
```

- *Type:* java.lang.String

---

##### `repositoryUrl`<sup>Required</sup> <a name="repositoryUrl" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.property.repositoryUrl"></a>

```java
public java.lang.String getRepositoryUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories">SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories</a>

---


### SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList <a name="SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_user_profile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList;

new SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.get"></a>

```java
public SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages">SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages">SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages</a>>

---


### SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference <a name="SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_user_profile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference;

new SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.resetAppImageConfigName">resetAppImageConfigName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.resetImageName">resetImageName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.resetImageVersionNumber">resetImageVersionNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAppImageConfigName` <a name="resetAppImageConfigName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.resetAppImageConfigName"></a>

```java
public void resetAppImageConfigName()
```

##### `resetImageName` <a name="resetImageName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.resetImageName"></a>

```java
public void resetImageName()
```

##### `resetImageVersionNumber` <a name="resetImageVersionNumber" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.resetImageVersionNumber"></a>

```java
public void resetImageVersionNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.property.appImageConfigNameInput">appImageConfigNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.property.imageNameInput">imageNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.property.imageVersionNumberInput">imageVersionNumberInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.property.appImageConfigName">appImageConfigName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.property.imageName">imageName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.property.imageVersionNumber">imageVersionNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages">SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `appImageConfigNameInput`<sup>Optional</sup> <a name="appImageConfigNameInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.property.appImageConfigNameInput"></a>

```java
public java.lang.String getAppImageConfigNameInput();
```

- *Type:* java.lang.String

---

##### `imageNameInput`<sup>Optional</sup> <a name="imageNameInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.property.imageNameInput"></a>

```java
public java.lang.String getImageNameInput();
```

- *Type:* java.lang.String

---

##### `imageVersionNumberInput`<sup>Optional</sup> <a name="imageVersionNumberInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.property.imageVersionNumberInput"></a>

```java
public java.lang.Number getImageVersionNumberInput();
```

- *Type:* java.lang.Number

---

##### `appImageConfigName`<sup>Required</sup> <a name="appImageConfigName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.property.appImageConfigName"></a>

```java
public java.lang.String getAppImageConfigName();
```

- *Type:* java.lang.String

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.property.imageName"></a>

```java
public java.lang.String getImageName();
```

- *Type:* java.lang.String

---

##### `imageVersionNumber`<sup>Required</sup> <a name="imageVersionNumber" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.property.imageVersionNumber"></a>

```java
public java.lang.Number getImageVersionNumber();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages">SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages</a>

---


### SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference <a name="SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_user_profile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference;

new SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetInstanceType">resetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn">resetLifecycleConfigArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageArn">resetSageMakerImageArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageVersionArn">resetSageMakerImageVersionArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetTrainingPlanArn">resetTrainingPlanArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInstanceType` <a name="resetInstanceType" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetInstanceType"></a>

```java
public void resetInstanceType()
```

##### `resetLifecycleConfigArn` <a name="resetLifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn"></a>

```java
public void resetLifecycleConfigArn()
```

##### `resetSageMakerImageArn` <a name="resetSageMakerImageArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageArn"></a>

```java
public void resetSageMakerImageArn()
```

##### `resetSageMakerImageVersionArn` <a name="resetSageMakerImageVersionArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageVersionArn"></a>

```java
public void resetSageMakerImageVersionArn()
```

##### `resetTrainingPlanArn` <a name="resetTrainingPlanArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetTrainingPlanArn"></a>

```java
public void resetTrainingPlanArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput">lifecycleConfigArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArnInput">sageMakerImageArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArnInput">sageMakerImageVersionArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.trainingPlanArnInput">trainingPlanArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn">lifecycleConfigArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArn">sageMakerImageArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArn">sageMakerImageVersionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.trainingPlanArn">trainingPlanArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput"></a>

```java
public java.lang.String getInstanceTypeInput();
```

- *Type:* java.lang.String

---

##### `lifecycleConfigArnInput`<sup>Optional</sup> <a name="lifecycleConfigArnInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput"></a>

```java
public java.lang.String getLifecycleConfigArnInput();
```

- *Type:* java.lang.String

---

##### `sageMakerImageArnInput`<sup>Optional</sup> <a name="sageMakerImageArnInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArnInput"></a>

```java
public java.lang.String getSageMakerImageArnInput();
```

- *Type:* java.lang.String

---

##### `sageMakerImageVersionArnInput`<sup>Optional</sup> <a name="sageMakerImageVersionArnInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArnInput"></a>

```java
public java.lang.String getSageMakerImageVersionArnInput();
```

- *Type:* java.lang.String

---

##### `trainingPlanArnInput`<sup>Optional</sup> <a name="trainingPlanArnInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.trainingPlanArnInput"></a>

```java
public java.lang.String getTrainingPlanArnInput();
```

- *Type:* java.lang.String

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

---

##### `lifecycleConfigArn`<sup>Required</sup> <a name="lifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn"></a>

```java
public java.lang.String getLifecycleConfigArn();
```

- *Type:* java.lang.String

---

##### `sageMakerImageArn`<sup>Required</sup> <a name="sageMakerImageArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArn"></a>

```java
public java.lang.String getSageMakerImageArn();
```

- *Type:* java.lang.String

---

##### `sageMakerImageVersionArn`<sup>Required</sup> <a name="sageMakerImageVersionArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArn"></a>

```java
public java.lang.String getSageMakerImageVersionArn();
```

- *Type:* java.lang.String

---

##### `trainingPlanArn`<sup>Required</sup> <a name="trainingPlanArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.trainingPlanArn"></a>

```java
public java.lang.String getTrainingPlanArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec</a>

---


### SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference <a name="SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_user_profile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference;

new SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.resetAssumableRoleArns">resetAssumableRoleArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.resetExecutionRoleArns">resetExecutionRoleArns</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAssumableRoleArns` <a name="resetAssumableRoleArns" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.resetAssumableRoleArns"></a>

```java
public void resetAssumableRoleArns()
```

##### `resetExecutionRoleArns` <a name="resetExecutionRoleArns" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.resetExecutionRoleArns"></a>

```java
public void resetExecutionRoleArns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.property.assumableRoleArnsInput">assumableRoleArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.property.executionRoleArnsInput">executionRoleArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.property.assumableRoleArns">assumableRoleArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.property.executionRoleArns">executionRoleArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings">SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `assumableRoleArnsInput`<sup>Optional</sup> <a name="assumableRoleArnsInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.property.assumableRoleArnsInput"></a>

```java
public java.util.List<java.lang.String> getAssumableRoleArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `executionRoleArnsInput`<sup>Optional</sup> <a name="executionRoleArnsInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.property.executionRoleArnsInput"></a>

```java
public java.util.List<java.lang.String> getExecutionRoleArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `assumableRoleArns`<sup>Required</sup> <a name="assumableRoleArns" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.property.assumableRoleArns"></a>

```java
public java.util.List<java.lang.String> getAssumableRoleArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `executionRoleArns`<sup>Required</sup> <a name="executionRoleArns" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.property.executionRoleArns"></a>

```java
public java.util.List<java.lang.String> getExecutionRoleArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings">SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings</a>

---


### SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference <a name="SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_user_profile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference;

new SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.putAppLifecycleManagement">putAppLifecycleManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.putCodeRepositories">putCodeRepositories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.putCustomImages">putCustomImages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.putDefaultResourceSpec">putDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.putEmrSettings">putEmrSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.resetAppLifecycleManagement">resetAppLifecycleManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.resetBuiltInLifecycleConfigArn">resetBuiltInLifecycleConfigArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.resetCodeRepositories">resetCodeRepositories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.resetCustomImages">resetCustomImages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.resetDefaultResourceSpec">resetDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.resetEmrSettings">resetEmrSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.resetLifecycleConfigArns">resetLifecycleConfigArns</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAppLifecycleManagement` <a name="putAppLifecycleManagement" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.putAppLifecycleManagement"></a>

```java
public void putAppLifecycleManagement(SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.putAppLifecycleManagement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement">SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement</a>

---

##### `putCodeRepositories` <a name="putCodeRepositories" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.putCodeRepositories"></a>

```java
public void putCodeRepositories(IResolvable|java.util.List<SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.putCodeRepositories.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories">SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories</a>>

---

##### `putCustomImages` <a name="putCustomImages" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.putCustomImages"></a>

```java
public void putCustomImages(IResolvable|java.util.List<SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.putCustomImages.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages">SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages</a>>

---

##### `putDefaultResourceSpec` <a name="putDefaultResourceSpec" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.putDefaultResourceSpec"></a>

```java
public void putDefaultResourceSpec(SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.putDefaultResourceSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec</a>

---

##### `putEmrSettings` <a name="putEmrSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.putEmrSettings"></a>

```java
public void putEmrSettings(SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.putEmrSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings">SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings</a>

---

##### `resetAppLifecycleManagement` <a name="resetAppLifecycleManagement" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.resetAppLifecycleManagement"></a>

```java
public void resetAppLifecycleManagement()
```

##### `resetBuiltInLifecycleConfigArn` <a name="resetBuiltInLifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.resetBuiltInLifecycleConfigArn"></a>

```java
public void resetBuiltInLifecycleConfigArn()
```

##### `resetCodeRepositories` <a name="resetCodeRepositories" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.resetCodeRepositories"></a>

```java
public void resetCodeRepositories()
```

##### `resetCustomImages` <a name="resetCustomImages" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.resetCustomImages"></a>

```java
public void resetCustomImages()
```

##### `resetDefaultResourceSpec` <a name="resetDefaultResourceSpec" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.resetDefaultResourceSpec"></a>

```java
public void resetDefaultResourceSpec()
```

##### `resetEmrSettings` <a name="resetEmrSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.resetEmrSettings"></a>

```java
public void resetEmrSettings()
```

##### `resetLifecycleConfigArns` <a name="resetLifecycleConfigArns" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.resetLifecycleConfigArns"></a>

```java
public void resetLifecycleConfigArns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.appLifecycleManagement">appLifecycleManagement</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference">SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.codeRepositories">codeRepositories</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList">SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.customImages">customImages</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList">SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.defaultResourceSpec">defaultResourceSpec</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference">SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.emrSettings">emrSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference">SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.appLifecycleManagementInput">appLifecycleManagementInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement">SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.builtInLifecycleConfigArnInput">builtInLifecycleConfigArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.codeRepositoriesInput">codeRepositoriesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories">SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.customImagesInput">customImagesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages">SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.defaultResourceSpecInput">defaultResourceSpecInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.emrSettingsInput">emrSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings">SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.lifecycleConfigArnsInput">lifecycleConfigArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.builtInLifecycleConfigArn">builtInLifecycleConfigArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.lifecycleConfigArns">lifecycleConfigArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings">SagemakerUserProfileUserSettingsJupyterLabAppSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `appLifecycleManagement`<sup>Required</sup> <a name="appLifecycleManagement" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.appLifecycleManagement"></a>

```java
public SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference getAppLifecycleManagement();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference">SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference</a>

---

##### `codeRepositories`<sup>Required</sup> <a name="codeRepositories" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.codeRepositories"></a>

```java
public SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList getCodeRepositories();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList">SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList</a>

---

##### `customImages`<sup>Required</sup> <a name="customImages" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.customImages"></a>

```java
public SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList getCustomImages();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList">SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList</a>

---

##### `defaultResourceSpec`<sup>Required</sup> <a name="defaultResourceSpec" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.defaultResourceSpec"></a>

```java
public SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference getDefaultResourceSpec();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference">SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference</a>

---

##### `emrSettings`<sup>Required</sup> <a name="emrSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.emrSettings"></a>

```java
public SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference getEmrSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference">SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference</a>

---

##### `appLifecycleManagementInput`<sup>Optional</sup> <a name="appLifecycleManagementInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.appLifecycleManagementInput"></a>

```java
public IResolvable|SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement getAppLifecycleManagementInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement">SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement</a>

---

##### `builtInLifecycleConfigArnInput`<sup>Optional</sup> <a name="builtInLifecycleConfigArnInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.builtInLifecycleConfigArnInput"></a>

```java
public java.lang.String getBuiltInLifecycleConfigArnInput();
```

- *Type:* java.lang.String

---

##### `codeRepositoriesInput`<sup>Optional</sup> <a name="codeRepositoriesInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.codeRepositoriesInput"></a>

```java
public IResolvable|java.util.List<SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories> getCodeRepositoriesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories">SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories</a>>

---

##### `customImagesInput`<sup>Optional</sup> <a name="customImagesInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.customImagesInput"></a>

```java
public IResolvable|java.util.List<SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages> getCustomImagesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages">SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages</a>>

---

##### `defaultResourceSpecInput`<sup>Optional</sup> <a name="defaultResourceSpecInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.defaultResourceSpecInput"></a>

```java
public IResolvable|SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec getDefaultResourceSpecInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec</a>

---

##### `emrSettingsInput`<sup>Optional</sup> <a name="emrSettingsInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.emrSettingsInput"></a>

```java
public IResolvable|SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings getEmrSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings">SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings</a>

---

##### `lifecycleConfigArnsInput`<sup>Optional</sup> <a name="lifecycleConfigArnsInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.lifecycleConfigArnsInput"></a>

```java
public java.util.List<java.lang.String> getLifecycleConfigArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `builtInLifecycleConfigArn`<sup>Required</sup> <a name="builtInLifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.builtInLifecycleConfigArn"></a>

```java
public java.lang.String getBuiltInLifecycleConfigArn();
```

- *Type:* java.lang.String

---

##### `lifecycleConfigArns`<sup>Required</sup> <a name="lifecycleConfigArns" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.lifecycleConfigArns"></a>

```java
public java.util.List<java.lang.String> getLifecycleConfigArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerUserProfileUserSettingsJupyterLabAppSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings">SagemakerUserProfileUserSettingsJupyterLabAppSettings</a>

---


### SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference <a name="SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_user_profile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference;

new SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetInstanceType">resetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn">resetLifecycleConfigArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageArn">resetSageMakerImageArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageVersionArn">resetSageMakerImageVersionArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetTrainingPlanArn">resetTrainingPlanArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInstanceType` <a name="resetInstanceType" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetInstanceType"></a>

```java
public void resetInstanceType()
```

##### `resetLifecycleConfigArn` <a name="resetLifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn"></a>

```java
public void resetLifecycleConfigArn()
```

##### `resetSageMakerImageArn` <a name="resetSageMakerImageArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageArn"></a>

```java
public void resetSageMakerImageArn()
```

##### `resetSageMakerImageVersionArn` <a name="resetSageMakerImageVersionArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageVersionArn"></a>

```java
public void resetSageMakerImageVersionArn()
```

##### `resetTrainingPlanArn` <a name="resetTrainingPlanArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetTrainingPlanArn"></a>

```java
public void resetTrainingPlanArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput">lifecycleConfigArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArnInput">sageMakerImageArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArnInput">sageMakerImageVersionArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.trainingPlanArnInput">trainingPlanArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn">lifecycleConfigArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArn">sageMakerImageArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArn">sageMakerImageVersionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.trainingPlanArn">trainingPlanArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput"></a>

```java
public java.lang.String getInstanceTypeInput();
```

- *Type:* java.lang.String

---

##### `lifecycleConfigArnInput`<sup>Optional</sup> <a name="lifecycleConfigArnInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput"></a>

```java
public java.lang.String getLifecycleConfigArnInput();
```

- *Type:* java.lang.String

---

##### `sageMakerImageArnInput`<sup>Optional</sup> <a name="sageMakerImageArnInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArnInput"></a>

```java
public java.lang.String getSageMakerImageArnInput();
```

- *Type:* java.lang.String

---

##### `sageMakerImageVersionArnInput`<sup>Optional</sup> <a name="sageMakerImageVersionArnInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArnInput"></a>

```java
public java.lang.String getSageMakerImageVersionArnInput();
```

- *Type:* java.lang.String

---

##### `trainingPlanArnInput`<sup>Optional</sup> <a name="trainingPlanArnInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.trainingPlanArnInput"></a>

```java
public java.lang.String getTrainingPlanArnInput();
```

- *Type:* java.lang.String

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

---

##### `lifecycleConfigArn`<sup>Required</sup> <a name="lifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn"></a>

```java
public java.lang.String getLifecycleConfigArn();
```

- *Type:* java.lang.String

---

##### `sageMakerImageArn`<sup>Required</sup> <a name="sageMakerImageArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArn"></a>

```java
public java.lang.String getSageMakerImageArn();
```

- *Type:* java.lang.String

---

##### `sageMakerImageVersionArn`<sup>Required</sup> <a name="sageMakerImageVersionArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArn"></a>

```java
public java.lang.String getSageMakerImageVersionArn();
```

- *Type:* java.lang.String

---

##### `trainingPlanArn`<sup>Required</sup> <a name="trainingPlanArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.trainingPlanArn"></a>

```java
public java.lang.String getTrainingPlanArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec</a>

---


### SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference <a name="SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_user_profile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference;

new SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.putDefaultResourceSpec">putDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.resetDefaultResourceSpec">resetDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.resetLifecycleConfigArns">resetLifecycleConfigArns</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDefaultResourceSpec` <a name="putDefaultResourceSpec" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.putDefaultResourceSpec"></a>

```java
public void putDefaultResourceSpec(SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.putDefaultResourceSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec</a>

---

##### `resetDefaultResourceSpec` <a name="resetDefaultResourceSpec" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.resetDefaultResourceSpec"></a>

```java
public void resetDefaultResourceSpec()
```

##### `resetLifecycleConfigArns` <a name="resetLifecycleConfigArns" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.resetLifecycleConfigArns"></a>

```java
public void resetLifecycleConfigArns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.defaultResourceSpec">defaultResourceSpec</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference">SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.defaultResourceSpecInput">defaultResourceSpecInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.lifecycleConfigArnsInput">lifecycleConfigArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.lifecycleConfigArns">lifecycleConfigArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettings">SagemakerUserProfileUserSettingsJupyterServerAppSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultResourceSpec`<sup>Required</sup> <a name="defaultResourceSpec" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.defaultResourceSpec"></a>

```java
public SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference getDefaultResourceSpec();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference">SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference</a>

---

##### `defaultResourceSpecInput`<sup>Optional</sup> <a name="defaultResourceSpecInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.defaultResourceSpecInput"></a>

```java
public IResolvable|SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec getDefaultResourceSpecInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec</a>

---

##### `lifecycleConfigArnsInput`<sup>Optional</sup> <a name="lifecycleConfigArnsInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.lifecycleConfigArnsInput"></a>

```java
public java.util.List<java.lang.String> getLifecycleConfigArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `lifecycleConfigArns`<sup>Required</sup> <a name="lifecycleConfigArns" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.lifecycleConfigArns"></a>

```java
public java.util.List<java.lang.String> getLifecycleConfigArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerUserProfileUserSettingsJupyterServerAppSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettings">SagemakerUserProfileUserSettingsJupyterServerAppSettings</a>

---


### SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList <a name="SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_user_profile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList;

new SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.get"></a>

```java
public SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages</a>>

---


### SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference <a name="SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_user_profile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference;

new SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.resetAppImageConfigName">resetAppImageConfigName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.resetImageName">resetImageName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.resetImageVersionNumber">resetImageVersionNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAppImageConfigName` <a name="resetAppImageConfigName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.resetAppImageConfigName"></a>

```java
public void resetAppImageConfigName()
```

##### `resetImageName` <a name="resetImageName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.resetImageName"></a>

```java
public void resetImageName()
```

##### `resetImageVersionNumber` <a name="resetImageVersionNumber" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.resetImageVersionNumber"></a>

```java
public void resetImageVersionNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.appImageConfigNameInput">appImageConfigNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.imageNameInput">imageNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.imageVersionNumberInput">imageVersionNumberInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.appImageConfigName">appImageConfigName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.imageName">imageName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.imageVersionNumber">imageVersionNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `appImageConfigNameInput`<sup>Optional</sup> <a name="appImageConfigNameInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.appImageConfigNameInput"></a>

```java
public java.lang.String getAppImageConfigNameInput();
```

- *Type:* java.lang.String

---

##### `imageNameInput`<sup>Optional</sup> <a name="imageNameInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.imageNameInput"></a>

```java
public java.lang.String getImageNameInput();
```

- *Type:* java.lang.String

---

##### `imageVersionNumberInput`<sup>Optional</sup> <a name="imageVersionNumberInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.imageVersionNumberInput"></a>

```java
public java.lang.Number getImageVersionNumberInput();
```

- *Type:* java.lang.Number

---

##### `appImageConfigName`<sup>Required</sup> <a name="appImageConfigName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.appImageConfigName"></a>

```java
public java.lang.String getAppImageConfigName();
```

- *Type:* java.lang.String

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.imageName"></a>

```java
public java.lang.String getImageName();
```

- *Type:* java.lang.String

---

##### `imageVersionNumber`<sup>Required</sup> <a name="imageVersionNumber" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.imageVersionNumber"></a>

```java
public java.lang.Number getImageVersionNumber();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages</a>

---


### SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference <a name="SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_user_profile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference;

new SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetInstanceType">resetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn">resetLifecycleConfigArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageArn">resetSageMakerImageArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageVersionArn">resetSageMakerImageVersionArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetTrainingPlanArn">resetTrainingPlanArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInstanceType` <a name="resetInstanceType" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetInstanceType"></a>

```java
public void resetInstanceType()
```

##### `resetLifecycleConfigArn` <a name="resetLifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn"></a>

```java
public void resetLifecycleConfigArn()
```

##### `resetSageMakerImageArn` <a name="resetSageMakerImageArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageArn"></a>

```java
public void resetSageMakerImageArn()
```

##### `resetSageMakerImageVersionArn` <a name="resetSageMakerImageVersionArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageVersionArn"></a>

```java
public void resetSageMakerImageVersionArn()
```

##### `resetTrainingPlanArn` <a name="resetTrainingPlanArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetTrainingPlanArn"></a>

```java
public void resetTrainingPlanArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput">lifecycleConfigArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArnInput">sageMakerImageArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArnInput">sageMakerImageVersionArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.trainingPlanArnInput">trainingPlanArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn">lifecycleConfigArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArn">sageMakerImageArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArn">sageMakerImageVersionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.trainingPlanArn">trainingPlanArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput"></a>

```java
public java.lang.String getInstanceTypeInput();
```

- *Type:* java.lang.String

---

##### `lifecycleConfigArnInput`<sup>Optional</sup> <a name="lifecycleConfigArnInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput"></a>

```java
public java.lang.String getLifecycleConfigArnInput();
```

- *Type:* java.lang.String

---

##### `sageMakerImageArnInput`<sup>Optional</sup> <a name="sageMakerImageArnInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArnInput"></a>

```java
public java.lang.String getSageMakerImageArnInput();
```

- *Type:* java.lang.String

---

##### `sageMakerImageVersionArnInput`<sup>Optional</sup> <a name="sageMakerImageVersionArnInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArnInput"></a>

```java
public java.lang.String getSageMakerImageVersionArnInput();
```

- *Type:* java.lang.String

---

##### `trainingPlanArnInput`<sup>Optional</sup> <a name="trainingPlanArnInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.trainingPlanArnInput"></a>

```java
public java.lang.String getTrainingPlanArnInput();
```

- *Type:* java.lang.String

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

---

##### `lifecycleConfigArn`<sup>Required</sup> <a name="lifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn"></a>

```java
public java.lang.String getLifecycleConfigArn();
```

- *Type:* java.lang.String

---

##### `sageMakerImageArn`<sup>Required</sup> <a name="sageMakerImageArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArn"></a>

```java
public java.lang.String getSageMakerImageArn();
```

- *Type:* java.lang.String

---

##### `sageMakerImageVersionArn`<sup>Required</sup> <a name="sageMakerImageVersionArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArn"></a>

```java
public java.lang.String getSageMakerImageVersionArn();
```

- *Type:* java.lang.String

---

##### `trainingPlanArn`<sup>Required</sup> <a name="trainingPlanArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.trainingPlanArn"></a>

```java
public java.lang.String getTrainingPlanArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec</a>

---


### SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference <a name="SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_user_profile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference;

new SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.putCustomImages">putCustomImages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.putDefaultResourceSpec">putDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.resetCustomImages">resetCustomImages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.resetDefaultResourceSpec">resetDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.resetLifecycleConfigArns">resetLifecycleConfigArns</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomImages` <a name="putCustomImages" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.putCustomImages"></a>

```java
public void putCustomImages(IResolvable|java.util.List<SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.putCustomImages.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages</a>>

---

##### `putDefaultResourceSpec` <a name="putDefaultResourceSpec" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.putDefaultResourceSpec"></a>

```java
public void putDefaultResourceSpec(SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.putDefaultResourceSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec</a>

---

##### `resetCustomImages` <a name="resetCustomImages" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.resetCustomImages"></a>

```java
public void resetCustomImages()
```

##### `resetDefaultResourceSpec` <a name="resetDefaultResourceSpec" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.resetDefaultResourceSpec"></a>

```java
public void resetDefaultResourceSpec()
```

##### `resetLifecycleConfigArns` <a name="resetLifecycleConfigArns" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.resetLifecycleConfigArns"></a>

```java
public void resetLifecycleConfigArns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.customImages">customImages</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.defaultResourceSpec">defaultResourceSpec</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.customImagesInput">customImagesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.defaultResourceSpecInput">defaultResourceSpecInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.lifecycleConfigArnsInput">lifecycleConfigArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.lifecycleConfigArns">lifecycleConfigArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings">SagemakerUserProfileUserSettingsKernelGatewayAppSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customImages`<sup>Required</sup> <a name="customImages" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.customImages"></a>

```java
public SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList getCustomImages();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList</a>

---

##### `defaultResourceSpec`<sup>Required</sup> <a name="defaultResourceSpec" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.defaultResourceSpec"></a>

```java
public SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference getDefaultResourceSpec();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference</a>

---

##### `customImagesInput`<sup>Optional</sup> <a name="customImagesInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.customImagesInput"></a>

```java
public IResolvable|java.util.List<SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages> getCustomImagesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages</a>>

---

##### `defaultResourceSpecInput`<sup>Optional</sup> <a name="defaultResourceSpecInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.defaultResourceSpecInput"></a>

```java
public IResolvable|SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec getDefaultResourceSpecInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec</a>

---

##### `lifecycleConfigArnsInput`<sup>Optional</sup> <a name="lifecycleConfigArnsInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.lifecycleConfigArnsInput"></a>

```java
public java.util.List<java.lang.String> getLifecycleConfigArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `lifecycleConfigArns`<sup>Required</sup> <a name="lifecycleConfigArns" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.lifecycleConfigArns"></a>

```java
public java.util.List<java.lang.String> getLifecycleConfigArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerUserProfileUserSettingsKernelGatewayAppSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings">SagemakerUserProfileUserSettingsKernelGatewayAppSettings</a>

---


### SagemakerUserProfileUserSettingsOutputReference <a name="SagemakerUserProfileUserSettingsOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_user_profile.SagemakerUserProfileUserSettingsOutputReference;

new SagemakerUserProfileUserSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putCodeEditorAppSettings">putCodeEditorAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putCustomFileSystemConfigs">putCustomFileSystemConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putCustomPosixUserConfig">putCustomPosixUserConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putJupyterLabAppSettings">putJupyterLabAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putJupyterServerAppSettings">putJupyterServerAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putKernelGatewayAppSettings">putKernelGatewayAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putRStudioServerProAppSettings">putRStudioServerProAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putSharingSettings">putSharingSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putSpaceStorageSettings">putSpaceStorageSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putStudioWebPortalSettings">putStudioWebPortalSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetAutoMountHomeEfs">resetAutoMountHomeEfs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetCodeEditorAppSettings">resetCodeEditorAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetCustomFileSystemConfigs">resetCustomFileSystemConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetCustomPosixUserConfig">resetCustomPosixUserConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetDefaultLandingUri">resetDefaultLandingUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetExecutionRole">resetExecutionRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetJupyterLabAppSettings">resetJupyterLabAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetJupyterServerAppSettings">resetJupyterServerAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetKernelGatewayAppSettings">resetKernelGatewayAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetRStudioServerProAppSettings">resetRStudioServerProAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetSecurityGroups">resetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetSharingSettings">resetSharingSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetSpaceStorageSettings">resetSpaceStorageSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetStudioWebPortal">resetStudioWebPortal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetStudioWebPortalSettings">resetStudioWebPortalSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCodeEditorAppSettings` <a name="putCodeEditorAppSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putCodeEditorAppSettings"></a>

```java
public void putCodeEditorAppSettings(SagemakerUserProfileUserSettingsCodeEditorAppSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putCodeEditorAppSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettings">SagemakerUserProfileUserSettingsCodeEditorAppSettings</a>

---

##### `putCustomFileSystemConfigs` <a name="putCustomFileSystemConfigs" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putCustomFileSystemConfigs"></a>

```java
public void putCustomFileSystemConfigs(IResolvable|java.util.List<SagemakerUserProfileUserSettingsCustomFileSystemConfigs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putCustomFileSystemConfigs.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigs">SagemakerUserProfileUserSettingsCustomFileSystemConfigs</a>>

---

##### `putCustomPosixUserConfig` <a name="putCustomPosixUserConfig" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putCustomPosixUserConfig"></a>

```java
public void putCustomPosixUserConfig(SagemakerUserProfileUserSettingsCustomPosixUserConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putCustomPosixUserConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfig">SagemakerUserProfileUserSettingsCustomPosixUserConfig</a>

---

##### `putJupyterLabAppSettings` <a name="putJupyterLabAppSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putJupyterLabAppSettings"></a>

```java
public void putJupyterLabAppSettings(SagemakerUserProfileUserSettingsJupyterLabAppSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putJupyterLabAppSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings">SagemakerUserProfileUserSettingsJupyterLabAppSettings</a>

---

##### `putJupyterServerAppSettings` <a name="putJupyterServerAppSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putJupyterServerAppSettings"></a>

```java
public void putJupyterServerAppSettings(SagemakerUserProfileUserSettingsJupyterServerAppSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putJupyterServerAppSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettings">SagemakerUserProfileUserSettingsJupyterServerAppSettings</a>

---

##### `putKernelGatewayAppSettings` <a name="putKernelGatewayAppSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putKernelGatewayAppSettings"></a>

```java
public void putKernelGatewayAppSettings(SagemakerUserProfileUserSettingsKernelGatewayAppSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putKernelGatewayAppSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings">SagemakerUserProfileUserSettingsKernelGatewayAppSettings</a>

---

##### `putRStudioServerProAppSettings` <a name="putRStudioServerProAppSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putRStudioServerProAppSettings"></a>

```java
public void putRStudioServerProAppSettings(SagemakerUserProfileUserSettingsRStudioServerProAppSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putRStudioServerProAppSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettings">SagemakerUserProfileUserSettingsRStudioServerProAppSettings</a>

---

##### `putSharingSettings` <a name="putSharingSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putSharingSettings"></a>

```java
public void putSharingSettings(SagemakerUserProfileUserSettingsSharingSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putSharingSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettings">SagemakerUserProfileUserSettingsSharingSettings</a>

---

##### `putSpaceStorageSettings` <a name="putSpaceStorageSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putSpaceStorageSettings"></a>

```java
public void putSpaceStorageSettings(SagemakerUserProfileUserSettingsSpaceStorageSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putSpaceStorageSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettings">SagemakerUserProfileUserSettingsSpaceStorageSettings</a>

---

##### `putStudioWebPortalSettings` <a name="putStudioWebPortalSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putStudioWebPortalSettings"></a>

```java
public void putStudioWebPortalSettings(SagemakerUserProfileUserSettingsStudioWebPortalSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putStudioWebPortalSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettings">SagemakerUserProfileUserSettingsStudioWebPortalSettings</a>

---

##### `resetAutoMountHomeEfs` <a name="resetAutoMountHomeEfs" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetAutoMountHomeEfs"></a>

```java
public void resetAutoMountHomeEfs()
```

##### `resetCodeEditorAppSettings` <a name="resetCodeEditorAppSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetCodeEditorAppSettings"></a>

```java
public void resetCodeEditorAppSettings()
```

##### `resetCustomFileSystemConfigs` <a name="resetCustomFileSystemConfigs" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetCustomFileSystemConfigs"></a>

```java
public void resetCustomFileSystemConfigs()
```

##### `resetCustomPosixUserConfig` <a name="resetCustomPosixUserConfig" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetCustomPosixUserConfig"></a>

```java
public void resetCustomPosixUserConfig()
```

##### `resetDefaultLandingUri` <a name="resetDefaultLandingUri" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetDefaultLandingUri"></a>

```java
public void resetDefaultLandingUri()
```

##### `resetExecutionRole` <a name="resetExecutionRole" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetExecutionRole"></a>

```java
public void resetExecutionRole()
```

##### `resetJupyterLabAppSettings` <a name="resetJupyterLabAppSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetJupyterLabAppSettings"></a>

```java
public void resetJupyterLabAppSettings()
```

##### `resetJupyterServerAppSettings` <a name="resetJupyterServerAppSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetJupyterServerAppSettings"></a>

```java
public void resetJupyterServerAppSettings()
```

##### `resetKernelGatewayAppSettings` <a name="resetKernelGatewayAppSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetKernelGatewayAppSettings"></a>

```java
public void resetKernelGatewayAppSettings()
```

##### `resetRStudioServerProAppSettings` <a name="resetRStudioServerProAppSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetRStudioServerProAppSettings"></a>

```java
public void resetRStudioServerProAppSettings()
```

##### `resetSecurityGroups` <a name="resetSecurityGroups" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetSecurityGroups"></a>

```java
public void resetSecurityGroups()
```

##### `resetSharingSettings` <a name="resetSharingSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetSharingSettings"></a>

```java
public void resetSharingSettings()
```

##### `resetSpaceStorageSettings` <a name="resetSpaceStorageSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetSpaceStorageSettings"></a>

```java
public void resetSpaceStorageSettings()
```

##### `resetStudioWebPortal` <a name="resetStudioWebPortal" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetStudioWebPortal"></a>

```java
public void resetStudioWebPortal()
```

##### `resetStudioWebPortalSettings` <a name="resetStudioWebPortalSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetStudioWebPortalSettings"></a>

```java
public void resetStudioWebPortalSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.codeEditorAppSettings">codeEditorAppSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference">SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.customFileSystemConfigs">customFileSystemConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList">SagemakerUserProfileUserSettingsCustomFileSystemConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.customPosixUserConfig">customPosixUserConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference">SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.jupyterLabAppSettings">jupyterLabAppSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference">SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.jupyterServerAppSettings">jupyterServerAppSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference">SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.kernelGatewayAppSettings">kernelGatewayAppSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.rStudioServerProAppSettings">rStudioServerProAppSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference">SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.sharingSettings">sharingSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference">SagemakerUserProfileUserSettingsSharingSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.spaceStorageSettings">spaceStorageSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference">SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.studioWebPortalSettings">studioWebPortalSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference">SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.autoMountHomeEfsInput">autoMountHomeEfsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.codeEditorAppSettingsInput">codeEditorAppSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettings">SagemakerUserProfileUserSettingsCodeEditorAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.customFileSystemConfigsInput">customFileSystemConfigsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigs">SagemakerUserProfileUserSettingsCustomFileSystemConfigs</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.customPosixUserConfigInput">customPosixUserConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfig">SagemakerUserProfileUserSettingsCustomPosixUserConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.defaultLandingUriInput">defaultLandingUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.executionRoleInput">executionRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.jupyterLabAppSettingsInput">jupyterLabAppSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings">SagemakerUserProfileUserSettingsJupyterLabAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.jupyterServerAppSettingsInput">jupyterServerAppSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettings">SagemakerUserProfileUserSettingsJupyterServerAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.kernelGatewayAppSettingsInput">kernelGatewayAppSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings">SagemakerUserProfileUserSettingsKernelGatewayAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.rStudioServerProAppSettingsInput">rStudioServerProAppSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettings">SagemakerUserProfileUserSettingsRStudioServerProAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.securityGroupsInput">securityGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.sharingSettingsInput">sharingSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettings">SagemakerUserProfileUserSettingsSharingSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.spaceStorageSettingsInput">spaceStorageSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettings">SagemakerUserProfileUserSettingsSpaceStorageSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.studioWebPortalInput">studioWebPortalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.studioWebPortalSettingsInput">studioWebPortalSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettings">SagemakerUserProfileUserSettingsStudioWebPortalSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.autoMountHomeEfs">autoMountHomeEfs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.defaultLandingUri">defaultLandingUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.executionRole">executionRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.studioWebPortal">studioWebPortal</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings">SagemakerUserProfileUserSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `codeEditorAppSettings`<sup>Required</sup> <a name="codeEditorAppSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.codeEditorAppSettings"></a>

```java
public SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference getCodeEditorAppSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference">SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference</a>

---

##### `customFileSystemConfigs`<sup>Required</sup> <a name="customFileSystemConfigs" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.customFileSystemConfigs"></a>

```java
public SagemakerUserProfileUserSettingsCustomFileSystemConfigsList getCustomFileSystemConfigs();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList">SagemakerUserProfileUserSettingsCustomFileSystemConfigsList</a>

---

##### `customPosixUserConfig`<sup>Required</sup> <a name="customPosixUserConfig" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.customPosixUserConfig"></a>

```java
public SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference getCustomPosixUserConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference">SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference</a>

---

##### `jupyterLabAppSettings`<sup>Required</sup> <a name="jupyterLabAppSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.jupyterLabAppSettings"></a>

```java
public SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference getJupyterLabAppSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference">SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference</a>

---

##### `jupyterServerAppSettings`<sup>Required</sup> <a name="jupyterServerAppSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.jupyterServerAppSettings"></a>

```java
public SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference getJupyterServerAppSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference">SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference</a>

---

##### `kernelGatewayAppSettings`<sup>Required</sup> <a name="kernelGatewayAppSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.kernelGatewayAppSettings"></a>

```java
public SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference getKernelGatewayAppSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference</a>

---

##### `rStudioServerProAppSettings`<sup>Required</sup> <a name="rStudioServerProAppSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.rStudioServerProAppSettings"></a>

```java
public SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference getRStudioServerProAppSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference">SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference</a>

---

##### `sharingSettings`<sup>Required</sup> <a name="sharingSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.sharingSettings"></a>

```java
public SagemakerUserProfileUserSettingsSharingSettingsOutputReference getSharingSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference">SagemakerUserProfileUserSettingsSharingSettingsOutputReference</a>

---

##### `spaceStorageSettings`<sup>Required</sup> <a name="spaceStorageSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.spaceStorageSettings"></a>

```java
public SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference getSpaceStorageSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference">SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference</a>

---

##### `studioWebPortalSettings`<sup>Required</sup> <a name="studioWebPortalSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.studioWebPortalSettings"></a>

```java
public SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference getStudioWebPortalSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference">SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference</a>

---

##### `autoMountHomeEfsInput`<sup>Optional</sup> <a name="autoMountHomeEfsInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.autoMountHomeEfsInput"></a>

```java
public java.lang.String getAutoMountHomeEfsInput();
```

- *Type:* java.lang.String

---

##### `codeEditorAppSettingsInput`<sup>Optional</sup> <a name="codeEditorAppSettingsInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.codeEditorAppSettingsInput"></a>

```java
public IResolvable|SagemakerUserProfileUserSettingsCodeEditorAppSettings getCodeEditorAppSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettings">SagemakerUserProfileUserSettingsCodeEditorAppSettings</a>

---

##### `customFileSystemConfigsInput`<sup>Optional</sup> <a name="customFileSystemConfigsInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.customFileSystemConfigsInput"></a>

```java
public IResolvable|java.util.List<SagemakerUserProfileUserSettingsCustomFileSystemConfigs> getCustomFileSystemConfigsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigs">SagemakerUserProfileUserSettingsCustomFileSystemConfigs</a>>

---

##### `customPosixUserConfigInput`<sup>Optional</sup> <a name="customPosixUserConfigInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.customPosixUserConfigInput"></a>

```java
public IResolvable|SagemakerUserProfileUserSettingsCustomPosixUserConfig getCustomPosixUserConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfig">SagemakerUserProfileUserSettingsCustomPosixUserConfig</a>

---

##### `defaultLandingUriInput`<sup>Optional</sup> <a name="defaultLandingUriInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.defaultLandingUriInput"></a>

```java
public java.lang.String getDefaultLandingUriInput();
```

- *Type:* java.lang.String

---

##### `executionRoleInput`<sup>Optional</sup> <a name="executionRoleInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.executionRoleInput"></a>

```java
public java.lang.String getExecutionRoleInput();
```

- *Type:* java.lang.String

---

##### `jupyterLabAppSettingsInput`<sup>Optional</sup> <a name="jupyterLabAppSettingsInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.jupyterLabAppSettingsInput"></a>

```java
public IResolvable|SagemakerUserProfileUserSettingsJupyterLabAppSettings getJupyterLabAppSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings">SagemakerUserProfileUserSettingsJupyterLabAppSettings</a>

---

##### `jupyterServerAppSettingsInput`<sup>Optional</sup> <a name="jupyterServerAppSettingsInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.jupyterServerAppSettingsInput"></a>

```java
public IResolvable|SagemakerUserProfileUserSettingsJupyterServerAppSettings getJupyterServerAppSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettings">SagemakerUserProfileUserSettingsJupyterServerAppSettings</a>

---

##### `kernelGatewayAppSettingsInput`<sup>Optional</sup> <a name="kernelGatewayAppSettingsInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.kernelGatewayAppSettingsInput"></a>

```java
public IResolvable|SagemakerUserProfileUserSettingsKernelGatewayAppSettings getKernelGatewayAppSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings">SagemakerUserProfileUserSettingsKernelGatewayAppSettings</a>

---

##### `rStudioServerProAppSettingsInput`<sup>Optional</sup> <a name="rStudioServerProAppSettingsInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.rStudioServerProAppSettingsInput"></a>

```java
public IResolvable|SagemakerUserProfileUserSettingsRStudioServerProAppSettings getRStudioServerProAppSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettings">SagemakerUserProfileUserSettingsRStudioServerProAppSettings</a>

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.securityGroupsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sharingSettingsInput`<sup>Optional</sup> <a name="sharingSettingsInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.sharingSettingsInput"></a>

```java
public IResolvable|SagemakerUserProfileUserSettingsSharingSettings getSharingSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettings">SagemakerUserProfileUserSettingsSharingSettings</a>

---

##### `spaceStorageSettingsInput`<sup>Optional</sup> <a name="spaceStorageSettingsInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.spaceStorageSettingsInput"></a>

```java
public IResolvable|SagemakerUserProfileUserSettingsSpaceStorageSettings getSpaceStorageSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettings">SagemakerUserProfileUserSettingsSpaceStorageSettings</a>

---

##### `studioWebPortalInput`<sup>Optional</sup> <a name="studioWebPortalInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.studioWebPortalInput"></a>

```java
public java.lang.String getStudioWebPortalInput();
```

- *Type:* java.lang.String

---

##### `studioWebPortalSettingsInput`<sup>Optional</sup> <a name="studioWebPortalSettingsInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.studioWebPortalSettingsInput"></a>

```java
public IResolvable|SagemakerUserProfileUserSettingsStudioWebPortalSettings getStudioWebPortalSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettings">SagemakerUserProfileUserSettingsStudioWebPortalSettings</a>

---

##### `autoMountHomeEfs`<sup>Required</sup> <a name="autoMountHomeEfs" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.autoMountHomeEfs"></a>

```java
public java.lang.String getAutoMountHomeEfs();
```

- *Type:* java.lang.String

---

##### `defaultLandingUri`<sup>Required</sup> <a name="defaultLandingUri" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.defaultLandingUri"></a>

```java
public java.lang.String getDefaultLandingUri();
```

- *Type:* java.lang.String

---

##### `executionRole`<sup>Required</sup> <a name="executionRole" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.executionRole"></a>

```java
public java.lang.String getExecutionRole();
```

- *Type:* java.lang.String

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `studioWebPortal`<sup>Required</sup> <a name="studioWebPortal" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.studioWebPortal"></a>

```java
public java.lang.String getStudioWebPortal();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerUserProfileUserSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings">SagemakerUserProfileUserSettings</a>

---


### SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference <a name="SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_user_profile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference;

new SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.resetAccessStatus">resetAccessStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.resetUserGroup">resetUserGroup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessStatus` <a name="resetAccessStatus" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.resetAccessStatus"></a>

```java
public void resetAccessStatus()
```

##### `resetUserGroup` <a name="resetUserGroup" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.resetUserGroup"></a>

```java
public void resetUserGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.property.accessStatusInput">accessStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.property.userGroupInput">userGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.property.accessStatus">accessStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.property.userGroup">userGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettings">SagemakerUserProfileUserSettingsRStudioServerProAppSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessStatusInput`<sup>Optional</sup> <a name="accessStatusInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.property.accessStatusInput"></a>

```java
public java.lang.String getAccessStatusInput();
```

- *Type:* java.lang.String

---

##### `userGroupInput`<sup>Optional</sup> <a name="userGroupInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.property.userGroupInput"></a>

```java
public java.lang.String getUserGroupInput();
```

- *Type:* java.lang.String

---

##### `accessStatus`<sup>Required</sup> <a name="accessStatus" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.property.accessStatus"></a>

```java
public java.lang.String getAccessStatus();
```

- *Type:* java.lang.String

---

##### `userGroup`<sup>Required</sup> <a name="userGroup" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.property.userGroup"></a>

```java
public java.lang.String getUserGroup();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerUserProfileUserSettingsRStudioServerProAppSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettings">SagemakerUserProfileUserSettingsRStudioServerProAppSettings</a>

---


### SagemakerUserProfileUserSettingsSharingSettingsOutputReference <a name="SagemakerUserProfileUserSettingsSharingSettingsOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_user_profile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference;

new SagemakerUserProfileUserSettingsSharingSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.resetNotebookOutputOption">resetNotebookOutputOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.resetS3KmsKeyId">resetS3KmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.resetS3OutputPath">resetS3OutputPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNotebookOutputOption` <a name="resetNotebookOutputOption" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.resetNotebookOutputOption"></a>

```java
public void resetNotebookOutputOption()
```

##### `resetS3KmsKeyId` <a name="resetS3KmsKeyId" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.resetS3KmsKeyId"></a>

```java
public void resetS3KmsKeyId()
```

##### `resetS3OutputPath` <a name="resetS3OutputPath" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.resetS3OutputPath"></a>

```java
public void resetS3OutputPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.notebookOutputOptionInput">notebookOutputOptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.s3KmsKeyIdInput">s3KmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.s3OutputPathInput">s3OutputPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.notebookOutputOption">notebookOutputOption</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.s3KmsKeyId">s3KmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.s3OutputPath">s3OutputPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettings">SagemakerUserProfileUserSettingsSharingSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `notebookOutputOptionInput`<sup>Optional</sup> <a name="notebookOutputOptionInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.notebookOutputOptionInput"></a>

```java
public java.lang.String getNotebookOutputOptionInput();
```

- *Type:* java.lang.String

---

##### `s3KmsKeyIdInput`<sup>Optional</sup> <a name="s3KmsKeyIdInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.s3KmsKeyIdInput"></a>

```java
public java.lang.String getS3KmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `s3OutputPathInput`<sup>Optional</sup> <a name="s3OutputPathInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.s3OutputPathInput"></a>

```java
public java.lang.String getS3OutputPathInput();
```

- *Type:* java.lang.String

---

##### `notebookOutputOption`<sup>Required</sup> <a name="notebookOutputOption" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.notebookOutputOption"></a>

```java
public java.lang.String getNotebookOutputOption();
```

- *Type:* java.lang.String

---

##### `s3KmsKeyId`<sup>Required</sup> <a name="s3KmsKeyId" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.s3KmsKeyId"></a>

```java
public java.lang.String getS3KmsKeyId();
```

- *Type:* java.lang.String

---

##### `s3OutputPath`<sup>Required</sup> <a name="s3OutputPath" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.s3OutputPath"></a>

```java
public java.lang.String getS3OutputPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerUserProfileUserSettingsSharingSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettings">SagemakerUserProfileUserSettingsSharingSettings</a>

---


### SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference <a name="SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_user_profile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference;

new SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.resetDefaultEbsVolumeSizeInGb">resetDefaultEbsVolumeSizeInGb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.resetMaximumEbsVolumeSizeInGb">resetMaximumEbsVolumeSizeInGb</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefaultEbsVolumeSizeInGb` <a name="resetDefaultEbsVolumeSizeInGb" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.resetDefaultEbsVolumeSizeInGb"></a>

```java
public void resetDefaultEbsVolumeSizeInGb()
```

##### `resetMaximumEbsVolumeSizeInGb` <a name="resetMaximumEbsVolumeSizeInGb" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.resetMaximumEbsVolumeSizeInGb"></a>

```java
public void resetMaximumEbsVolumeSizeInGb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.property.defaultEbsVolumeSizeInGbInput">defaultEbsVolumeSizeInGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.property.maximumEbsVolumeSizeInGbInput">maximumEbsVolumeSizeInGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.property.defaultEbsVolumeSizeInGb">defaultEbsVolumeSizeInGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.property.maximumEbsVolumeSizeInGb">maximumEbsVolumeSizeInGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings">SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultEbsVolumeSizeInGbInput`<sup>Optional</sup> <a name="defaultEbsVolumeSizeInGbInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.property.defaultEbsVolumeSizeInGbInput"></a>

```java
public java.lang.Number getDefaultEbsVolumeSizeInGbInput();
```

- *Type:* java.lang.Number

---

##### `maximumEbsVolumeSizeInGbInput`<sup>Optional</sup> <a name="maximumEbsVolumeSizeInGbInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.property.maximumEbsVolumeSizeInGbInput"></a>

```java
public java.lang.Number getMaximumEbsVolumeSizeInGbInput();
```

- *Type:* java.lang.Number

---

##### `defaultEbsVolumeSizeInGb`<sup>Required</sup> <a name="defaultEbsVolumeSizeInGb" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.property.defaultEbsVolumeSizeInGb"></a>

```java
public java.lang.Number getDefaultEbsVolumeSizeInGb();
```

- *Type:* java.lang.Number

---

##### `maximumEbsVolumeSizeInGb`<sup>Required</sup> <a name="maximumEbsVolumeSizeInGb" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.property.maximumEbsVolumeSizeInGb"></a>

```java
public java.lang.Number getMaximumEbsVolumeSizeInGb();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings">SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings</a>

---


### SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference <a name="SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_user_profile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference;

new SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.putDefaultEbsStorageSettings">putDefaultEbsStorageSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.resetDefaultEbsStorageSettings">resetDefaultEbsStorageSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDefaultEbsStorageSettings` <a name="putDefaultEbsStorageSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.putDefaultEbsStorageSettings"></a>

```java
public void putDefaultEbsStorageSettings(SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.putDefaultEbsStorageSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings">SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings</a>

---

##### `resetDefaultEbsStorageSettings` <a name="resetDefaultEbsStorageSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.resetDefaultEbsStorageSettings"></a>

```java
public void resetDefaultEbsStorageSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.property.defaultEbsStorageSettings">defaultEbsStorageSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference">SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.property.defaultEbsStorageSettingsInput">defaultEbsStorageSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings">SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettings">SagemakerUserProfileUserSettingsSpaceStorageSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultEbsStorageSettings`<sup>Required</sup> <a name="defaultEbsStorageSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.property.defaultEbsStorageSettings"></a>

```java
public SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference getDefaultEbsStorageSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference">SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference</a>

---

##### `defaultEbsStorageSettingsInput`<sup>Optional</sup> <a name="defaultEbsStorageSettingsInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.property.defaultEbsStorageSettingsInput"></a>

```java
public IResolvable|SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings getDefaultEbsStorageSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings">SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerUserProfileUserSettingsSpaceStorageSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettings">SagemakerUserProfileUserSettingsSpaceStorageSettings</a>

---


### SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList <a name="SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_user_profile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList;

new SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.get"></a>

```java
public SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases">SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases">SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases</a>>

---


### SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference <a name="SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_user_profile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference;

new SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.resetSageMakerImageName">resetSageMakerImageName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.resetVersionAliases">resetVersionAliases</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSageMakerImageName` <a name="resetSageMakerImageName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.resetSageMakerImageName"></a>

```java
public void resetSageMakerImageName()
```

##### `resetVersionAliases` <a name="resetVersionAliases" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.resetVersionAliases"></a>

```java
public void resetVersionAliases()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.property.sageMakerImageNameInput">sageMakerImageNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.property.versionAliasesInput">versionAliasesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.property.sageMakerImageName">sageMakerImageName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.property.versionAliases">versionAliases</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases">SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sageMakerImageNameInput`<sup>Optional</sup> <a name="sageMakerImageNameInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.property.sageMakerImageNameInput"></a>

```java
public java.lang.String getSageMakerImageNameInput();
```

- *Type:* java.lang.String

---

##### `versionAliasesInput`<sup>Optional</sup> <a name="versionAliasesInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.property.versionAliasesInput"></a>

```java
public java.util.List<java.lang.String> getVersionAliasesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sageMakerImageName`<sup>Required</sup> <a name="sageMakerImageName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.property.sageMakerImageName"></a>

```java
public java.lang.String getSageMakerImageName();
```

- *Type:* java.lang.String

---

##### `versionAliases`<sup>Required</sup> <a name="versionAliases" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.property.versionAliases"></a>

```java
public java.util.List<java.lang.String> getVersionAliases();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases">SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases</a>

---


### SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference <a name="SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_user_profile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference;

new SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.putHiddenSageMakerImageVersionAliases">putHiddenSageMakerImageVersionAliases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.resetHiddenAppTypes">resetHiddenAppTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.resetHiddenInstanceTypes">resetHiddenInstanceTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.resetHiddenMlTools">resetHiddenMlTools</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.resetHiddenSageMakerImageVersionAliases">resetHiddenSageMakerImageVersionAliases</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHiddenSageMakerImageVersionAliases` <a name="putHiddenSageMakerImageVersionAliases" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.putHiddenSageMakerImageVersionAliases"></a>

```java
public void putHiddenSageMakerImageVersionAliases(IResolvable|java.util.List<SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.putHiddenSageMakerImageVersionAliases.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases">SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases</a>>

---

##### `resetHiddenAppTypes` <a name="resetHiddenAppTypes" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.resetHiddenAppTypes"></a>

```java
public void resetHiddenAppTypes()
```

##### `resetHiddenInstanceTypes` <a name="resetHiddenInstanceTypes" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.resetHiddenInstanceTypes"></a>

```java
public void resetHiddenInstanceTypes()
```

##### `resetHiddenMlTools` <a name="resetHiddenMlTools" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.resetHiddenMlTools"></a>

```java
public void resetHiddenMlTools()
```

##### `resetHiddenSageMakerImageVersionAliases` <a name="resetHiddenSageMakerImageVersionAliases" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.resetHiddenSageMakerImageVersionAliases"></a>

```java
public void resetHiddenSageMakerImageVersionAliases()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.hiddenSageMakerImageVersionAliases">hiddenSageMakerImageVersionAliases</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList">SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.hiddenAppTypesInput">hiddenAppTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.hiddenInstanceTypesInput">hiddenInstanceTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.hiddenMlToolsInput">hiddenMlToolsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.hiddenSageMakerImageVersionAliasesInput">hiddenSageMakerImageVersionAliasesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases">SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.hiddenAppTypes">hiddenAppTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.hiddenInstanceTypes">hiddenInstanceTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.hiddenMlTools">hiddenMlTools</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettings">SagemakerUserProfileUserSettingsStudioWebPortalSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hiddenSageMakerImageVersionAliases`<sup>Required</sup> <a name="hiddenSageMakerImageVersionAliases" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.hiddenSageMakerImageVersionAliases"></a>

```java
public SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList getHiddenSageMakerImageVersionAliases();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList">SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList</a>

---

##### `hiddenAppTypesInput`<sup>Optional</sup> <a name="hiddenAppTypesInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.hiddenAppTypesInput"></a>

```java
public java.util.List<java.lang.String> getHiddenAppTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `hiddenInstanceTypesInput`<sup>Optional</sup> <a name="hiddenInstanceTypesInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.hiddenInstanceTypesInput"></a>

```java
public java.util.List<java.lang.String> getHiddenInstanceTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `hiddenMlToolsInput`<sup>Optional</sup> <a name="hiddenMlToolsInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.hiddenMlToolsInput"></a>

```java
public java.util.List<java.lang.String> getHiddenMlToolsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `hiddenSageMakerImageVersionAliasesInput`<sup>Optional</sup> <a name="hiddenSageMakerImageVersionAliasesInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.hiddenSageMakerImageVersionAliasesInput"></a>

```java
public IResolvable|java.util.List<SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases> getHiddenSageMakerImageVersionAliasesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases">SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases</a>>

---

##### `hiddenAppTypes`<sup>Required</sup> <a name="hiddenAppTypes" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.hiddenAppTypes"></a>

```java
public java.util.List<java.lang.String> getHiddenAppTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `hiddenInstanceTypes`<sup>Required</sup> <a name="hiddenInstanceTypes" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.hiddenInstanceTypes"></a>

```java
public java.util.List<java.lang.String> getHiddenInstanceTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `hiddenMlTools`<sup>Required</sup> <a name="hiddenMlTools" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.hiddenMlTools"></a>

```java
public java.util.List<java.lang.String> getHiddenMlTools();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerUserProfileUserSettingsStudioWebPortalSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettings">SagemakerUserProfileUserSettingsStudioWebPortalSettings</a>

---



