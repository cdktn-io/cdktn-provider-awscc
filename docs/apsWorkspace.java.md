# `apsWorkspace` Submodule <a name="`apsWorkspace` Submodule" id="@cdktn/provider-awscc.apsWorkspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApsWorkspace <a name="ApsWorkspace" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_workspace awscc_aps_workspace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.Initializer"></a>

```java
import io.cdktn.providers.awscc.aps_workspace.ApsWorkspace;

ApsWorkspace.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .alertManagerDefinition(java.lang.String)
//  .alias(java.lang.String)
//  .kmsKeyArn(java.lang.String)
//  .loggingConfiguration(ApsWorkspaceLoggingConfiguration)
//  .queryLoggingConfiguration(ApsWorkspaceQueryLoggingConfiguration)
//  .tags(IResolvable|java.util.List<ApsWorkspaceTags>)
//  .workspaceConfiguration(ApsWorkspaceWorkspaceConfiguration)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.Initializer.parameter.alertManagerDefinition">alertManagerDefinition</a></code> | <code>java.lang.String</code> | The AMP Workspace alert manager definition data. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.Initializer.parameter.alias">alias</a></code> | <code>java.lang.String</code> | AMP Workspace alias. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.Initializer.parameter.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | KMS Key ARN used to encrypt and decrypt AMP workspace data. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.Initializer.parameter.loggingConfiguration">loggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfiguration">ApsWorkspaceLoggingConfiguration</a></code> | Logging configuration. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.Initializer.parameter.queryLoggingConfiguration">queryLoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfiguration">ApsWorkspaceQueryLoggingConfiguration</a></code> | Query logging configuration. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTags">ApsWorkspaceTags</a>></code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.Initializer.parameter.workspaceConfiguration">workspaceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfiguration">ApsWorkspaceWorkspaceConfiguration</a></code> | Workspace configuration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `alertManagerDefinition`<sup>Optional</sup> <a name="alertManagerDefinition" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.Initializer.parameter.alertManagerDefinition"></a>

- *Type:* java.lang.String

The AMP Workspace alert manager definition data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_workspace#alert_manager_definition ApsWorkspace#alert_manager_definition}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.Initializer.parameter.alias"></a>

- *Type:* java.lang.String

AMP Workspace alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_workspace#alias ApsWorkspace#alias}

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.Initializer.parameter.kmsKeyArn"></a>

- *Type:* java.lang.String

KMS Key ARN used to encrypt and decrypt AMP workspace data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_workspace#kms_key_arn ApsWorkspace#kms_key_arn}

---

##### `loggingConfiguration`<sup>Optional</sup> <a name="loggingConfiguration" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.Initializer.parameter.loggingConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfiguration">ApsWorkspaceLoggingConfiguration</a>

Logging configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_workspace#logging_configuration ApsWorkspace#logging_configuration}

---

##### `queryLoggingConfiguration`<sup>Optional</sup> <a name="queryLoggingConfiguration" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.Initializer.parameter.queryLoggingConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfiguration">ApsWorkspaceQueryLoggingConfiguration</a>

Query logging configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_workspace#query_logging_configuration ApsWorkspace#query_logging_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTags">ApsWorkspaceTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_workspace#tags ApsWorkspace#tags}

---

##### `workspaceConfiguration`<sup>Optional</sup> <a name="workspaceConfiguration" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.Initializer.parameter.workspaceConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfiguration">ApsWorkspaceWorkspaceConfiguration</a>

Workspace configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_workspace#workspace_configuration ApsWorkspace#workspace_configuration}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.putLoggingConfiguration">putLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.putQueryLoggingConfiguration">putQueryLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.putWorkspaceConfiguration">putWorkspaceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.resetAlertManagerDefinition">resetAlertManagerDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.resetLoggingConfiguration">resetLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.resetQueryLoggingConfiguration">resetQueryLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.resetWorkspaceConfiguration">resetWorkspaceConfiguration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLoggingConfiguration` <a name="putLoggingConfiguration" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.putLoggingConfiguration"></a>

