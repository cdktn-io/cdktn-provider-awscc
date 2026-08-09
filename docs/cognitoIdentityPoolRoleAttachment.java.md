# `cognitoIdentityPoolRoleAttachment` Submodule <a name="`cognitoIdentityPoolRoleAttachment` Submodule" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoIdentityPoolRoleAttachment <a name="CognitoIdentityPoolRoleAttachment" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool_role_attachment awscc_cognito_identity_pool_role_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.Initializer"></a>

```java
import io.cdktn.providers.awscc.cognito_identity_pool_role_attachment.CognitoIdentityPoolRoleAttachment;

CognitoIdentityPoolRoleAttachment.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .identityPoolId(java.lang.String)
//  .roleMappings(IResolvable|java.util.Map<java.lang.String, CognitoIdentityPoolRoleAttachmentRoleMappings>)
//  .roles(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.Initializer.parameter.identityPoolId">identityPoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool_role_attachment#identity_pool_id CognitoIdentityPoolRoleAttachment#identity_pool_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.Initializer.parameter.roleMappings">roleMappings</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappings">CognitoIdentityPoolRoleAttachmentRoleMappings</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool_role_attachment#role_mappings CognitoIdentityPoolRoleAttachment#role_mappings}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.Initializer.parameter.roles">roles</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool_role_attachment#roles CognitoIdentityPoolRoleAttachment#roles}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `identityPoolId`<sup>Required</sup> <a name="identityPoolId" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.Initializer.parameter.identityPoolId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool_role_attachment#identity_pool_id CognitoIdentityPoolRoleAttachment#identity_pool_id}.

---

##### `roleMappings`<sup>Optional</sup> <a name="roleMappings" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.Initializer.parameter.roleMappings"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappings">CognitoIdentityPoolRoleAttachmentRoleMappings</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool_role_attachment#role_mappings CognitoIdentityPoolRoleAttachment#role_mappings}.

---

##### `roles`<sup>Optional</sup> <a name="roles" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.Initializer.parameter.roles"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool_role_attachment#roles CognitoIdentityPoolRoleAttachment#roles}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.putRoleMappings">putRoleMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.resetRoleMappings">resetRoleMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.resetRoles">resetRoles</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRoleMappings` <a name="putRoleMappings" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.putRoleMappings"></a>

```java
public void putRoleMappings(IResolvable|java.util.Map<java.lang.String, CognitoIdentityPoolRoleAttachmentRoleMappings> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.putRoleMappings.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappings">CognitoIdentityPoolRoleAttachmentRoleMappings</a>>

---

##### `resetRoleMappings` <a name="resetRoleMappings" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.resetRoleMappings"></a>

```java
public void resetRoleMappings()
```

##### `resetRoles` <a name="resetRoles" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.resetRoles"></a>

```java
public void resetRoles()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CognitoIdentityPoolRoleAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.isConstruct"></a>

```java
import io.cdktn.providers.awscc.cognito_identity_pool_role_attachment.CognitoIdentityPoolRoleAttachment;

CognitoIdentityPoolRoleAttachment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.cognito_identity_pool_role_attachment.CognitoIdentityPoolRoleAttachment;

CognitoIdentityPoolRoleAttachment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.cognito_identity_pool_role_attachment.CognitoIdentityPoolRoleAttachment;

CognitoIdentityPoolRoleAttachment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.cognito_identity_pool_role_attachment.CognitoIdentityPoolRoleAttachment;

CognitoIdentityPoolRoleAttachment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CognitoIdentityPoolRoleAttachment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CognitoIdentityPoolRoleAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CognitoIdentityPoolRoleAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CognitoIdentityPoolRoleAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool_role_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CognitoIdentityPoolRoleAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.identityPoolRoleAttachmentId">identityPoolRoleAttachmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.roleMappings">roleMappings</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap">CognitoIdentityPoolRoleAttachmentRoleMappingsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.identityPoolIdInput">identityPoolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.roleMappingsInput">roleMappingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappings">CognitoIdentityPoolRoleAttachmentRoleMappings</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.rolesInput">rolesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.identityPoolId">identityPoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.roles">roles</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `identityPoolRoleAttachmentId`<sup>Required</sup> <a name="identityPoolRoleAttachmentId" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.identityPoolRoleAttachmentId"></a>

```java
public java.lang.String getIdentityPoolRoleAttachmentId();
```

- *Type:* java.lang.String

---

##### `roleMappings`<sup>Required</sup> <a name="roleMappings" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.roleMappings"></a>

```java
public CognitoIdentityPoolRoleAttachmentRoleMappingsMap getRoleMappings();
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap">CognitoIdentityPoolRoleAttachmentRoleMappingsMap</a>

