# `workspaceswebSessionLogger` Submodule <a name="`workspaceswebSessionLogger` Submodule" id="@cdktn/provider-awscc.workspaceswebSessionLogger"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspaceswebSessionLogger <a name="WorkspaceswebSessionLogger" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger awscc_workspacesweb_session_logger}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspacesweb_session_logger.WorkspaceswebSessionLogger;

WorkspaceswebSessionLogger.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .eventFilter(WorkspaceswebSessionLoggerEventFilter)
    .logConfiguration(WorkspaceswebSessionLoggerLogConfiguration)
//  .additionalEncryptionContext(java.util.Map<java.lang.String, java.lang.String>)
//  .customerManagedKey(java.lang.String)
//  .displayName(java.lang.String)
//  .tags(IResolvable|java.util.List<WorkspaceswebSessionLoggerTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.Initializer.parameter.eventFilter">eventFilter</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilter">WorkspaceswebSessionLoggerEventFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#event_filter WorkspaceswebSessionLogger#event_filter}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.Initializer.parameter.logConfiguration">logConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfiguration">WorkspaceswebSessionLoggerLogConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#log_configuration WorkspaceswebSessionLogger#log_configuration}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.Initializer.parameter.additionalEncryptionContext">additionalEncryptionContext</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#additional_encryption_context WorkspaceswebSessionLogger#additional_encryption_context}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.Initializer.parameter.customerManagedKey">customerManagedKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#customer_managed_key WorkspaceswebSessionLogger#customer_managed_key}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#display_name WorkspaceswebSessionLogger#display_name}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTags">WorkspaceswebSessionLoggerTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#tags WorkspaceswebSessionLogger#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `eventFilter`<sup>Required</sup> <a name="eventFilter" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.Initializer.parameter.eventFilter"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilter">WorkspaceswebSessionLoggerEventFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#event_filter WorkspaceswebSessionLogger#event_filter}.

---

##### `logConfiguration`<sup>Required</sup> <a name="logConfiguration" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.Initializer.parameter.logConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfiguration">WorkspaceswebSessionLoggerLogConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#log_configuration WorkspaceswebSessionLogger#log_configuration}.

---

##### `additionalEncryptionContext`<sup>Optional</sup> <a name="additionalEncryptionContext" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.Initializer.parameter.additionalEncryptionContext"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#additional_encryption_context WorkspaceswebSessionLogger#additional_encryption_context}.

---

##### `customerManagedKey`<sup>Optional</sup> <a name="customerManagedKey" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.Initializer.parameter.customerManagedKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#customer_managed_key WorkspaceswebSessionLogger#customer_managed_key}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#display_name WorkspaceswebSessionLogger#display_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTags">WorkspaceswebSessionLoggerTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#tags WorkspaceswebSessionLogger#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.putEventFilter">putEventFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.putLogConfiguration">putLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.resetAdditionalEncryptionContext">resetAdditionalEncryptionContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.resetCustomerManagedKey">resetCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEventFilter` <a name="putEventFilter" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.putEventFilter"></a>

```java
public void putEventFilter(WorkspaceswebSessionLoggerEventFilter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.putEventFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilter">WorkspaceswebSessionLoggerEventFilter</a>

---

##### `putLogConfiguration` <a name="putLogConfiguration" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.putLogConfiguration"></a>

```java
public void putLogConfiguration(WorkspaceswebSessionLoggerLogConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.putLogConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfiguration">WorkspaceswebSessionLoggerLogConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<WorkspaceswebSessionLoggerTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTags">WorkspaceswebSessionLoggerTags</a>>

---

##### `resetAdditionalEncryptionContext` <a name="resetAdditionalEncryptionContext" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.resetAdditionalEncryptionContext"></a>

```java
public void resetAdditionalEncryptionContext()
```

##### `resetCustomerManagedKey` <a name="resetCustomerManagedKey" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.resetCustomerManagedKey"></a>

```java
public void resetCustomerManagedKey()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a WorkspaceswebSessionLogger resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.isConstruct"></a>

```java
import io.cdktn.providers.awscc.workspacesweb_session_logger.WorkspaceswebSessionLogger;

WorkspaceswebSessionLogger.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.workspacesweb_session_logger.WorkspaceswebSessionLogger;

WorkspaceswebSessionLogger.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.workspacesweb_session_logger.WorkspaceswebSessionLogger;

WorkspaceswebSessionLogger.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.workspacesweb_session_logger.WorkspaceswebSessionLogger;

WorkspaceswebSessionLogger.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),WorkspaceswebSessionLogger.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a WorkspaceswebSessionLogger resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the WorkspaceswebSessionLogger to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing WorkspaceswebSessionLogger that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the WorkspaceswebSessionLogger to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.associatedPortalArns">associatedPortalArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.creationDate">creationDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.eventFilter">eventFilter</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference">WorkspaceswebSessionLoggerEventFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.logConfiguration">logConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference">WorkspaceswebSessionLoggerLogConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.sessionLoggerArn">sessionLoggerArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsList">WorkspaceswebSessionLoggerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.additionalEncryptionContextInput">additionalEncryptionContextInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.customerManagedKeyInput">customerManagedKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.eventFilterInput">eventFilterInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilter">WorkspaceswebSessionLoggerEventFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.logConfigurationInput">logConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfiguration">WorkspaceswebSessionLoggerLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTags">WorkspaceswebSessionLoggerTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.additionalEncryptionContext">additionalEncryptionContext</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.customerManagedKey">customerManagedKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `associatedPortalArns`<sup>Required</sup> <a name="associatedPortalArns" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.associatedPortalArns"></a>

