# `pcaconnectoradTemplateGroupAccessControlEntry` Submodule <a name="`pcaconnectoradTemplateGroupAccessControlEntry` Submodule" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PcaconnectoradTemplateGroupAccessControlEntry <a name="PcaconnectoradTemplateGroupAccessControlEntry" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcaconnectorad_template_group_access_control_entry awscc_pcaconnectorad_template_group_access_control_entry}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.Initializer"></a>

```java
import io.cdktn.providers.awscc.pcaconnectorad_template_group_access_control_entry.PcaconnectoradTemplateGroupAccessControlEntry;

PcaconnectoradTemplateGroupAccessControlEntry.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accessRights(PcaconnectoradTemplateGroupAccessControlEntryAccessRights)
    .groupDisplayName(java.lang.String)
    .groupSecurityIdentifier(java.lang.String)
    .templateArn(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.accessRights">accessRights</a></code> | <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRights">PcaconnectoradTemplateGroupAccessControlEntryAccessRights</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcaconnectorad_template_group_access_control_entry#access_rights PcaconnectoradTemplateGroupAccessControlEntry#access_rights}. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.groupDisplayName">groupDisplayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcaconnectorad_template_group_access_control_entry#group_display_name PcaconnectoradTemplateGroupAccessControlEntry#group_display_name}. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.groupSecurityIdentifier">groupSecurityIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcaconnectorad_template_group_access_control_entry#group_security_identifier PcaconnectoradTemplateGroupAccessControlEntry#group_security_identifier}. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.templateArn">templateArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcaconnectorad_template_group_access_control_entry#template_arn PcaconnectoradTemplateGroupAccessControlEntry#template_arn}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accessRights`<sup>Required</sup> <a name="accessRights" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.accessRights"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRights">PcaconnectoradTemplateGroupAccessControlEntryAccessRights</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcaconnectorad_template_group_access_control_entry#access_rights PcaconnectoradTemplateGroupAccessControlEntry#access_rights}.

---

##### `groupDisplayName`<sup>Required</sup> <a name="groupDisplayName" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.groupDisplayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcaconnectorad_template_group_access_control_entry#group_display_name PcaconnectoradTemplateGroupAccessControlEntry#group_display_name}.

---

##### `groupSecurityIdentifier`<sup>Required</sup> <a name="groupSecurityIdentifier" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.groupSecurityIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcaconnectorad_template_group_access_control_entry#group_security_identifier PcaconnectoradTemplateGroupAccessControlEntry#group_security_identifier}.

---

##### `templateArn`<sup>Required</sup> <a name="templateArn" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.templateArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcaconnectorad_template_group_access_control_entry#template_arn PcaconnectoradTemplateGroupAccessControlEntry#template_arn}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.putAccessRights">putAccessRights</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAccessRights` <a name="putAccessRights" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.putAccessRights"></a>

```java
public void putAccessRights(PcaconnectoradTemplateGroupAccessControlEntryAccessRights value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.putAccessRights.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRights">PcaconnectoradTemplateGroupAccessControlEntryAccessRights</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PcaconnectoradTemplateGroupAccessControlEntry resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.isConstruct"></a>

```java
import io.cdktn.providers.awscc.pcaconnectorad_template_group_access_control_entry.PcaconnectoradTemplateGroupAccessControlEntry;

PcaconnectoradTemplateGroupAccessControlEntry.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.pcaconnectorad_template_group_access_control_entry.PcaconnectoradTemplateGroupAccessControlEntry;

PcaconnectoradTemplateGroupAccessControlEntry.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.pcaconnectorad_template_group_access_control_entry.PcaconnectoradTemplateGroupAccessControlEntry;

PcaconnectoradTemplateGroupAccessControlEntry.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.pcaconnectorad_template_group_access_control_entry.PcaconnectoradTemplateGroupAccessControlEntry;