---

##### `identityPoolIdInput`<sup>Optional</sup> <a name="identityPoolIdInput" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.identityPoolIdInput"></a>

```java
public java.lang.String getIdentityPoolIdInput();
```

- *Type:* java.lang.String

---

##### `roleMappingsInput`<sup>Optional</sup> <a name="roleMappingsInput" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.roleMappingsInput"></a>

```java
public IResolvable|java.util.Map<java.lang.String, CognitoIdentityPoolRoleAttachmentRoleMappings> getRoleMappingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappings">CognitoIdentityPoolRoleAttachmentRoleMappings</a>>

---

##### `rolesInput`<sup>Optional</sup> <a name="rolesInput" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.rolesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRolesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `identityPoolId`<sup>Required</sup> <a name="identityPoolId" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.identityPoolId"></a>

```java
public java.lang.String getIdentityPoolId();
```

- *Type:* java.lang.String

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.roles"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRoles();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoIdentityPoolRoleAttachmentConfig <a name="CognitoIdentityPoolRoleAttachmentConfig" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.cognito_identity_pool_role_attachment.CognitoIdentityPoolRoleAttachmentConfig;

CognitoIdentityPoolRoleAttachmentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .identityPoolId(java.lang.String)
//  .roleMappings(IResolvable|java.util.Map<java.lang.String, CognitoIdentityPoolRoleAttachmentRoleMappings>)
//  .roles(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentConfig.property.identityPoolId">identityPoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool_role_attachment#identity_pool_id CognitoIdentityPoolRoleAttachment#identity_pool_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentConfig.property.roleMappings">roleMappings</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappings">CognitoIdentityPoolRoleAttachmentRoleMappings</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool_role_attachment#role_mappings CognitoIdentityPoolRoleAttachment#role_mappings}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentConfig.property.roles">roles</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool_role_attachment#roles CognitoIdentityPoolRoleAttachment#roles}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `identityPoolId`<sup>Required</sup> <a name="identityPoolId" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentConfig.property.identityPoolId"></a>

```java
public java.lang.String getIdentityPoolId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool_role_attachment#identity_pool_id CognitoIdentityPoolRoleAttachment#identity_pool_id}.

---

##### `roleMappings`<sup>Optional</sup> <a name="roleMappings" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentConfig.property.roleMappings"></a>

```java
public IResolvable|java.util.Map<java.lang.String, CognitoIdentityPoolRoleAttachmentRoleMappings> getRoleMappings();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappings">CognitoIdentityPoolRoleAttachmentRoleMappings</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool_role_attachment#role_mappings CognitoIdentityPoolRoleAttachment#role_mappings}.

---

##### `roles`<sup>Optional</sup> <a name="roles" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentConfig.property.roles"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRoles();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool_role_attachment#roles CognitoIdentityPoolRoleAttachment#roles}.

---

### CognitoIdentityPoolRoleAttachmentRoleMappings <a name="CognitoIdentityPoolRoleAttachmentRoleMappings" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappings.Initializer"></a>

```java
import io.cdktn.providers.awscc.cognito_identity_pool_role_attachment.CognitoIdentityPoolRoleAttachmentRoleMappings;

CognitoIdentityPoolRoleAttachmentRoleMappings.builder()
//  .ambiguousRoleResolution(java.lang.String)
//  .identityProvider(java.lang.String)
//  .rulesConfiguration(CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappings.property.ambiguousRoleResolution">ambiguousRoleResolution</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool_role_attachment#ambiguous_role_resolution CognitoIdentityPoolRoleAttachment#ambiguous_role_resolution}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappings.property.identityProvider">identityProvider</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool_role_attachment#identity_provider CognitoIdentityPoolRoleAttachment#identity_provider}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappings.property.rulesConfiguration">rulesConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration">CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool_role_attachment#rules_configuration CognitoIdentityPoolRoleAttachment#rules_configuration}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappings.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool_role_attachment#type CognitoIdentityPoolRoleAttachment#type}. |

---