```java
public void putLoggingConfiguration(ApsWorkspaceLoggingConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.putLoggingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfiguration">ApsWorkspaceLoggingConfiguration</a>

---

##### `putQueryLoggingConfiguration` <a name="putQueryLoggingConfiguration" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.putQueryLoggingConfiguration"></a>

```java
public void putQueryLoggingConfiguration(ApsWorkspaceQueryLoggingConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.putQueryLoggingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfiguration">ApsWorkspaceQueryLoggingConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<ApsWorkspaceTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTags">ApsWorkspaceTags</a>>

---

##### `putWorkspaceConfiguration` <a name="putWorkspaceConfiguration" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.putWorkspaceConfiguration"></a>

```java
public void putWorkspaceConfiguration(ApsWorkspaceWorkspaceConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.putWorkspaceConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfiguration">ApsWorkspaceWorkspaceConfiguration</a>

---

##### `resetAlertManagerDefinition` <a name="resetAlertManagerDefinition" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.resetAlertManagerDefinition"></a>

```java
public void resetAlertManagerDefinition()
```

##### `resetAlias` <a name="resetAlias" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.resetAlias"></a>

```java
public void resetAlias()
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.resetKmsKeyArn"></a>

```java
public void resetKmsKeyArn()
```

##### `resetLoggingConfiguration` <a name="resetLoggingConfiguration" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.resetLoggingConfiguration"></a>

```java
public void resetLoggingConfiguration()
```

##### `resetQueryLoggingConfiguration` <a name="resetQueryLoggingConfiguration" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.resetQueryLoggingConfiguration"></a>

```java
public void resetQueryLoggingConfiguration()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.resetTags"></a>

```java
public void resetTags()
```

##### `resetWorkspaceConfiguration` <a name="resetWorkspaceConfiguration" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.resetWorkspaceConfiguration"></a>

```java
public void resetWorkspaceConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApsWorkspace resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.isConstruct"></a>

```java
import io.cdktn.providers.awscc.aps_workspace.ApsWorkspace;

ApsWorkspace.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.aps_workspace.ApsWorkspace;

ApsWorkspace.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.aps_workspace.ApsWorkspace;

ApsWorkspace.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.aps_workspace.ApsWorkspace;

ApsWorkspace.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApsWorkspace.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ApsWorkspace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApsWorkspace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApsWorkspace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_workspace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ApsWorkspace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.loggingConfiguration">loggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference">ApsWorkspaceLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.prometheusEndpoint">prometheusEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.queryLoggingConfiguration">queryLoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference">ApsWorkspaceQueryLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList">ApsWorkspaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.workspaceConfiguration">workspaceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference">ApsWorkspaceWorkspaceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.alertManagerDefinitionInput">alertManagerDefinitionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.loggingConfigurationInput">loggingConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfiguration">ApsWorkspaceLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.queryLoggingConfigurationInput">queryLoggingConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfiguration">ApsWorkspaceQueryLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTags">ApsWorkspaceTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.workspaceConfigurationInput">workspaceConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfiguration">ApsWorkspaceWorkspaceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.alertManagerDefinition">alertManagerDefinition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `loggingConfiguration`<sup>Required</sup> <a name="loggingConfiguration" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.loggingConfiguration"></a>

```java
public ApsWorkspaceLoggingConfigurationOutputReference getLoggingConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference">ApsWorkspaceLoggingConfigurationOutputReference</a>

---

##### `prometheusEndpoint`<sup>Required</sup> <a name="prometheusEndpoint" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.prometheusEndpoint"></a>

```java
public java.lang.String getPrometheusEndpoint();
```

- *Type:* java.lang.String

---

##### `queryLoggingConfiguration`<sup>Required</sup> <a name="queryLoggingConfiguration" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.queryLoggingConfiguration"></a>

```java
public ApsWorkspaceQueryLoggingConfigurationOutputReference getQueryLoggingConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference">ApsWorkspaceQueryLoggingConfigurationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.tags"></a>

```java
public ApsWorkspaceTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList">ApsWorkspaceTagsList</a>

---

##### `workspaceConfiguration`<sup>Required</sup> <a name="workspaceConfiguration" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.workspaceConfiguration"></a>

```java
public ApsWorkspaceWorkspaceConfigurationOutputReference getWorkspaceConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference">ApsWorkspaceWorkspaceConfigurationOutputReference</a>

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `alertManagerDefinitionInput`<sup>Optional</sup> <a name="alertManagerDefinitionInput" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.alertManagerDefinitionInput"></a>

```java
public java.lang.String getAlertManagerDefinitionInput();
```

- *Type:* java.lang.String

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.kmsKeyArnInput"></a>

```java
public java.lang.String getKmsKeyArnInput();
```

- *Type:* java.lang.String

---

##### `loggingConfigurationInput`<sup>Optional</sup> <a name="loggingConfigurationInput" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.loggingConfigurationInput"></a>

```java
public IResolvable|ApsWorkspaceLoggingConfiguration getLoggingConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfiguration">ApsWorkspaceLoggingConfiguration</a>

---

##### `queryLoggingConfigurationInput`<sup>Optional</sup> <a name="queryLoggingConfigurationInput" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.queryLoggingConfigurationInput"></a>

```java
public IResolvable|ApsWorkspaceQueryLoggingConfiguration getQueryLoggingConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfiguration">ApsWorkspaceQueryLoggingConfiguration</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.tagsInput"></a>

```java
public IResolvable|java.util.List<ApsWorkspaceTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTags">ApsWorkspaceTags</a>>

---

##### `workspaceConfigurationInput`<sup>Optional</sup> <a name="workspaceConfigurationInput" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.workspaceConfigurationInput"></a>

```java
public IResolvable|ApsWorkspaceWorkspaceConfiguration getWorkspaceConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfiguration">ApsWorkspaceWorkspaceConfiguration</a>

---

##### `alertManagerDefinition`<sup>Required</sup> <a name="alertManagerDefinition" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.alertManagerDefinition"></a>

```java
public java.lang.String getAlertManagerDefinition();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApsWorkspaceConfig <a name="ApsWorkspaceConfig" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.aps_workspace.ApsWorkspaceConfig;

ApsWorkspaceConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .alertManagerDefinition(java.lang.String)
//  .alias(java.lang.String)
//  .kmsKeyArn(java.lang.String)
//  .loggingConfiguration(ApsWorkspaceLoggingConfiguration)
//  .queryLoggingConfiguration(ApsWorkspaceQueryLoggingConfiguration)
//  .tags(IResolvable|java.util.List<ApsWorkspaceTags>)
//  .workspaceConfiguration(ApsWorkspaceWorkspaceConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.alertManagerDefinition">alertManagerDefinition</a></code> | <code>java.lang.String</code> | The AMP Workspace alert manager definition data. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.alias">alias</a></code> | <code>java.lang.String</code> | AMP Workspace alias. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | KMS Key ARN used to encrypt and decrypt AMP workspace data. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.loggingConfiguration">loggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfiguration">ApsWorkspaceLoggingConfiguration</a></code> | Logging configuration. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.queryLoggingConfiguration">queryLoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfiguration">ApsWorkspaceQueryLoggingConfiguration</a></code> | Query logging configuration. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTags">ApsWorkspaceTags</a>></code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.workspaceConfiguration">workspaceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfiguration">ApsWorkspaceWorkspaceConfiguration</a></code> | Workspace configuration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `alertManagerDefinition`<sup>Optional</sup> <a name="alertManagerDefinition" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.alertManagerDefinition"></a>

```java
public java.lang.String getAlertManagerDefinition();
```

- *Type:* java.lang.String

The AMP Workspace alert manager definition data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_workspace#alert_manager_definition ApsWorkspace#alert_manager_definition}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

AMP Workspace alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_workspace#alias ApsWorkspace#alias}

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

KMS Key ARN used to encrypt and decrypt AMP workspace data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_workspace#kms_key_arn ApsWorkspace#kms_key_arn}

---

##### `loggingConfiguration`<sup>Optional</sup> <a name="loggingConfiguration" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.loggingConfiguration"></a>

```java
public ApsWorkspaceLoggingConfiguration getLoggingConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfiguration">ApsWorkspaceLoggingConfiguration</a>

Logging configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_workspace#logging_configuration ApsWorkspace#logging_configuration}

---

##### `queryLoggingConfiguration`<sup>Optional</sup> <a name="queryLoggingConfiguration" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.queryLoggingConfiguration"></a>

```java
public ApsWorkspaceQueryLoggingConfiguration getQueryLoggingConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfiguration">ApsWorkspaceQueryLoggingConfiguration</a>

Query logging configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_workspace#query_logging_configuration ApsWorkspace#query_logging_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.tags"></a>

```java
public IResolvable|java.util.List<ApsWorkspaceTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTags">ApsWorkspaceTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_workspace#tags ApsWorkspace#tags}

---

##### `workspaceConfiguration`<sup>Optional</sup> <a name="workspaceConfiguration" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.workspaceConfiguration"></a>

```java
public ApsWorkspaceWorkspaceConfiguration getWorkspaceConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfiguration">ApsWorkspaceWorkspaceConfiguration</a>

Workspace configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_workspace#workspace_configuration ApsWorkspace#workspace_configuration}

---

### ApsWorkspaceLoggingConfiguration <a name="ApsWorkspaceLoggingConfiguration" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.aps_workspace.ApsWorkspaceLoggingConfiguration;

ApsWorkspaceLoggingConfiguration.builder()
//  .logGroupArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfiguration.property.logGroupArn">logGroupArn</a></code> | <code>java.lang.String</code> | CloudWatch log group ARN. |

---

##### `logGroupArn`<sup>Optional</sup> <a name="logGroupArn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfiguration.property.logGroupArn"></a>

```java
public java.lang.String getLogGroupArn();
```

- *Type:* java.lang.String

CloudWatch log group ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_workspace#log_group_arn ApsWorkspace#log_group_arn}

---

### ApsWorkspaceQueryLoggingConfiguration <a name="ApsWorkspaceQueryLoggingConfiguration" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.aps_workspace.ApsWorkspaceQueryLoggingConfiguration;

ApsWorkspaceQueryLoggingConfiguration.builder()
//  .destinations(IResolvable|java.util.List<ApsWorkspaceQueryLoggingConfigurationDestinations>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfiguration.property.destinations">destinations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinations">ApsWorkspaceQueryLoggingConfigurationDestinations</a>></code> | The destinations configuration for query logging. |

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfiguration.property.destinations"></a>

```java
public IResolvable|java.util.List<ApsWorkspaceQueryLoggingConfigurationDestinations> getDestinations();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinations">ApsWorkspaceQueryLoggingConfigurationDestinations</a>>

The destinations configuration for query logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_workspace#destinations ApsWorkspace#destinations}

---

### ApsWorkspaceQueryLoggingConfigurationDestinations <a name="ApsWorkspaceQueryLoggingConfigurationDestinations" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinations.Initializer"></a>

```java
import io.cdktn.providers.awscc.aps_workspace.ApsWorkspaceQueryLoggingConfigurationDestinations;

ApsWorkspaceQueryLoggingConfigurationDestinations.builder()
//  .cloudwatchLogs(ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs)
//  .filters(ApsWorkspaceQueryLoggingConfigurationDestinationsFilters)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinations.property.cloudwatchLogs">cloudwatchLogs</a></code> | <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs">ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs</a></code> | Represents a cloudwatch logs destination for query logging. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinations.property.filters">filters</a></code> | <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFilters">ApsWorkspaceQueryLoggingConfigurationDestinationsFilters</a></code> | Filters for logging. |

---

##### `cloudwatchLogs`<sup>Optional</sup> <a name="cloudwatchLogs" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinations.property.cloudwatchLogs"></a>

```java
public ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs getCloudwatchLogs();
```

- *Type:* <a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs">ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs</a>

Represents a cloudwatch logs destination for query logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_workspace#cloudwatch_logs ApsWorkspace#cloudwatch_logs}

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinations.property.filters"></a>

```java
public ApsWorkspaceQueryLoggingConfigurationDestinationsFilters getFilters();
```

- *Type:* <a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFilters">ApsWorkspaceQueryLoggingConfigurationDestinationsFilters</a>

Filters for logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_workspace#filters ApsWorkspace#filters}

---

### ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs <a name="ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs.Initializer"></a>

```java
import io.cdktn.providers.awscc.aps_workspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs;

ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs.builder()
//  .logGroupArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs.property.logGroupArn">logGroupArn</a></code> | <code>java.lang.String</code> | The ARN of the CloudWatch Logs log group. |

---

##### `logGroupArn`<sup>Optional</sup> <a name="logGroupArn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs.property.logGroupArn"></a>

```java
public java.lang.String getLogGroupArn();
```

- *Type:* java.lang.String

The ARN of the CloudWatch Logs log group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_workspace#log_group_arn ApsWorkspace#log_group_arn}

---

### ApsWorkspaceQueryLoggingConfigurationDestinationsFilters <a name="ApsWorkspaceQueryLoggingConfigurationDestinationsFilters" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFilters.Initializer"></a>

```java
import io.cdktn.providers.awscc.aps_workspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFilters;

ApsWorkspaceQueryLoggingConfigurationDestinationsFilters.builder()
//  .qspThreshold(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFilters.property.qspThreshold">qspThreshold</a></code> | <code>java.lang.Number</code> | Query logs with QSP above this limit are vended. |

---

##### `qspThreshold`<sup>Optional</sup> <a name="qspThreshold" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFilters.property.qspThreshold"></a>

```java
public java.lang.Number getQspThreshold();
```

- *Type:* java.lang.Number

Query logs with QSP above this limit are vended.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_workspace#qsp_threshold ApsWorkspace#qsp_threshold}

---

### ApsWorkspaceTags <a name="ApsWorkspaceTags" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.aps_workspace.ApsWorkspaceTags;

ApsWorkspaceTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_workspace#key ApsWorkspace#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_workspace#value ApsWorkspace#value}

---

### ApsWorkspaceWorkspaceConfiguration <a name="ApsWorkspaceWorkspaceConfiguration" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.aps_workspace.ApsWorkspaceWorkspaceConfiguration;

ApsWorkspaceWorkspaceConfiguration.builder()
//  .limitsPerLabelSets(IResolvable|java.util.List<ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets>)
//  .outOfOrderTimeWindowInSeconds(java.lang.Number)
//  .retentionPeriodInDays(java.lang.Number)
//  .ruleQueryOffsetInSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfiguration.property.limitsPerLabelSets">limitsPerLabelSets</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets">ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets</a>></code> | An array of label set and associated limits. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfiguration.property.outOfOrderTimeWindowInSeconds">outOfOrderTimeWindowInSeconds</a></code> | <code>java.lang.Number</code> | The time window in seconds for accepting out-of-order samples. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfiguration.property.retentionPeriodInDays">retentionPeriodInDays</a></code> | <code>java.lang.Number</code> | How many days that metrics are retained in the workspace. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfiguration.property.ruleQueryOffsetInSeconds">ruleQueryOffsetInSeconds</a></code> | <code>java.lang.Number</code> | Duration in seconds to offset rule evaluation queries into the past. |

---

##### `limitsPerLabelSets`<sup>Optional</sup> <a name="limitsPerLabelSets" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfiguration.property.limitsPerLabelSets"></a>

```java
public IResolvable|java.util.List<ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets> getLimitsPerLabelSets();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets">ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets</a>>

An array of label set and associated limits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_workspace#limits_per_label_sets ApsWorkspace#limits_per_label_sets}

---

##### `outOfOrderTimeWindowInSeconds`<sup>Optional</sup> <a name="outOfOrderTimeWindowInSeconds" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfiguration.property.outOfOrderTimeWindowInSeconds"></a>

```java
public java.lang.Number getOutOfOrderTimeWindowInSeconds();
```

- *Type:* java.lang.Number

The time window in seconds for accepting out-of-order samples.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_workspace#out_of_order_time_window_in_seconds ApsWorkspace#out_of_order_time_window_in_seconds}

---

##### `retentionPeriodInDays`<sup>Optional</sup> <a name="retentionPeriodInDays" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfiguration.property.retentionPeriodInDays"></a>

```java
public java.lang.Number getRetentionPeriodInDays();
```

- *Type:* java.lang.Number

How many days that metrics are retained in the workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_workspace#retention_period_in_days ApsWorkspace#retention_period_in_days}

---

##### `ruleQueryOffsetInSeconds`<sup>Optional</sup> <a name="ruleQueryOffsetInSeconds" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfiguration.property.ruleQueryOffsetInSeconds"></a>

```java
public java.lang.Number getRuleQueryOffsetInSeconds();
```

- *Type:* java.lang.Number

Duration in seconds to offset rule evaluation queries into the past.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_workspace#rule_query_offset_in_seconds ApsWorkspace#rule_query_offset_in_seconds}

---

### ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets <a name="ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets.Initializer"></a>

```java
import io.cdktn.providers.awscc.aps_workspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets;

ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets.builder()
//  .labelSet(IResolvable|java.util.List<ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet>)
//  .limits(ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets.property.labelSet">labelSet</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet">ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet</a>></code> | An array of series labels. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets.property.limits">limits</a></code> | <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits">ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits</a></code> | Limits that can be applied to a label set. |

---

##### `labelSet`<sup>Optional</sup> <a name="labelSet" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets.property.labelSet"></a>

```java
public IResolvable|java.util.List<ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet> getLabelSet();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet">ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet</a>>

An array of series labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_workspace#label_set ApsWorkspace#label_set}

---

##### `limits`<sup>Optional</sup> <a name="limits" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets.property.limits"></a>

```java
public ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits getLimits();
```

- *Type:* <a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits">ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits</a>

Limits that can be applied to a label set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_workspace#limits ApsWorkspace#limits}

---

### ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet <a name="ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet.Initializer"></a>

```java
import io.cdktn.providers.awscc.aps_workspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet;

ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet.builder()
//  .name(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet.property.name">name</a></code> | <code>java.lang.String</code> | Name of the label. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet.property.value">value</a></code> | <code>java.lang.String</code> | Value of the label. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_workspace#name ApsWorkspace#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Value of the label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_workspace#value ApsWorkspace#value}

---

### ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits <a name="ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits.Initializer"></a>

```java
import io.cdktn.providers.awscc.aps_workspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits;

ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits.builder()
//  .maxSeries(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits.property.maxSeries">maxSeries</a></code> | <code>java.lang.Number</code> | The maximum number of active series that can be ingested for this label set. |

---

##### `maxSeries`<sup>Optional</sup> <a name="maxSeries" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits.property.maxSeries"></a>

```java
public java.lang.Number getMaxSeries();
```

- *Type:* java.lang.Number

The maximum number of active series that can be ingested for this label set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_workspace#max_series ApsWorkspace#max_series}

---

## Classes <a name="Classes" id="Classes"></a>

### ApsWorkspaceLoggingConfigurationOutputReference <a name="ApsWorkspaceLoggingConfigurationOutputReference" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.aps_workspace.ApsWorkspaceLoggingConfigurationOutputReference;

new ApsWorkspaceLoggingConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.resetLogGroupArn">resetLogGroupArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogGroupArn` <a name="resetLogGroupArn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.resetLogGroupArn"></a>

```java
public void resetLogGroupArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.property.logGroupArnInput">logGroupArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.property.logGroupArn">logGroupArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfiguration">ApsWorkspaceLoggingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `logGroupArnInput`<sup>Optional</sup> <a name="logGroupArnInput" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.property.logGroupArnInput"></a>

```java
public java.lang.String getLogGroupArnInput();
```

- *Type:* java.lang.String

---

##### `logGroupArn`<sup>Required</sup> <a name="logGroupArn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.property.logGroupArn"></a>

```java
public java.lang.String getLogGroupArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|ApsWorkspaceLoggingConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfiguration">ApsWorkspaceLoggingConfiguration</a>

---


### ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference <a name="ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.aps_workspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference;

new ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.resetLogGroupArn">resetLogGroupArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogGroupArn` <a name="resetLogGroupArn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.resetLogGroupArn"></a>

```java
public void resetLogGroupArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.property.logGroupArnInput">logGroupArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.property.logGroupArn">logGroupArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs">ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `logGroupArnInput`<sup>Optional</sup> <a name="logGroupArnInput" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.property.logGroupArnInput"></a>

```java
public java.lang.String getLogGroupArnInput();
```

- *Type:* java.lang.String

---

##### `logGroupArn`<sup>Required</sup> <a name="logGroupArn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.property.logGroupArn"></a>

```java
public java.lang.String getLogGroupArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.property.internalValue"></a>

```java
public IResolvable|ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs">ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs</a>

---


### ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference <a name="ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.aps_workspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference;

new ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.resetQspThreshold">resetQspThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetQspThreshold` <a name="resetQspThreshold" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.resetQspThreshold"></a>

```java
public void resetQspThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.property.qspThresholdInput">qspThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.property.qspThreshold">qspThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFilters">ApsWorkspaceQueryLoggingConfigurationDestinationsFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `qspThresholdInput`<sup>Optional</sup> <a name="qspThresholdInput" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.property.qspThresholdInput"></a>

```java
public java.lang.Number getQspThresholdInput();
```

- *Type:* java.lang.Number

---

##### `qspThreshold`<sup>Required</sup> <a name="qspThreshold" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.property.qspThreshold"></a>

```java
public java.lang.Number getQspThreshold();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.property.internalValue"></a>

```java
public IResolvable|ApsWorkspaceQueryLoggingConfigurationDestinationsFilters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFilters">ApsWorkspaceQueryLoggingConfigurationDestinationsFilters</a>

---


### ApsWorkspaceQueryLoggingConfigurationDestinationsList <a name="ApsWorkspaceQueryLoggingConfigurationDestinationsList" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.aps_workspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList;

new ApsWorkspaceQueryLoggingConfigurationDestinationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.get"></a>

```java
public ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinations">ApsWorkspaceQueryLoggingConfigurationDestinations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ApsWorkspaceQueryLoggingConfigurationDestinations> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinations">ApsWorkspaceQueryLoggingConfigurationDestinations</a>>

---


### ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference <a name="ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.aps_workspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference;

new ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.putCloudwatchLogs">putCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.putFilters">putFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.resetCloudwatchLogs">resetCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.resetFilters">resetFilters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudwatchLogs` <a name="putCloudwatchLogs" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.putCloudwatchLogs"></a>

```java
public void putCloudwatchLogs(ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.putCloudwatchLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs">ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs</a>

---

##### `putFilters` <a name="putFilters" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.putFilters"></a>

```java
public void putFilters(ApsWorkspaceQueryLoggingConfigurationDestinationsFilters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.putFilters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFilters">ApsWorkspaceQueryLoggingConfigurationDestinationsFilters</a>

---

##### `resetCloudwatchLogs` <a name="resetCloudwatchLogs" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.resetCloudwatchLogs"></a>

```java
public void resetCloudwatchLogs()
```

##### `resetFilters` <a name="resetFilters" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.resetFilters"></a>

```java
public void resetFilters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.property.cloudwatchLogs">cloudwatchLogs</a></code> | <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference">ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.property.filters">filters</a></code> | <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference">ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.property.cloudwatchLogsInput">cloudwatchLogsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs">ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.property.filtersInput">filtersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFilters">ApsWorkspaceQueryLoggingConfigurationDestinationsFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinations">ApsWorkspaceQueryLoggingConfigurationDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudwatchLogs`<sup>Required</sup> <a name="cloudwatchLogs" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.property.cloudwatchLogs"></a>

```java
public ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference getCloudwatchLogs();
```

- *Type:* <a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference">ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference</a>

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.property.filters"></a>

```java
public ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference getFilters();
```

- *Type:* <a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference">ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference</a>

---

##### `cloudwatchLogsInput`<sup>Optional</sup> <a name="cloudwatchLogsInput" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.property.cloudwatchLogsInput"></a>

```java
public IResolvable|ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs getCloudwatchLogsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs">ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs</a>

---

##### `filtersInput`<sup>Optional</sup> <a name="filtersInput" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.property.filtersInput"></a>

```java
public IResolvable|ApsWorkspaceQueryLoggingConfigurationDestinationsFilters getFiltersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFilters">ApsWorkspaceQueryLoggingConfigurationDestinationsFilters</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.property.internalValue"></a>

```java
public IResolvable|ApsWorkspaceQueryLoggingConfigurationDestinations getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinations">ApsWorkspaceQueryLoggingConfigurationDestinations</a>

---


### ApsWorkspaceQueryLoggingConfigurationOutputReference <a name="ApsWorkspaceQueryLoggingConfigurationOutputReference" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.aps_workspace.ApsWorkspaceQueryLoggingConfigurationOutputReference;

new ApsWorkspaceQueryLoggingConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.putDestinations">putDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.resetDestinations">resetDestinations</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestinations` <a name="putDestinations" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.putDestinations"></a>

```java
public void putDestinations(IResolvable|java.util.List<ApsWorkspaceQueryLoggingConfigurationDestinations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.putDestinations.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinations">ApsWorkspaceQueryLoggingConfigurationDestinations</a>>

---

##### `resetDestinations` <a name="resetDestinations" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.resetDestinations"></a>

```java
public void resetDestinations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.property.destinations">destinations</a></code> | <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList">ApsWorkspaceQueryLoggingConfigurationDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.property.destinationsInput">destinationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinations">ApsWorkspaceQueryLoggingConfigurationDestinations</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfiguration">ApsWorkspaceQueryLoggingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.property.destinations"></a>

```java
public ApsWorkspaceQueryLoggingConfigurationDestinationsList getDestinations();
```

- *Type:* <a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList">ApsWorkspaceQueryLoggingConfigurationDestinationsList</a>

---

##### `destinationsInput`<sup>Optional</sup> <a name="destinationsInput" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.property.destinationsInput"></a>

```java
public IResolvable|java.util.List<ApsWorkspaceQueryLoggingConfigurationDestinations> getDestinationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinations">ApsWorkspaceQueryLoggingConfigurationDestinations</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|ApsWorkspaceQueryLoggingConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfiguration">ApsWorkspaceQueryLoggingConfiguration</a>

---


### ApsWorkspaceTagsList <a name="ApsWorkspaceTagsList" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.aps_workspace.ApsWorkspaceTagsList;

new ApsWorkspaceTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.get"></a>

```java
public ApsWorkspaceTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTags">ApsWorkspaceTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ApsWorkspaceTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTags">ApsWorkspaceTags</a>>

---


### ApsWorkspaceTagsOutputReference <a name="ApsWorkspaceTagsOutputReference" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.aps_workspace.ApsWorkspaceTagsOutputReference;

new ApsWorkspaceTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTags">ApsWorkspaceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|ApsWorkspaceTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTags">ApsWorkspaceTags</a>

---


### ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList <a name="ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.Initializer"></a>

```java
import io.cdktn.providers.awscc.aps_workspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList;

new ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.get"></a>

```java
public ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet">ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet">ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet</a>>

---


### ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference <a name="ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.aps_workspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference;

new ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet">ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.property.internalValue"></a>

```java
public IResolvable|ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet">ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet</a>

---


### ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference <a name="ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.aps_workspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference;

new ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.resetMaxSeries">resetMaxSeries</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxSeries` <a name="resetMaxSeries" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.resetMaxSeries"></a>

```java
public void resetMaxSeries()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.property.maxSeriesInput">maxSeriesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.property.maxSeries">maxSeries</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits">ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxSeriesInput`<sup>Optional</sup> <a name="maxSeriesInput" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.property.maxSeriesInput"></a>

```java
public java.lang.Number getMaxSeriesInput();
```

- *Type:* java.lang.Number

---

##### `maxSeries`<sup>Required</sup> <a name="maxSeries" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.property.maxSeries"></a>

```java
public java.lang.Number getMaxSeries();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.property.internalValue"></a>

```java
public IResolvable|ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits">ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits</a>

---


### ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList <a name="ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.aps_workspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList;

new ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.get"></a>

```java
public ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets">ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets">ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets</a>>

---


### ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference <a name="ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.aps_workspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference;

new ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.putLabelSet">putLabelSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.putLimits">putLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.resetLabelSet">resetLabelSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.resetLimits">resetLimits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLabelSet` <a name="putLabelSet" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.putLabelSet"></a>

```java
public void putLabelSet(IResolvable|java.util.List<ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.putLabelSet.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet">ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet</a>>

---

##### `putLimits` <a name="putLimits" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.putLimits"></a>

```java
public void putLimits(ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.putLimits.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits">ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits</a>

---

##### `resetLabelSet` <a name="resetLabelSet" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.resetLabelSet"></a>

```java
public void resetLabelSet()
```

##### `resetLimits` <a name="resetLimits" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.resetLimits"></a>

```java
public void resetLimits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.property.labelSet">labelSet</a></code> | <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList">ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.property.limits">limits</a></code> | <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference">ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.property.labelSetInput">labelSetInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet">ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.property.limitsInput">limitsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits">ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets">ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `labelSet`<sup>Required</sup> <a name="labelSet" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.property.labelSet"></a>

```java
public ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList getLabelSet();
```

- *Type:* <a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList">ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList</a>

---

##### `limits`<sup>Required</sup> <a name="limits" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.property.limits"></a>

```java
public ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference getLimits();
```

- *Type:* <a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference">ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference</a>

---

##### `labelSetInput`<sup>Optional</sup> <a name="labelSetInput" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.property.labelSetInput"></a>

```java
public IResolvable|java.util.List<ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet> getLabelSetInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet">ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet</a>>

---

##### `limitsInput`<sup>Optional</sup> <a name="limitsInput" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.property.limitsInput"></a>

```java
public IResolvable|ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits getLimitsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits">ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.property.internalValue"></a>

```java
public IResolvable|ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets">ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets</a>

---


### ApsWorkspaceWorkspaceConfigurationOutputReference <a name="ApsWorkspaceWorkspaceConfigurationOutputReference" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.aps_workspace.ApsWorkspaceWorkspaceConfigurationOutputReference;

new ApsWorkspaceWorkspaceConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.putLimitsPerLabelSets">putLimitsPerLabelSets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.resetLimitsPerLabelSets">resetLimitsPerLabelSets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.resetOutOfOrderTimeWindowInSeconds">resetOutOfOrderTimeWindowInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.resetRetentionPeriodInDays">resetRetentionPeriodInDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.resetRuleQueryOffsetInSeconds">resetRuleQueryOffsetInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLimitsPerLabelSets` <a name="putLimitsPerLabelSets" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.putLimitsPerLabelSets"></a>

```java
public void putLimitsPerLabelSets(IResolvable|java.util.List<ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.putLimitsPerLabelSets.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets">ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets</a>>

---

##### `resetLimitsPerLabelSets` <a name="resetLimitsPerLabelSets" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.resetLimitsPerLabelSets"></a>

```java
public void resetLimitsPerLabelSets()
```

##### `resetOutOfOrderTimeWindowInSeconds` <a name="resetOutOfOrderTimeWindowInSeconds" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.resetOutOfOrderTimeWindowInSeconds"></a>

```java
public void resetOutOfOrderTimeWindowInSeconds()
```

##### `resetRetentionPeriodInDays` <a name="resetRetentionPeriodInDays" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.resetRetentionPeriodInDays"></a>

```java
public void resetRetentionPeriodInDays()
```

##### `resetRuleQueryOffsetInSeconds` <a name="resetRuleQueryOffsetInSeconds" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.resetRuleQueryOffsetInSeconds"></a>

```java
public void resetRuleQueryOffsetInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.property.limitsPerLabelSets">limitsPerLabelSets</a></code> | <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList">ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.property.limitsPerLabelSetsInput">limitsPerLabelSetsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets">ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.property.outOfOrderTimeWindowInSecondsInput">outOfOrderTimeWindowInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.property.retentionPeriodInDaysInput">retentionPeriodInDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.property.ruleQueryOffsetInSecondsInput">ruleQueryOffsetInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.property.outOfOrderTimeWindowInSeconds">outOfOrderTimeWindowInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.property.retentionPeriodInDays">retentionPeriodInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.property.ruleQueryOffsetInSeconds">ruleQueryOffsetInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfiguration">ApsWorkspaceWorkspaceConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `limitsPerLabelSets`<sup>Required</sup> <a name="limitsPerLabelSets" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.property.limitsPerLabelSets"></a>

```java
public ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList getLimitsPerLabelSets();
```

- *Type:* <a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList">ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList</a>

---

##### `limitsPerLabelSetsInput`<sup>Optional</sup> <a name="limitsPerLabelSetsInput" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.property.limitsPerLabelSetsInput"></a>

```java
public IResolvable|java.util.List<ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets> getLimitsPerLabelSetsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets">ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets</a>>

---

##### `outOfOrderTimeWindowInSecondsInput`<sup>Optional</sup> <a name="outOfOrderTimeWindowInSecondsInput" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.property.outOfOrderTimeWindowInSecondsInput"></a>

```java
public java.lang.Number getOutOfOrderTimeWindowInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `retentionPeriodInDaysInput`<sup>Optional</sup> <a name="retentionPeriodInDaysInput" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.property.retentionPeriodInDaysInput"></a>

```java
public java.lang.Number getRetentionPeriodInDaysInput();
```

- *Type:* java.lang.Number

---

##### `ruleQueryOffsetInSecondsInput`<sup>Optional</sup> <a name="ruleQueryOffsetInSecondsInput" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.property.ruleQueryOffsetInSecondsInput"></a>

```java
public java.lang.Number getRuleQueryOffsetInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `outOfOrderTimeWindowInSeconds`<sup>Required</sup> <a name="outOfOrderTimeWindowInSeconds" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.property.outOfOrderTimeWindowInSeconds"></a>

```java
public java.lang.Number getOutOfOrderTimeWindowInSeconds();
```

- *Type:* java.lang.Number

---

##### `retentionPeriodInDays`<sup>Required</sup> <a name="retentionPeriodInDays" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.property.retentionPeriodInDays"></a>

```java
public java.lang.Number getRetentionPeriodInDays();
```

- *Type:* java.lang.Number

---

##### `ruleQueryOffsetInSeconds`<sup>Required</sup> <a name="ruleQueryOffsetInSeconds" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.property.ruleQueryOffsetInSeconds"></a>

```java
public java.lang.Number getRuleQueryOffsetInSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|ApsWorkspaceWorkspaceConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfiguration">ApsWorkspaceWorkspaceConfiguration</a>

---



