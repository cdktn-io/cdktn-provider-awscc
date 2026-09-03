# `workspacesWorkspaceIpGroup` Submodule <a name="`workspacesWorkspaceIpGroup` Submodule" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspacesWorkspaceIpGroup <a name="WorkspacesWorkspaceIpGroup" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/workspaces_workspace_ip_group awscc_workspaces_workspace_ip_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspaces_workspace_ip_group.WorkspacesWorkspaceIpGroup;

WorkspacesWorkspaceIpGroup.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .groupName(java.lang.String)
//  .groupDesc(java.lang.String)
//  .tags(IResolvable|java.util.List<WorkspacesWorkspaceIpGroupTags>)
//  .userRules(IResolvable|java.util.List<WorkspacesWorkspaceIpGroupUserRules>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.Initializer.parameter.groupName">groupName</a></code> | <code>java.lang.String</code> | The name of the group. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.Initializer.parameter.groupDesc">groupDesc</a></code> | <code>java.lang.String</code> | The description of the group. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTags">WorkspacesWorkspaceIpGroupTags</a>></code> | The tags for the IP access control group. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.Initializer.parameter.userRules">userRules</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRules">WorkspacesWorkspaceIpGroupUserRules</a>></code> | The rules for the IP access control group. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.Initializer.parameter.groupName"></a>

- *Type:* java.lang.String

The name of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/workspaces_workspace_ip_group#group_name WorkspacesWorkspaceIpGroup#group_name}

---

##### `groupDesc`<sup>Optional</sup> <a name="groupDesc" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.Initializer.parameter.groupDesc"></a>

- *Type:* java.lang.String

The description of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/workspaces_workspace_ip_group#group_desc WorkspacesWorkspaceIpGroup#group_desc}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTags">WorkspacesWorkspaceIpGroupTags</a>>

The tags for the IP access control group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/workspaces_workspace_ip_group#tags WorkspacesWorkspaceIpGroup#tags}

---

##### `userRules`<sup>Optional</sup> <a name="userRules" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.Initializer.parameter.userRules"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRules">WorkspacesWorkspaceIpGroupUserRules</a>>

The rules for the IP access control group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/workspaces_workspace_ip_group#user_rules WorkspacesWorkspaceIpGroup#user_rules}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.putUserRules">putUserRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.resetGroupDesc">resetGroupDesc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.resetUserRules">resetUserRules</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<WorkspacesWorkspaceIpGroupTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTags">WorkspacesWorkspaceIpGroupTags</a>>

---

##### `putUserRules` <a name="putUserRules" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.putUserRules"></a>

```java
public void putUserRules(IResolvable|java.util.List<WorkspacesWorkspaceIpGroupUserRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.putUserRules.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRules">WorkspacesWorkspaceIpGroupUserRules</a>>

---

##### `resetGroupDesc` <a name="resetGroupDesc" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.resetGroupDesc"></a>

```java
public void resetGroupDesc()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.resetTags"></a>

```java
public void resetTags()
```

##### `resetUserRules` <a name="resetUserRules" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.resetUserRules"></a>

```java
public void resetUserRules()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a WorkspacesWorkspaceIpGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.isConstruct"></a>

```java
import io.cdktn.providers.awscc.workspaces_workspace_ip_group.WorkspacesWorkspaceIpGroup;

WorkspacesWorkspaceIpGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.workspaces_workspace_ip_group.WorkspacesWorkspaceIpGroup;

WorkspacesWorkspaceIpGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.workspaces_workspace_ip_group.WorkspacesWorkspaceIpGroup;

WorkspacesWorkspaceIpGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.workspaces_workspace_ip_group.WorkspacesWorkspaceIpGroup;

WorkspacesWorkspaceIpGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),WorkspacesWorkspaceIpGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a WorkspacesWorkspaceIpGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the WorkspacesWorkspaceIpGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing WorkspacesWorkspaceIpGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/workspaces_workspace_ip_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the WorkspacesWorkspaceIpGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.groupId">groupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsList">WorkspacesWorkspaceIpGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.userRules">userRules</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesList">WorkspacesWorkspaceIpGroupUserRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.groupDescInput">groupDescInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.groupNameInput">groupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTags">WorkspacesWorkspaceIpGroupTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.userRulesInput">userRulesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRules">WorkspacesWorkspaceIpGroupUserRules</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.groupDesc">groupDesc</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.groupName">groupName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.groupId"></a>

```java
public java.lang.String getGroupId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.tags"></a>

```java
public WorkspacesWorkspaceIpGroupTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsList">WorkspacesWorkspaceIpGroupTagsList</a>

