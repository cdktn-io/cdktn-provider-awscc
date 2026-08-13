# `workspaceswebIdentityProvider` Submodule <a name="`workspaceswebIdentityProvider` Submodule" id="@cdktn/provider-awscc.workspaceswebIdentityProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspaceswebIdentityProvider <a name="WorkspaceswebIdentityProvider" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_identity_provider awscc_workspacesweb_identity_provider}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspacesweb_identity_provider.WorkspaceswebIdentityProvider;

WorkspaceswebIdentityProvider.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .identityProviderDetails(java.util.Map<java.lang.String, java.lang.String>)
    .identityProviderName(java.lang.String)
    .identityProviderType(java.lang.String)
//  .portalArn(java.lang.String)
//  .tags(IResolvable|java.util.List<WorkspaceswebIdentityProviderTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.Initializer.parameter.identityProviderDetails">identityProviderDetails</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_identity_provider#identity_provider_details WorkspaceswebIdentityProvider#identity_provider_details}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.Initializer.parameter.identityProviderName">identityProviderName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_identity_provider#identity_provider_name WorkspaceswebIdentityProvider#identity_provider_name}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.Initializer.parameter.identityProviderType">identityProviderType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_identity_provider#identity_provider_type WorkspaceswebIdentityProvider#identity_provider_type}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.Initializer.parameter.portalArn">portalArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_identity_provider#portal_arn WorkspaceswebIdentityProvider#portal_arn}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTags">WorkspaceswebIdentityProviderTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_identity_provider#tags WorkspaceswebIdentityProvider#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `identityProviderDetails`<sup>Required</sup> <a name="identityProviderDetails" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.Initializer.parameter.identityProviderDetails"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_identity_provider#identity_provider_details WorkspaceswebIdentityProvider#identity_provider_details}.

---

##### `identityProviderName`<sup>Required</sup> <a name="identityProviderName" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.Initializer.parameter.identityProviderName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_identity_provider#identity_provider_name WorkspaceswebIdentityProvider#identity_provider_name}.

---

##### `identityProviderType`<sup>Required</sup> <a name="identityProviderType" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.Initializer.parameter.identityProviderType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_identity_provider#identity_provider_type WorkspaceswebIdentityProvider#identity_provider_type}.

---

##### `portalArn`<sup>Optional</sup> <a name="portalArn" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.Initializer.parameter.portalArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_identity_provider#portal_arn WorkspaceswebIdentityProvider#portal_arn}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTags">WorkspaceswebIdentityProviderTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_identity_provider#tags WorkspaceswebIdentityProvider#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.resetPortalArn">resetPortalArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<WorkspaceswebIdentityProviderTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTags">WorkspaceswebIdentityProviderTags</a>>

---

##### `resetPortalArn` <a name="resetPortalArn" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.resetPortalArn"></a>

```java
public void resetPortalArn()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a WorkspaceswebIdentityProvider resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.isConstruct"></a>

```java
import io.cdktn.providers.awscc.workspacesweb_identity_provider.WorkspaceswebIdentityProvider;

WorkspaceswebIdentityProvider.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.workspacesweb_identity_provider.WorkspaceswebIdentityProvider;

WorkspaceswebIdentityProvider.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.workspacesweb_identity_provider.WorkspaceswebIdentityProvider;

WorkspaceswebIdentityProvider.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.workspacesweb_identity_provider.WorkspaceswebIdentityProvider;

WorkspaceswebIdentityProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),WorkspaceswebIdentityProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a WorkspaceswebIdentityProvider resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the WorkspaceswebIdentityProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing WorkspaceswebIdentityProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_identity_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the WorkspaceswebIdentityProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.property.identityProviderArn">identityProviderArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsList">WorkspaceswebIdentityProviderTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.property.identityProviderDetailsInput">identityProviderDetailsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.property.identityProviderNameInput">identityProviderNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.property.identityProviderTypeInput">identityProviderTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.property.portalArnInput">portalArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTags">WorkspaceswebIdentityProviderTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.property.identityProviderDetails">identityProviderDetails</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.property.identityProviderName">identityProviderName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.property.identityProviderType">identityProviderType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.property.portalArn">portalArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `identityProviderArn`<sup>Required</sup> <a name="identityProviderArn" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.property.identityProviderArn"></a>

```java
public java.lang.String getIdentityProviderArn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.property.tags"></a>

```java
public WorkspaceswebIdentityProviderTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsList">WorkspaceswebIdentityProviderTagsList</a>

---

##### `identityProviderDetailsInput`<sup>Optional</sup> <a name="identityProviderDetailsInput" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.property.identityProviderDetailsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getIdentityProviderDetailsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `identityProviderNameInput`<sup>Optional</sup> <a name="identityProviderNameInput" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.property.identityProviderNameInput"></a>

```java
public java.lang.String getIdentityProviderNameInput();
```

- *Type:* java.lang.String

---

##### `identityProviderTypeInput`<sup>Optional</sup> <a name="identityProviderTypeInput" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.property.identityProviderTypeInput"></a>

```java
public java.lang.String getIdentityProviderTypeInput();
```