##### `ambiguousRoleResolution`<sup>Optional</sup> <a name="ambiguousRoleResolution" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappings.property.ambiguousRoleResolution"></a>

```java
public java.lang.String getAmbiguousRoleResolution();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool_role_attachment#ambiguous_role_resolution CognitoIdentityPoolRoleAttachment#ambiguous_role_resolution}.

---

##### `identityProvider`<sup>Optional</sup> <a name="identityProvider" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappings.property.identityProvider"></a>

```java
public java.lang.String getIdentityProvider();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool_role_attachment#identity_provider CognitoIdentityPoolRoleAttachment#identity_provider}.

---

##### `rulesConfiguration`<sup>Optional</sup> <a name="rulesConfiguration" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappings.property.rulesConfiguration"></a>

```java
public CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration getRulesConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration">CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool_role_attachment#rules_configuration CognitoIdentityPoolRoleAttachment#rules_configuration}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappings.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool_role_attachment#type CognitoIdentityPoolRoleAttachment#type}.

---

### CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration <a name="CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.cognito_identity_pool_role_attachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration;

CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration.builder()
//  .rules(IResolvable|java.util.List<CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration.property.rules">rules</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules">CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool_role_attachment#rules CognitoIdentityPoolRoleAttachment#rules}. |

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration.property.rules"></a>

```java
public IResolvable|java.util.List<CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules> getRules();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules">CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool_role_attachment#rules CognitoIdentityPoolRoleAttachment#rules}.

---

### CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules <a name="CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules.Initializer"></a>

```java
import io.cdktn.providers.awscc.cognito_identity_pool_role_attachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules;

CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules.builder()
//  .claim(java.lang.String)
//  .matchType(java.lang.String)
//  .roleArn(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules.property.claim">claim</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool_role_attachment#claim CognitoIdentityPoolRoleAttachment#claim}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules.property.matchType">matchType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool_role_attachment#match_type CognitoIdentityPoolRoleAttachment#match_type}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool_role_attachment#role_arn CognitoIdentityPoolRoleAttachment#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool_role_attachment#value CognitoIdentityPoolRoleAttachment#value}. |

---

##### `claim`<sup>Optional</sup> <a name="claim" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules.property.claim"></a>

```java
public java.lang.String getClaim();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool_role_attachment#claim CognitoIdentityPoolRoleAttachment#claim}.

---

##### `matchType`<sup>Optional</sup> <a name="matchType" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules.property.matchType"></a>

```java
public java.lang.String getMatchType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool_role_attachment#match_type CognitoIdentityPoolRoleAttachment#match_type}.

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool_role_attachment#role_arn CognitoIdentityPoolRoleAttachment#role_arn}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool_role_attachment#value CognitoIdentityPoolRoleAttachment#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CognitoIdentityPoolRoleAttachmentRoleMappingsMap <a name="CognitoIdentityPoolRoleAttachmentRoleMappingsMap" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap.Initializer"></a>

```java
import io.cdktn.providers.awscc.cognito_identity_pool_role_attachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap;