PcaconnectoradTemplateGroupAccessControlEntry.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PcaconnectoradTemplateGroupAccessControlEntry.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a PcaconnectoradTemplateGroupAccessControlEntry resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PcaconnectoradTemplateGroupAccessControlEntry to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PcaconnectoradTemplateGroupAccessControlEntry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcaconnectorad_template_group_access_control_entry#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the PcaconnectoradTemplateGroupAccessControlEntry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.accessRights">accessRights</a></code> | <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference">PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.accessRightsInput">accessRightsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRights">PcaconnectoradTemplateGroupAccessControlEntryAccessRights</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.groupDisplayNameInput">groupDisplayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.groupSecurityIdentifierInput">groupSecurityIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.templateArnInput">templateArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.groupDisplayName">groupDisplayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.groupSecurityIdentifier">groupSecurityIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.templateArn">templateArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accessRights`<sup>Required</sup> <a name="accessRights" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.accessRights"></a>

```java
public PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference getAccessRights();
```

- *Type:* <a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference">PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `accessRightsInput`<sup>Optional</sup> <a name="accessRightsInput" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.accessRightsInput"></a>

```java
public IResolvable|PcaconnectoradTemplateGroupAccessControlEntryAccessRights getAccessRightsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRights">PcaconnectoradTemplateGroupAccessControlEntryAccessRights</a>

---

##### `groupDisplayNameInput`<sup>Optional</sup> <a name="groupDisplayNameInput" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.groupDisplayNameInput"></a>

```java
public java.lang.String getGroupDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `groupSecurityIdentifierInput`<sup>Optional</sup> <a name="groupSecurityIdentifierInput" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.groupSecurityIdentifierInput"></a>

```java
public java.lang.String getGroupSecurityIdentifierInput();
```

- *Type:* java.lang.String

---

##### `templateArnInput`<sup>Optional</sup> <a name="templateArnInput" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.templateArnInput"></a>

```java
public java.lang.String getTemplateArnInput();
```

- *Type:* java.lang.String

---

##### `groupDisplayName`<sup>Required</sup> <a name="groupDisplayName" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.groupDisplayName"></a>

```java
public java.lang.String getGroupDisplayName();
```

- *Type:* java.lang.String

---

##### `groupSecurityIdentifier`<sup>Required</sup> <a name="groupSecurityIdentifier" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.groupSecurityIdentifier"></a>

```java
public java.lang.String getGroupSecurityIdentifier();
```

- *Type:* java.lang.String

---

##### `templateArn`<sup>Required</sup> <a name="templateArn" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.templateArn"></a>

```java
public java.lang.String getTemplateArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PcaconnectoradTemplateGroupAccessControlEntryAccessRights <a name="PcaconnectoradTemplateGroupAccessControlEntryAccessRights" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRights"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRights.Initializer"></a>

```java
import io.cdktn.providers.awscc.pcaconnectorad_template_group_access_control_entry.PcaconnectoradTemplateGroupAccessControlEntryAccessRights;

PcaconnectoradTemplateGroupAccessControlEntryAccessRights.builder()
//  .autoEnroll(java.lang.String)
//  .enroll(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRights.property.autoEnroll">autoEnroll</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcaconnectorad_template_group_access_control_entry#auto_enroll PcaconnectoradTemplateGroupAccessControlEntry#auto_enroll}. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRights.property.enroll">enroll</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcaconnectorad_template_group_access_control_entry#enroll PcaconnectoradTemplateGroupAccessControlEntry#enroll}. |

---

##### `autoEnroll`<sup>Optional</sup> <a name="autoEnroll" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRights.property.autoEnroll"></a>

```java
public java.lang.String getAutoEnroll();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcaconnectorad_template_group_access_control_entry#auto_enroll PcaconnectoradTemplateGroupAccessControlEntry#auto_enroll}.

---

##### `enroll`<sup>Optional</sup> <a name="enroll" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRights.property.enroll"></a>

```java
public java.lang.String getEnroll();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcaconnectorad_template_group_access_control_entry#enroll PcaconnectoradTemplateGroupAccessControlEntry#enroll}.

---

### PcaconnectoradTemplateGroupAccessControlEntryConfig <a name="PcaconnectoradTemplateGroupAccessControlEntryConfig" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.pcaconnectorad_template_group_access_control_entry.PcaconnectoradTemplateGroupAccessControlEntryConfig;