```java
public java.util.List<java.lang.String> getAssociatedPortalArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `creationDate`<sup>Required</sup> <a name="creationDate" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.creationDate"></a>

```java
public java.lang.String getCreationDate();
```

- *Type:* java.lang.String

---

##### `eventFilter`<sup>Required</sup> <a name="eventFilter" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.eventFilter"></a>

```java
public WorkspaceswebSessionLoggerEventFilterOutputReference getEventFilter();
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference">WorkspaceswebSessionLoggerEventFilterOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `logConfiguration`<sup>Required</sup> <a name="logConfiguration" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.logConfiguration"></a>

```java
public WorkspaceswebSessionLoggerLogConfigurationOutputReference getLogConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference">WorkspaceswebSessionLoggerLogConfigurationOutputReference</a>

---

##### `sessionLoggerArn`<sup>Required</sup> <a name="sessionLoggerArn" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.sessionLoggerArn"></a>

```java
public java.lang.String getSessionLoggerArn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.tags"></a>

```java
public WorkspaceswebSessionLoggerTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsList">WorkspaceswebSessionLoggerTagsList</a>

---

##### `additionalEncryptionContextInput`<sup>Optional</sup> <a name="additionalEncryptionContextInput" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.additionalEncryptionContextInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdditionalEncryptionContextInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `customerManagedKeyInput`<sup>Optional</sup> <a name="customerManagedKeyInput" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.customerManagedKeyInput"></a>

```java
public java.lang.String getCustomerManagedKeyInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `eventFilterInput`<sup>Optional</sup> <a name="eventFilterInput" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.eventFilterInput"></a>

```java
public IResolvable|WorkspaceswebSessionLoggerEventFilter getEventFilterInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilter">WorkspaceswebSessionLoggerEventFilter</a>

---

##### `logConfigurationInput`<sup>Optional</sup> <a name="logConfigurationInput" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.logConfigurationInput"></a>

```java
public IResolvable|WorkspaceswebSessionLoggerLogConfiguration getLogConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfiguration">WorkspaceswebSessionLoggerLogConfiguration</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.tagsInput"></a>

```java
public IResolvable|java.util.List<WorkspaceswebSessionLoggerTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTags">WorkspaceswebSessionLoggerTags</a>>

---

##### `additionalEncryptionContext`<sup>Required</sup> <a name="additionalEncryptionContext" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.additionalEncryptionContext"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdditionalEncryptionContext();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `customerManagedKey`<sup>Required</sup> <a name="customerManagedKey" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.customerManagedKey"></a>

```java
public java.lang.String getCustomerManagedKey();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspaceswebSessionLoggerConfig <a name="WorkspaceswebSessionLoggerConfig" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspacesweb_session_logger.WorkspaceswebSessionLoggerConfig;

WorkspaceswebSessionLoggerConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .eventFilter(WorkspaceswebSessionLoggerEventFilter)
    .logConfiguration(WorkspaceswebSessionLoggerLogConfiguration)
