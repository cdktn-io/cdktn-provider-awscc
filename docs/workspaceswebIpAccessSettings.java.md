# `workspaceswebIpAccessSettings` Submodule <a name="`workspaceswebIpAccessSettings` Submodule" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspaceswebIpAccessSettings <a name="WorkspaceswebIpAccessSettings" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_ip_access_settings awscc_workspacesweb_ip_access_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspacesweb_ip_access_settings.WorkspaceswebIpAccessSettings;

WorkspaceswebIpAccessSettings.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .ipRules(IResolvable|java.util.List<WorkspaceswebIpAccessSettingsIpRules>)
//  .additionalEncryptionContext(java.util.Map<java.lang.String, java.lang.String>)
//  .customerManagedKey(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .tags(IResolvable|java.util.List<WorkspaceswebIpAccessSettingsTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.ipRules">ipRules</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRules">WorkspaceswebIpAccessSettingsIpRules</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_ip_access_settings#ip_rules WorkspaceswebIpAccessSettings#ip_rules}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.additionalEncryptionContext">additionalEncryptionContext</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_ip_access_settings#additional_encryption_context WorkspaceswebIpAccessSettings#additional_encryption_context}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.customerManagedKey">customerManagedKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_ip_access_settings#customer_managed_key WorkspaceswebIpAccessSettings#customer_managed_key}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_ip_access_settings#description WorkspaceswebIpAccessSettings#description}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_ip_access_settings#display_name WorkspaceswebIpAccessSettings#display_name}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTags">WorkspaceswebIpAccessSettingsTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_ip_access_settings#tags WorkspaceswebIpAccessSettings#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `ipRules`<sup>Required</sup> <a name="ipRules" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.ipRules"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRules">WorkspaceswebIpAccessSettingsIpRules</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_ip_access_settings#ip_rules WorkspaceswebIpAccessSettings#ip_rules}.

---

##### `additionalEncryptionContext`<sup>Optional</sup> <a name="additionalEncryptionContext" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.additionalEncryptionContext"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_ip_access_settings#additional_encryption_context WorkspaceswebIpAccessSettings#additional_encryption_context}.

---

##### `customerManagedKey`<sup>Optional</sup> <a name="customerManagedKey" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.customerManagedKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_ip_access_settings#customer_managed_key WorkspaceswebIpAccessSettings#customer_managed_key}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_ip_access_settings#description WorkspaceswebIpAccessSettings#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_ip_access_settings#display_name WorkspaceswebIpAccessSettings#display_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTags">WorkspaceswebIpAccessSettingsTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_ip_access_settings#tags WorkspaceswebIpAccessSettings#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.putIpRules">putIpRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.resetAdditionalEncryptionContext">resetAdditionalEncryptionContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.resetCustomerManagedKey">resetCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIpRules` <a name="putIpRules" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.putIpRules"></a>

```java
public void putIpRules(IResolvable|java.util.List<WorkspaceswebIpAccessSettingsIpRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.putIpRules.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRules">WorkspaceswebIpAccessSettingsIpRules</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<WorkspaceswebIpAccessSettingsTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTags">WorkspaceswebIpAccessSettingsTags</a>>

---

##### `resetAdditionalEncryptionContext` <a name="resetAdditionalEncryptionContext" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.resetAdditionalEncryptionContext"></a>

```java
public void resetAdditionalEncryptionContext()
```

##### `resetCustomerManagedKey` <a name="resetCustomerManagedKey" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.resetCustomerManagedKey"></a>

```java
public void resetCustomerManagedKey()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a WorkspaceswebIpAccessSettings resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.isConstruct"></a>

```java
import io.cdktn.providers.awscc.workspacesweb_ip_access_settings.WorkspaceswebIpAccessSettings;

WorkspaceswebIpAccessSettings.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.workspacesweb_ip_access_settings.WorkspaceswebIpAccessSettings;

WorkspaceswebIpAccessSettings.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.workspacesweb_ip_access_settings.WorkspaceswebIpAccessSettings;

WorkspaceswebIpAccessSettings.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.workspacesweb_ip_access_settings.WorkspaceswebIpAccessSettings;

WorkspaceswebIpAccessSettings.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),WorkspaceswebIpAccessSettings.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a WorkspaceswebIpAccessSettings resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the WorkspaceswebIpAccessSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing WorkspaceswebIpAccessSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_ip_access_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the WorkspaceswebIpAccessSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.associatedPortalArns">associatedPortalArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.creationDate">creationDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.ipAccessSettingsArn">ipAccessSettingsArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.ipRules">ipRules</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesList">WorkspaceswebIpAccessSettingsIpRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsList">WorkspaceswebIpAccessSettingsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.additionalEncryptionContextInput">additionalEncryptionContextInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.customerManagedKeyInput">customerManagedKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.ipRulesInput">ipRulesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRules">WorkspaceswebIpAccessSettingsIpRules</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTags">WorkspaceswebIpAccessSettingsTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.additionalEncryptionContext">additionalEncryptionContext</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.customerManagedKey">customerManagedKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `associatedPortalArns`<sup>Required</sup> <a name="associatedPortalArns" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.associatedPortalArns"></a>

```java
public java.util.List<java.lang.String> getAssociatedPortalArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `creationDate`<sup>Required</sup> <a name="creationDate" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.creationDate"></a>