PcaconnectoradTemplateGroupAccessControlEntryConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accessRights(PcaconnectoradTemplateGroupAccessControlEntryAccessRights)
    .groupDisplayName(java.lang.String)
    .groupSecurityIdentifier(java.lang.String)
    .templateArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.accessRights">accessRights</a></code> | <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRights">PcaconnectoradTemplateGroupAccessControlEntryAccessRights</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcaconnectorad_template_group_access_control_entry#access_rights PcaconnectoradTemplateGroupAccessControlEntry#access_rights}. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.groupDisplayName">groupDisplayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcaconnectorad_template_group_access_control_entry#group_display_name PcaconnectoradTemplateGroupAccessControlEntry#group_display_name}. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.groupSecurityIdentifier">groupSecurityIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcaconnectorad_template_group_access_control_entry#group_security_identifier PcaconnectoradTemplateGroupAccessControlEntry#group_security_identifier}. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.templateArn">templateArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcaconnectorad_template_group_access_control_entry#template_arn PcaconnectoradTemplateGroupAccessControlEntry#template_arn}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accessRights`<sup>Required</sup> <a name="accessRights" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.accessRights"></a>

```java
public PcaconnectoradTemplateGroupAccessControlEntryAccessRights getAccessRights();
```

- *Type:* <a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRights">PcaconnectoradTemplateGroupAccessControlEntryAccessRights</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcaconnectorad_template_group_access_control_entry#access_rights PcaconnectoradTemplateGroupAccessControlEntry#access_rights}.

---

##### `groupDisplayName`<sup>Required</sup> <a name="groupDisplayName" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.groupDisplayName"></a>

```java
public java.lang.String getGroupDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcaconnectorad_template_group_access_control_entry#group_display_name PcaconnectoradTemplateGroupAccessControlEntry#group_display_name}.

---

##### `groupSecurityIdentifier`<sup>Required</sup> <a name="groupSecurityIdentifier" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.groupSecurityIdentifier"></a>

```java
public java.lang.String getGroupSecurityIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcaconnectorad_template_group_access_control_entry#group_security_identifier PcaconnectoradTemplateGroupAccessControlEntry#group_security_identifier}.

---

##### `templateArn`<sup>Required</sup> <a name="templateArn" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.templateArn"></a>

```java
public java.lang.String getTemplateArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcaconnectorad_template_group_access_control_entry#template_arn PcaconnectoradTemplateGroupAccessControlEntry#template_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference <a name="PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.pcaconnectorad_template_group_access_control_entry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference;

new PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.resetAutoEnroll">resetAutoEnroll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.resetEnroll">resetEnroll</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutoEnroll` <a name="resetAutoEnroll" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.resetAutoEnroll"></a>

```java
public void resetAutoEnroll()
```

##### `resetEnroll` <a name="resetEnroll" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.resetEnroll"></a>

```java
public void resetEnroll()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.autoEnrollInput">autoEnrollInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.enrollInput">enrollInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.autoEnroll">autoEnroll</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.enroll">enroll</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRights">PcaconnectoradTemplateGroupAccessControlEntryAccessRights</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoEnrollInput`<sup>Optional</sup> <a name="autoEnrollInput" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.autoEnrollInput"></a>

```java
public java.lang.String getAutoEnrollInput();
```

- *Type:* java.lang.String

---

##### `enrollInput`<sup>Optional</sup> <a name="enrollInput" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.enrollInput"></a>

```java
public java.lang.String getEnrollInput();
```

- *Type:* java.lang.String

---

##### `autoEnroll`<sup>Required</sup> <a name="autoEnroll" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.autoEnroll"></a>

```java
public java.lang.String getAutoEnroll();
```

- *Type:* java.lang.String

---

##### `enroll`<sup>Required</sup> <a name="enroll" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.enroll"></a>

```java
public java.lang.String getEnroll();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.internalValue"></a>

```java
public IResolvable|PcaconnectoradTemplateGroupAccessControlEntryAccessRights getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRights">PcaconnectoradTemplateGroupAccessControlEntryAccessRights</a>

---