//  .additionalEncryptionContext(java.util.Map<java.lang.String, java.lang.String>)
//  .customerManagedKey(java.lang.String)
//  .displayName(java.lang.String)
//  .tags(IResolvable|java.util.List<WorkspaceswebSessionLoggerTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.eventFilter">eventFilter</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilter">WorkspaceswebSessionLoggerEventFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#event_filter WorkspaceswebSessionLogger#event_filter}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.logConfiguration">logConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfiguration">WorkspaceswebSessionLoggerLogConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#log_configuration WorkspaceswebSessionLogger#log_configuration}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.additionalEncryptionContext">additionalEncryptionContext</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#additional_encryption_context WorkspaceswebSessionLogger#additional_encryption_context}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.customerManagedKey">customerManagedKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#customer_managed_key WorkspaceswebSessionLogger#customer_managed_key}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#display_name WorkspaceswebSessionLogger#display_name}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTags">WorkspaceswebSessionLoggerTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#tags WorkspaceswebSessionLogger#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `eventFilter`<sup>Required</sup> <a name="eventFilter" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.eventFilter"></a>

```java
public WorkspaceswebSessionLoggerEventFilter getEventFilter();
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilter">WorkspaceswebSessionLoggerEventFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#event_filter WorkspaceswebSessionLogger#event_filter}.

---

##### `logConfiguration`<sup>Required</sup> <a name="logConfiguration" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.logConfiguration"></a>

```java
public WorkspaceswebSessionLoggerLogConfiguration getLogConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfiguration">WorkspaceswebSessionLoggerLogConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#log_configuration WorkspaceswebSessionLogger#log_configuration}.

---

##### `additionalEncryptionContext`<sup>Optional</sup> <a name="additionalEncryptionContext" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.additionalEncryptionContext"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdditionalEncryptionContext();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#additional_encryption_context WorkspaceswebSessionLogger#additional_encryption_context}.

---

##### `customerManagedKey`<sup>Optional</sup> <a name="customerManagedKey" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.customerManagedKey"></a>

```java
public java.lang.String getCustomerManagedKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#customer_managed_key WorkspaceswebSessionLogger#customer_managed_key}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#display_name WorkspaceswebSessionLogger#display_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.tags"></a>

```java
public IResolvable|java.util.List<WorkspaceswebSessionLoggerTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTags">WorkspaceswebSessionLoggerTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#tags WorkspaceswebSessionLogger#tags}.

---

### WorkspaceswebSessionLoggerEventFilter <a name="WorkspaceswebSessionLoggerEventFilter" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilter.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspacesweb_session_logger.WorkspaceswebSessionLoggerEventFilter;

WorkspaceswebSessionLoggerEventFilter.builder()
//  .all(java.lang.String)
//  .include(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilter.property.all">all</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#all WorkspaceswebSessionLogger#all}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilter.property.include">include</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#include WorkspaceswebSessionLogger#include}. |

---

##### `all`<sup>Optional</sup> <a name="all" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilter.property.all"></a>

```java
public java.lang.String getAll();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#all WorkspaceswebSessionLogger#all}.

---

##### `include`<sup>Optional</sup> <a name="include" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilter.property.include"></a>

```java
public java.util.List<java.lang.String> getInclude();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#include WorkspaceswebSessionLogger#include}.

---

### WorkspaceswebSessionLoggerLogConfiguration <a name="WorkspaceswebSessionLoggerLogConfiguration" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspacesweb_session_logger.WorkspaceswebSessionLoggerLogConfiguration;

WorkspaceswebSessionLoggerLogConfiguration.builder()
//  .s3(WorkspaceswebSessionLoggerLogConfigurationS3)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfiguration.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3">WorkspaceswebSessionLoggerLogConfigurationS3</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#s3 WorkspaceswebSessionLogger#s3}. |

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfiguration.property.s3"></a>

```java
public WorkspaceswebSessionLoggerLogConfigurationS3 getS3();
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3">WorkspaceswebSessionLoggerLogConfigurationS3</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#s3 WorkspaceswebSessionLogger#s3}.

---

### WorkspaceswebSessionLoggerLogConfigurationS3 <a name="WorkspaceswebSessionLoggerLogConfigurationS3" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspacesweb_session_logger.WorkspaceswebSessionLoggerLogConfigurationS3;

WorkspaceswebSessionLoggerLogConfigurationS3.builder()
//  .bucket(java.lang.String)
//  .bucketOwner(java.lang.String)
//  .folderStructure(java.lang.String)
//  .keyPrefix(java.lang.String)
//  .logFileFormat(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#bucket WorkspaceswebSessionLogger#bucket}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3.property.bucketOwner">bucketOwner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#bucket_owner WorkspaceswebSessionLogger#bucket_owner}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3.property.folderStructure">folderStructure</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#folder_structure WorkspaceswebSessionLogger#folder_structure}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3.property.keyPrefix">keyPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#key_prefix WorkspaceswebSessionLogger#key_prefix}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3.property.logFileFormat">logFileFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#log_file_format WorkspaceswebSessionLogger#log_file_format}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#bucket WorkspaceswebSessionLogger#bucket}.

---

##### `bucketOwner`<sup>Optional</sup> <a name="bucketOwner" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3.property.bucketOwner"></a>

```java
public java.lang.String getBucketOwner();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#bucket_owner WorkspaceswebSessionLogger#bucket_owner}.