```java
public java.lang.String getCreationDate();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipAccessSettingsArn`<sup>Required</sup> <a name="ipAccessSettingsArn" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.ipAccessSettingsArn"></a>

```java
public java.lang.String getIpAccessSettingsArn();
```

- *Type:* java.lang.String

---

##### `ipRules`<sup>Required</sup> <a name="ipRules" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.ipRules"></a>

```java
public WorkspaceswebIpAccessSettingsIpRulesList getIpRules();
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesList">WorkspaceswebIpAccessSettingsIpRulesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.tags"></a>

```java
public WorkspaceswebIpAccessSettingsTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsList">WorkspaceswebIpAccessSettingsTagsList</a>

---

##### `additionalEncryptionContextInput`<sup>Optional</sup> <a name="additionalEncryptionContextInput" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.additionalEncryptionContextInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdditionalEncryptionContextInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `customerManagedKeyInput`<sup>Optional</sup> <a name="customerManagedKeyInput" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.customerManagedKeyInput"></a>

```java
public java.lang.String getCustomerManagedKeyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `ipRulesInput`<sup>Optional</sup> <a name="ipRulesInput" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.ipRulesInput"></a>

```java
public IResolvable|java.util.List<WorkspaceswebIpAccessSettingsIpRules> getIpRulesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRules">WorkspaceswebIpAccessSettingsIpRules</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.tagsInput"></a>

```java
public IResolvable|java.util.List<WorkspaceswebIpAccessSettingsTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTags">WorkspaceswebIpAccessSettingsTags</a>>

---

##### `additionalEncryptionContext`<sup>Required</sup> <a name="additionalEncryptionContext" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.additionalEncryptionContext"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdditionalEncryptionContext();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `customerManagedKey`<sup>Required</sup> <a name="customerManagedKey" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.customerManagedKey"></a>

```java
public java.lang.String getCustomerManagedKey();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspaceswebIpAccessSettingsConfig <a name="WorkspaceswebIpAccessSettingsConfig" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspacesweb_ip_access_settings.WorkspaceswebIpAccessSettingsConfig;

WorkspaceswebIpAccessSettingsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .ipRules(IResolvable|java.util.List<WorkspaceswebIpAccessSettingsIpRules>)
//  .additionalEncryptionContext(java.util.Map<java.lang.String, java.lang.String>)
//  .customerManagedKey(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .tags(IResolvable|java.util.List<WorkspaceswebIpAccessSettingsTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.ipRules">ipRules</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRules">WorkspaceswebIpAccessSettingsIpRules</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_ip_access_settings#ip_rules WorkspaceswebIpAccessSettings#ip_rules}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.additionalEncryptionContext">additionalEncryptionContext</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_ip_access_settings#additional_encryption_context WorkspaceswebIpAccessSettings#additional_encryption_context}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.customerManagedKey">customerManagedKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_ip_access_settings#customer_managed_key WorkspaceswebIpAccessSettings#customer_managed_key}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_ip_access_settings#description WorkspaceswebIpAccessSettings#description}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_ip_access_settings#display_name WorkspaceswebIpAccessSettings#display_name}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTags">WorkspaceswebIpAccessSettingsTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_ip_access_settings#tags WorkspaceswebIpAccessSettings#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `ipRules`<sup>Required</sup> <a name="ipRules" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.ipRules"></a>

```java
public IResolvable|java.util.List<WorkspaceswebIpAccessSettingsIpRules> getIpRules();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRules">WorkspaceswebIpAccessSettingsIpRules</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_ip_access_settings#ip_rules WorkspaceswebIpAccessSettings#ip_rules}.

---

##### `additionalEncryptionContext`<sup>Optional</sup> <a name="additionalEncryptionContext" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.additionalEncryptionContext"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdditionalEncryptionContext();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_ip_access_settings#additional_encryption_context WorkspaceswebIpAccessSettings#additional_encryption_context}.

---

##### `customerManagedKey`<sup>Optional</sup> <a name="customerManagedKey" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.customerManagedKey"></a>

```java
public java.lang.String getCustomerManagedKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_ip_access_settings#customer_managed_key WorkspaceswebIpAccessSettings#customer_managed_key}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_ip_access_settings#description WorkspaceswebIpAccessSettings#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_ip_access_settings#display_name WorkspaceswebIpAccessSettings#display_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.tags"></a>