- *Type:* java.lang.String

---

##### `portalArnInput`<sup>Optional</sup> <a name="portalArnInput" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.property.portalArnInput"></a>

```java
public java.lang.String getPortalArnInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.property.tagsInput"></a>

```java
public IResolvable|java.util.List<WorkspaceswebIdentityProviderTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTags">WorkspaceswebIdentityProviderTags</a>>

---

##### `identityProviderDetails`<sup>Required</sup> <a name="identityProviderDetails" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.property.identityProviderDetails"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getIdentityProviderDetails();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `identityProviderName`<sup>Required</sup> <a name="identityProviderName" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.property.identityProviderName"></a>

```java
public java.lang.String getIdentityProviderName();
```

- *Type:* java.lang.String

---

##### `identityProviderType`<sup>Required</sup> <a name="identityProviderType" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.property.identityProviderType"></a>

```java
public java.lang.String getIdentityProviderType();
```

- *Type:* java.lang.String

---

##### `portalArn`<sup>Required</sup> <a name="portalArn" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.property.portalArn"></a>

```java
public java.lang.String getPortalArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProvider.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspaceswebIdentityProviderConfig <a name="WorkspaceswebIdentityProviderConfig" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspacesweb_identity_provider.WorkspaceswebIdentityProviderConfig;

WorkspaceswebIdentityProviderConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .identityProviderDetails(java.util.Map<java.lang.String, java.lang.String>)
    .identityProviderName(java.lang.String)
    .identityProviderType(java.lang.String)
//  .portalArn(java.lang.String)
//  .tags(IResolvable|java.util.List<WorkspaceswebIdentityProviderTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderConfig.property.identityProviderDetails">identityProviderDetails</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_identity_provider#identity_provider_details WorkspaceswebIdentityProvider#identity_provider_details}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderConfig.property.identityProviderName">identityProviderName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_identity_provider#identity_provider_name WorkspaceswebIdentityProvider#identity_provider_name}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderConfig.property.identityProviderType">identityProviderType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_identity_provider#identity_provider_type WorkspaceswebIdentityProvider#identity_provider_type}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderConfig.property.portalArn">portalArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_identity_provider#portal_arn WorkspaceswebIdentityProvider#portal_arn}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTags">WorkspaceswebIdentityProviderTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_identity_provider#tags WorkspaceswebIdentityProvider#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `identityProviderDetails`<sup>Required</sup> <a name="identityProviderDetails" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderConfig.property.identityProviderDetails"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getIdentityProviderDetails();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_identity_provider#identity_provider_details WorkspaceswebIdentityProvider#identity_provider_details}.

---

##### `identityProviderName`<sup>Required</sup> <a name="identityProviderName" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderConfig.property.identityProviderName"></a>

```java
public java.lang.String getIdentityProviderName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_identity_provider#identity_provider_name WorkspaceswebIdentityProvider#identity_provider_name}.

---

##### `identityProviderType`<sup>Required</sup> <a name="identityProviderType" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderConfig.property.identityProviderType"></a>

```java
public java.lang.String getIdentityProviderType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_identity_provider#identity_provider_type WorkspaceswebIdentityProvider#identity_provider_type}.

---

##### `portalArn`<sup>Optional</sup> <a name="portalArn" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderConfig.property.portalArn"></a>

```java
public java.lang.String getPortalArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_identity_provider#portal_arn WorkspaceswebIdentityProvider#portal_arn}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderConfig.property.tags"></a>

```java
public IResolvable|java.util.List<WorkspaceswebIdentityProviderTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTags">WorkspaceswebIdentityProviderTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_identity_provider#tags WorkspaceswebIdentityProvider#tags}.

---

### WorkspaceswebIdentityProviderTags <a name="WorkspaceswebIdentityProviderTags" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspacesweb_identity_provider.WorkspaceswebIdentityProviderTags;

WorkspaceswebIdentityProviderTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_identity_provider#key WorkspaceswebIdentityProvider#key}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_identity_provider#value WorkspaceswebIdentityProvider#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_identity_provider#key WorkspaceswebIdentityProvider#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_identity_provider#value WorkspaceswebIdentityProvider#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspaceswebIdentityProviderTagsList <a name="WorkspaceswebIdentityProviderTagsList" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspacesweb_identity_provider.WorkspaceswebIdentityProviderTagsList;

new WorkspaceswebIdentityProviderTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsList.get"></a>

```java
public WorkspaceswebIdentityProviderTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTags">WorkspaceswebIdentityProviderTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<WorkspaceswebIdentityProviderTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTags">WorkspaceswebIdentityProviderTags</a>>

---


### WorkspaceswebIdentityProviderTagsOutputReference <a name="WorkspaceswebIdentityProviderTagsOutputReference" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspacesweb_identity_provider.WorkspaceswebIdentityProviderTagsOutputReference;

new WorkspaceswebIdentityProviderTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTags">WorkspaceswebIdentityProviderTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|WorkspaceswebIdentityProviderTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspaceswebIdentityProvider.WorkspaceswebIdentityProviderTags">WorkspaceswebIdentityProviderTags</a>

---