---

##### `folderStructure`<sup>Optional</sup> <a name="folderStructure" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3.property.folderStructure"></a>

```java
public java.lang.String getFolderStructure();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#folder_structure WorkspaceswebSessionLogger#folder_structure}.

---

##### `keyPrefix`<sup>Optional</sup> <a name="keyPrefix" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3.property.keyPrefix"></a>

```java
public java.lang.String getKeyPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#key_prefix WorkspaceswebSessionLogger#key_prefix}.

---

##### `logFileFormat`<sup>Optional</sup> <a name="logFileFormat" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3.property.logFileFormat"></a>

```java
public java.lang.String getLogFileFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#log_file_format WorkspaceswebSessionLogger#log_file_format}.

---

### WorkspaceswebSessionLoggerTags <a name="WorkspaceswebSessionLoggerTags" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspacesweb_session_logger.WorkspaceswebSessionLoggerTags;

WorkspaceswebSessionLoggerTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#key WorkspaceswebSessionLogger#key}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#value WorkspaceswebSessionLogger#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#key WorkspaceswebSessionLogger#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#value WorkspaceswebSessionLogger#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspaceswebSessionLoggerEventFilterOutputReference <a name="WorkspaceswebSessionLoggerEventFilterOutputReference" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspacesweb_session_logger.WorkspaceswebSessionLoggerEventFilterOutputReference;

new WorkspaceswebSessionLoggerEventFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.resetAll">resetAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.resetInclude">resetInclude</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAll` <a name="resetAll" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.resetAll"></a>

```java
public void resetAll()
```

##### `resetInclude` <a name="resetInclude" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.resetInclude"></a>

```java
public void resetInclude()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.property.allInput">allInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.property.includeInput">includeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.property.all">all</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.property.include">include</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilter">WorkspaceswebSessionLoggerEventFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allInput`<sup>Optional</sup> <a name="allInput" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.property.allInput"></a>

```java
public java.lang.String getAllInput();
```

- *Type:* java.lang.String

---

##### `includeInput`<sup>Optional</sup> <a name="includeInput" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.property.includeInput"></a>

```java
public java.util.List<java.lang.String> getIncludeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `all`<sup>Required</sup> <a name="all" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.property.all"></a>

```java
public java.lang.String getAll();
```

- *Type:* java.lang.String

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.property.include"></a>

```java
public java.util.List<java.lang.String> getInclude();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.property.internalValue"></a>

```java
public IResolvable|WorkspaceswebSessionLoggerEventFilter getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilter">WorkspaceswebSessionLoggerEventFilter</a>

---


### WorkspaceswebSessionLoggerLogConfigurationOutputReference <a name="WorkspaceswebSessionLoggerLogConfigurationOutputReference" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspacesweb_session_logger.WorkspaceswebSessionLoggerLogConfigurationOutputReference;

new WorkspaceswebSessionLoggerLogConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.putS3">putS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.resetS3">resetS3</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3` <a name="putS3" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.putS3"></a>

```java
public void putS3(WorkspaceswebSessionLoggerLogConfigurationS3 value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3">WorkspaceswebSessionLoggerLogConfigurationS3</a>

---

##### `resetS3` <a name="resetS3" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.resetS3"></a>

```java
public void resetS3()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference">WorkspaceswebSessionLoggerLogConfigurationS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.property.s3Input">s3Input</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3">WorkspaceswebSessionLoggerLogConfigurationS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfiguration">WorkspaceswebSessionLoggerLogConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.property.s3"></a>

```java
public WorkspaceswebSessionLoggerLogConfigurationS3OutputReference getS3();
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference">WorkspaceswebSessionLoggerLogConfigurationS3OutputReference</a>

---

##### `s3Input`<sup>Optional</sup> <a name="s3Input" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.property.s3Input"></a>

```java
public IResolvable|WorkspaceswebSessionLoggerLogConfigurationS3 getS3Input();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3">WorkspaceswebSessionLoggerLogConfigurationS3</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|WorkspaceswebSessionLoggerLogConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfiguration">WorkspaceswebSessionLoggerLogConfiguration</a>