---

##### `userRules`<sup>Required</sup> <a name="userRules" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.userRules"></a>

```java
public WorkspacesWorkspaceIpGroupUserRulesList getUserRules();
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesList">WorkspacesWorkspaceIpGroupUserRulesList</a>

---

##### `groupDescInput`<sup>Optional</sup> <a name="groupDescInput" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.groupDescInput"></a>

```java
public java.lang.String getGroupDescInput();
```

- *Type:* java.lang.String

---

##### `groupNameInput`<sup>Optional</sup> <a name="groupNameInput" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.groupNameInput"></a>

```java
public java.lang.String getGroupNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.tagsInput"></a>

```java
public IResolvable|java.util.List<WorkspacesWorkspaceIpGroupTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTags">WorkspacesWorkspaceIpGroupTags</a>>

---

##### `userRulesInput`<sup>Optional</sup> <a name="userRulesInput" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.userRulesInput"></a>

```java
public IResolvable|java.util.List<WorkspacesWorkspaceIpGroupUserRules> getUserRulesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRules">WorkspacesWorkspaceIpGroupUserRules</a>>

---

##### `groupDesc`<sup>Required</sup> <a name="groupDesc" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.groupDesc"></a>

```java
public java.lang.String getGroupDesc();
```

- *Type:* java.lang.String

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.groupName"></a>

```java
public java.lang.String getGroupName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspacesWorkspaceIpGroupConfig <a name="WorkspacesWorkspaceIpGroupConfig" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspaces_workspace_ip_group.WorkspacesWorkspaceIpGroupConfig;

WorkspacesWorkspaceIpGroupConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .groupName(java.lang.String)
//  .groupDesc(java.lang.String)
//  .tags(IResolvable|java.util.List<WorkspacesWorkspaceIpGroupTags>)
//  .userRules(IResolvable|java.util.List<WorkspacesWorkspaceIpGroupUserRules>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupConfig.property.groupName">groupName</a></code> | <code>java.lang.String</code> | The name of the group. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupConfig.property.groupDesc">groupDesc</a></code> | <code>java.lang.String</code> | The description of the group. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTags">WorkspacesWorkspaceIpGroupTags</a>></code> | The tags for the IP access control group. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupConfig.property.userRules">userRules</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRules">WorkspacesWorkspaceIpGroupUserRules</a>></code> | The rules for the IP access control group. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupConfig.property.groupName"></a>

```java
public java.lang.String getGroupName();
```

- *Type:* java.lang.String

The name of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/workspaces_workspace_ip_group#group_name WorkspacesWorkspaceIpGroup#group_name}

---

##### `groupDesc`<sup>Optional</sup> <a name="groupDesc" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupConfig.property.groupDesc"></a>

```java
public java.lang.String getGroupDesc();
```

- *Type:* java.lang.String

The description of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/workspaces_workspace_ip_group#group_desc WorkspacesWorkspaceIpGroup#group_desc}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupConfig.property.tags"></a>

```java
public IResolvable|java.util.List<WorkspacesWorkspaceIpGroupTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTags">WorkspacesWorkspaceIpGroupTags</a>>

The tags for the IP access control group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/workspaces_workspace_ip_group#tags WorkspacesWorkspaceIpGroup#tags}

---

##### `userRules`<sup>Optional</sup> <a name="userRules" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupConfig.property.userRules"></a>