new CognitoIdentityPoolRoleAttachmentRoleMappingsMap(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap.get"></a>

```java
public CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference get(java.lang.String key)
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap.get.parameter.key"></a>

- *Type:* java.lang.String

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappings">CognitoIdentityPoolRoleAttachmentRoleMappings</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap.property.internalValue"></a>

```java
public IResolvable|java.util.Map<java.lang.String, CognitoIdentityPoolRoleAttachmentRoleMappings> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappings">CognitoIdentityPoolRoleAttachmentRoleMappings</a>>

---


### CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference <a name="CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cognito_identity_pool_role_attachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference;

new CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.String complexObjectKey);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>java.lang.String</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* java.lang.String

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.putRulesConfiguration">putRulesConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.resetAmbiguousRoleResolution">resetAmbiguousRoleResolution</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.resetIdentityProvider">resetIdentityProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.resetRulesConfiguration">resetRulesConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRulesConfiguration` <a name="putRulesConfiguration" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.putRulesConfiguration"></a>

```java
public void putRulesConfiguration(CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.putRulesConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration">CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration</a>

---

##### `resetAmbiguousRoleResolution` <a name="resetAmbiguousRoleResolution" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.resetAmbiguousRoleResolution"></a>

```java
public void resetAmbiguousRoleResolution()
```

##### `resetIdentityProvider` <a name="resetIdentityProvider" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.resetIdentityProvider"></a>

```java
public void resetIdentityProvider()
```

##### `resetRulesConfiguration` <a name="resetRulesConfiguration" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.resetRulesConfiguration"></a>

```java
public void resetRulesConfiguration()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.rulesConfiguration">rulesConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference">CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.ambiguousRoleResolutionInput">ambiguousRoleResolutionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.identityProviderInput">identityProviderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.rulesConfigurationInput">rulesConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration">CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.ambiguousRoleResolution">ambiguousRoleResolution</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.identityProvider">identityProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappings">CognitoIdentityPoolRoleAttachmentRoleMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rulesConfiguration`<sup>Required</sup> <a name="rulesConfiguration" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.rulesConfiguration"></a>

```java
public CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference getRulesConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference">CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference</a>

---

##### `ambiguousRoleResolutionInput`<sup>Optional</sup> <a name="ambiguousRoleResolutionInput" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.ambiguousRoleResolutionInput"></a>

```java
public java.lang.String getAmbiguousRoleResolutionInput();
```

- *Type:* java.lang.String

---

##### `identityProviderInput`<sup>Optional</sup> <a name="identityProviderInput" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.identityProviderInput"></a>

```java
public java.lang.String getIdentityProviderInput();
```

- *Type:* java.lang.String

---

##### `rulesConfigurationInput`<sup>Optional</sup> <a name="rulesConfigurationInput" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.rulesConfigurationInput"></a>

```java
public IResolvable|CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration getRulesConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration">CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `ambiguousRoleResolution`<sup>Required</sup> <a name="ambiguousRoleResolution" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.ambiguousRoleResolution"></a>

```java
public java.lang.String getAmbiguousRoleResolution();
```

- *Type:* java.lang.String

---

##### `identityProvider`<sup>Required</sup> <a name="identityProvider" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.identityProvider"></a>

```java
public java.lang.String getIdentityProvider();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.internalValue"></a>

```java
public IResolvable|CognitoIdentityPoolRoleAttachmentRoleMappings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappings">CognitoIdentityPoolRoleAttachmentRoleMappings</a>

---


### CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference <a name="CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cognito_identity_pool_role_attachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference;

new CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.resetRules">resetRules</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRules` <a name="putRules" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.putRules"></a>

```java
public void putRules(IResolvable|java.util.List<CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.putRules.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules">CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules</a>>

---

##### `resetRules` <a name="resetRules" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.resetRules"></a>

```java
public void resetRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList">CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.property.rulesInput">rulesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules">CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration">CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.property.rules"></a>

```java
public CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList getRules();
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList">CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList</a>

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.property.rulesInput"></a>

```java
public IResolvable|java.util.List<CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules> getRulesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules">CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration">CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration</a>

---


### CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList <a name="CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.cognito_identity_pool_role_attachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList;

new CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.get"></a>

```java
public CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules">CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules">CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules</a>>

---


### CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference <a name="CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cognito_identity_pool_role_attachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference;

new CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.resetClaim">resetClaim</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.resetMatchType">resetMatchType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClaim` <a name="resetClaim" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.resetClaim"></a>

```java
public void resetClaim()
```

##### `resetMatchType` <a name="resetMatchType" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.resetMatchType"></a>

```java
public void resetMatchType()
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.resetRoleArn"></a>

```java
public void resetRoleArn()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.claimInput">claimInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.matchTypeInput">matchTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.claim">claim</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.matchType">matchType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules">CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `claimInput`<sup>Optional</sup> <a name="claimInput" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.claimInput"></a>

```java
public java.lang.String getClaimInput();
```

- *Type:* java.lang.String

---

##### `matchTypeInput`<sup>Optional</sup> <a name="matchTypeInput" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.matchTypeInput"></a>

```java
public java.lang.String getMatchTypeInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `claim`<sup>Required</sup> <a name="claim" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.claim"></a>

```java
public java.lang.String getClaim();
```

- *Type:* java.lang.String

---

##### `matchType`<sup>Required</sup> <a name="matchType" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.matchType"></a>

```java
public java.lang.String getMatchType();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.internalValue"></a>

```java
public IResolvable|CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules">CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules</a>

---