---


### WorkspaceswebSessionLoggerLogConfigurationS3OutputReference <a name="WorkspaceswebSessionLoggerLogConfigurationS3OutputReference" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspacesweb_session_logger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference;

new WorkspaceswebSessionLoggerLogConfigurationS3OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.resetBucketOwner">resetBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.resetFolderStructure">resetFolderStructure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.resetKeyPrefix">resetKeyPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.resetLogFileFormat">resetLogFileFormat</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.resetBucket"></a>

```java
public void resetBucket()
```

##### `resetBucketOwner` <a name="resetBucketOwner" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.resetBucketOwner"></a>

```java
public void resetBucketOwner()
```

##### `resetFolderStructure` <a name="resetFolderStructure" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.resetFolderStructure"></a>

```java
public void resetFolderStructure()
```

##### `resetKeyPrefix` <a name="resetKeyPrefix" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.resetKeyPrefix"></a>

```java
public void resetKeyPrefix()
```

##### `resetLogFileFormat` <a name="resetLogFileFormat" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.resetLogFileFormat"></a>

```java
public void resetLogFileFormat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.bucketOwnerInput">bucketOwnerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.folderStructureInput">folderStructureInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.keyPrefixInput">keyPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.logFileFormatInput">logFileFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.bucketOwner">bucketOwner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.folderStructure">folderStructure</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.keyPrefix">keyPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.logFileFormat">logFileFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3">WorkspaceswebSessionLoggerLogConfigurationS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `bucketOwnerInput`<sup>Optional</sup> <a name="bucketOwnerInput" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.bucketOwnerInput"></a>

```java
public java.lang.String getBucketOwnerInput();
```

- *Type:* java.lang.String

---

##### `folderStructureInput`<sup>Optional</sup> <a name="folderStructureInput" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.folderStructureInput"></a>

```java
public java.lang.String getFolderStructureInput();
```

- *Type:* java.lang.String

---

##### `keyPrefixInput`<sup>Optional</sup> <a name="keyPrefixInput" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.keyPrefixInput"></a>

```java
public java.lang.String getKeyPrefixInput();
```

- *Type:* java.lang.String

---

##### `logFileFormatInput`<sup>Optional</sup> <a name="logFileFormatInput" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.logFileFormatInput"></a>

```java
public java.lang.String getLogFileFormatInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `bucketOwner`<sup>Required</sup> <a name="bucketOwner" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.bucketOwner"></a>

```java
public java.lang.String getBucketOwner();
```

- *Type:* java.lang.String

---

##### `folderStructure`<sup>Required</sup> <a name="folderStructure" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.folderStructure"></a>

```java
public java.lang.String getFolderStructure();
```

- *Type:* java.lang.String

---

##### `keyPrefix`<sup>Required</sup> <a name="keyPrefix" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.keyPrefix"></a>

```java
public java.lang.String getKeyPrefix();
```

- *Type:* java.lang.String

---

##### `logFileFormat`<sup>Required</sup> <a name="logFileFormat" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.logFileFormat"></a>

```java
public java.lang.String getLogFileFormat();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.internalValue"></a>

```java
public IResolvable|WorkspaceswebSessionLoggerLogConfigurationS3 getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3">WorkspaceswebSessionLoggerLogConfigurationS3</a>

---


### WorkspaceswebSessionLoggerTagsList <a name="WorkspaceswebSessionLoggerTagsList" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspacesweb_session_logger.WorkspaceswebSessionLoggerTagsList;

new WorkspaceswebSessionLoggerTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsList.get"></a>

```java
public WorkspaceswebSessionLoggerTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTags">WorkspaceswebSessionLoggerTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<WorkspaceswebSessionLoggerTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTags">WorkspaceswebSessionLoggerTags</a>>

---


### WorkspaceswebSessionLoggerTagsOutputReference <a name="WorkspaceswebSessionLoggerTagsOutputReference" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspacesweb_session_logger.WorkspaceswebSessionLoggerTagsOutputReference;

new WorkspaceswebSessionLoggerTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTags">WorkspaceswebSessionLoggerTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|WorkspaceswebSessionLoggerTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTags">WorkspaceswebSessionLoggerTags</a>

---