```java
public IResolvable|java.util.List<WorkspacesWorkspaceIpGroupUserRules> getUserRules();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRules">WorkspacesWorkspaceIpGroupUserRules</a>>

The rules for the IP access control group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/workspaces_workspace_ip_group#user_rules WorkspacesWorkspaceIpGroup#user_rules}

---

### WorkspacesWorkspaceIpGroupTags <a name="WorkspacesWorkspaceIpGroupTags" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspaces_workspace_ip_group.WorkspacesWorkspaceIpGroupTags;

WorkspacesWorkspaceIpGroupTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTags.property.key">key</a></code> | <code>java.lang.String</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTags.property.value">value</a></code> | <code>java.lang.String</code> | The value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/workspaces_workspace_ip_group#key WorkspacesWorkspaceIpGroup#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/workspaces_workspace_ip_group#value WorkspacesWorkspaceIpGroup#value}

---

### WorkspacesWorkspaceIpGroupUserRules <a name="WorkspacesWorkspaceIpGroupUserRules" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRules.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspaces_workspace_ip_group.WorkspacesWorkspaceIpGroupUserRules;

WorkspacesWorkspaceIpGroupUserRules.builder()
//  .ipRule(java.lang.String)
//  .ruleDesc(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRules.property.ipRule">ipRule</a></code> | <code>java.lang.String</code> | The IP address range, in CIDR notation. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRules.property.ruleDesc">ruleDesc</a></code> | <code>java.lang.String</code> | The description of the rule. |

---

##### `ipRule`<sup>Optional</sup> <a name="ipRule" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRules.property.ipRule"></a>

```java
public java.lang.String getIpRule();
```

- *Type:* java.lang.String

The IP address range, in CIDR notation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/workspaces_workspace_ip_group#ip_rule WorkspacesWorkspaceIpGroup#ip_rule}

---

##### `ruleDesc`<sup>Optional</sup> <a name="ruleDesc" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRules.property.ruleDesc"></a>

```java
public java.lang.String getRuleDesc();
```

- *Type:* java.lang.String

The description of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/workspaces_workspace_ip_group#rule_desc WorkspacesWorkspaceIpGroup#rule_desc}

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspacesWorkspaceIpGroupTagsList <a name="WorkspacesWorkspaceIpGroupTagsList" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspaces_workspace_ip_group.WorkspacesWorkspaceIpGroupTagsList;

new WorkspacesWorkspaceIpGroupTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsList.get"></a>

```java
public WorkspacesWorkspaceIpGroupTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTags">WorkspacesWorkspaceIpGroupTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<WorkspacesWorkspaceIpGroupTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTags">WorkspacesWorkspaceIpGroupTags</a>>

---


### WorkspacesWorkspaceIpGroupTagsOutputReference <a name="WorkspacesWorkspaceIpGroupTagsOutputReference" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspaces_workspace_ip_group.WorkspacesWorkspaceIpGroupTagsOutputReference;

new WorkspacesWorkspaceIpGroupTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTags">WorkspacesWorkspaceIpGroupTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|WorkspacesWorkspaceIpGroupTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTags">WorkspacesWorkspaceIpGroupTags</a>

---


### WorkspacesWorkspaceIpGroupUserRulesList <a name="WorkspacesWorkspaceIpGroupUserRulesList" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspaces_workspace_ip_group.WorkspacesWorkspaceIpGroupUserRulesList;

new WorkspacesWorkspaceIpGroupUserRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesList.get"></a>

```java
public WorkspacesWorkspaceIpGroupUserRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRules">WorkspacesWorkspaceIpGroupUserRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<WorkspacesWorkspaceIpGroupUserRules> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRules">WorkspacesWorkspaceIpGroupUserRules</a>>

---


### WorkspacesWorkspaceIpGroupUserRulesOutputReference <a name="WorkspacesWorkspaceIpGroupUserRulesOutputReference" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspaces_workspace_ip_group.WorkspacesWorkspaceIpGroupUserRulesOutputReference;

new WorkspacesWorkspaceIpGroupUserRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.resetIpRule">resetIpRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.resetRuleDesc">resetRuleDesc</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpRule` <a name="resetIpRule" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.resetIpRule"></a>

```java
public void resetIpRule()
```

##### `resetRuleDesc` <a name="resetRuleDesc" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.resetRuleDesc"></a>

```java
public void resetRuleDesc()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.property.ipRuleInput">ipRuleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.property.ruleDescInput">ruleDescInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.property.ipRule">ipRule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.property.ruleDesc">ruleDesc</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRules">WorkspacesWorkspaceIpGroupUserRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipRuleInput`<sup>Optional</sup> <a name="ipRuleInput" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.property.ipRuleInput"></a>

```java
public java.lang.String getIpRuleInput();
```

- *Type:* java.lang.String

---

##### `ruleDescInput`<sup>Optional</sup> <a name="ruleDescInput" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.property.ruleDescInput"></a>

```java
public java.lang.String getRuleDescInput();
```

- *Type:* java.lang.String

---

##### `ipRule`<sup>Required</sup> <a name="ipRule" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.property.ipRule"></a>

```java
public java.lang.String getIpRule();
```

- *Type:* java.lang.String

---

##### `ruleDesc`<sup>Required</sup> <a name="ruleDesc" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.property.ruleDesc"></a>

```java
public java.lang.String getRuleDesc();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.property.internalValue"></a>

```java
public IResolvable|WorkspacesWorkspaceIpGroupUserRules getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRules">WorkspacesWorkspaceIpGroupUserRules</a>

---