```java
public IResolvable|java.util.List<WorkspaceswebIpAccessSettingsTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTags">WorkspaceswebIpAccessSettingsTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_ip_access_settings#tags WorkspaceswebIpAccessSettings#tags}.

---

### WorkspaceswebIpAccessSettingsIpRules <a name="WorkspaceswebIpAccessSettingsIpRules" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRules.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspacesweb_ip_access_settings.WorkspaceswebIpAccessSettingsIpRules;

WorkspaceswebIpAccessSettingsIpRules.builder()
    .ipRange(java.lang.String)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRules.property.ipRange">ipRange</a></code> | <code>java.lang.String</code> | A single IP address or an IP address range in CIDR notation. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRules.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_ip_access_settings#description WorkspaceswebIpAccessSettings#description}. |

---

##### `ipRange`<sup>Required</sup> <a name="ipRange" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRules.property.ipRange"></a>

```java
public java.lang.String getIpRange();
```

- *Type:* java.lang.String

A single IP address or an IP address range in CIDR notation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_ip_access_settings#ip_range WorkspaceswebIpAccessSettings#ip_range}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRules.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_ip_access_settings#description WorkspaceswebIpAccessSettings#description}.

---

### WorkspaceswebIpAccessSettingsTags <a name="WorkspaceswebIpAccessSettingsTags" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspacesweb_ip_access_settings.WorkspaceswebIpAccessSettingsTags;

WorkspaceswebIpAccessSettingsTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_ip_access_settings#key WorkspaceswebIpAccessSettings#key}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_ip_access_settings#value WorkspaceswebIpAccessSettings#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_ip_access_settings#key WorkspaceswebIpAccessSettings#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_ip_access_settings#value WorkspaceswebIpAccessSettings#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspaceswebIpAccessSettingsIpRulesList <a name="WorkspaceswebIpAccessSettingsIpRulesList" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspacesweb_ip_access_settings.WorkspaceswebIpAccessSettingsIpRulesList;

new WorkspaceswebIpAccessSettingsIpRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesList.get"></a>

```java
public WorkspaceswebIpAccessSettingsIpRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRules">WorkspaceswebIpAccessSettingsIpRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<WorkspaceswebIpAccessSettingsIpRules> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRules">WorkspaceswebIpAccessSettingsIpRules</a>>

---


### WorkspaceswebIpAccessSettingsIpRulesOutputReference <a name="WorkspaceswebIpAccessSettingsIpRulesOutputReference" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspacesweb_ip_access_settings.WorkspaceswebIpAccessSettingsIpRulesOutputReference;

new WorkspaceswebIpAccessSettingsIpRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.property.ipRangeInput">ipRangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.property.ipRange">ipRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRules">WorkspaceswebIpAccessSettingsIpRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `ipRangeInput`<sup>Optional</sup> <a name="ipRangeInput" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.property.ipRangeInput"></a>

```java
public java.lang.String getIpRangeInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `ipRange`<sup>Required</sup> <a name="ipRange" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.property.ipRange"></a>

```java
public java.lang.String getIpRange();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.property.internalValue"></a>

```java
public IResolvable|WorkspaceswebIpAccessSettingsIpRules getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRules">WorkspaceswebIpAccessSettingsIpRules</a>

---


### WorkspaceswebIpAccessSettingsTagsList <a name="WorkspaceswebIpAccessSettingsTagsList" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspacesweb_ip_access_settings.WorkspaceswebIpAccessSettingsTagsList;

new WorkspaceswebIpAccessSettingsTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsList.get"></a>

```java
public WorkspaceswebIpAccessSettingsTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTags">WorkspaceswebIpAccessSettingsTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<WorkspaceswebIpAccessSettingsTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTags">WorkspaceswebIpAccessSettingsTags</a>>

---


### WorkspaceswebIpAccessSettingsTagsOutputReference <a name="WorkspaceswebIpAccessSettingsTagsOutputReference" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspacesweb_ip_access_settings.WorkspaceswebIpAccessSettingsTagsOutputReference;

new WorkspaceswebIpAccessSettingsTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTags">WorkspaceswebIpAccessSettingsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|WorkspaceswebIpAccessSettingsTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTags">WorkspaceswebIpAccessSettingsTags</a>

---



